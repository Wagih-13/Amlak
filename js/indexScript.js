//////////////////////////////////////// create backGroundHome slider /////////////////////////////////////////////
window.addEventListener("popstate", function (event) {
  // تحقق من تغير عنوان URL
  if (event.state && event.state.reload) {
    // أعد تحميل الصفحة
    location.reload();
  }
});

let swiper = new Swiper(".imageSlider .Slider-container", {
  effect: "Autoplay",
  grabCursor: true,
  centerdSlides: true,
  loop: true,
  autoplay: {
    delay: 2000,
    disableOnInteraction: false,
    pauseOnMouseEnter: false,
  },
  hashNavigation: {
    replaceState: true,
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});
swiper.running;
// swiper.changeDirection('vertical');

//////////////////////////////////////// create spceialUnits slider /////////////////////////////////////////////

const specialUnitsSlider = document.querySelector(".specialUnitsSlider");
const slideContainers = specialUnitsSlider.querySelectorAll(".slideContainer");

specialUnitsSlider.insertAdjacentHTML(
  "beforeend",
  specialUnitsSlider.querySelector(".slideContainer").outerHTML
);

function setSliderWidth(slideContainer) {
  const numberOfSlides = slideContainer.querySelectorAll(".slide").length;
  const slideWidth = 400;
  specialUnitsSlider.style.width = `${numberOfSlides * slideWidth * 2}px`;
}

slideContainers.forEach(setSliderWidth);

// Attach the event listener to the window object

// function trackMouse(event) {
//   // Get the mouse coordinates from the event object
//   const x = event.clientX;
//   const y = event.clientY;

//   // You can use these coordinates to do something, like:
//   console.log("Mouse at X: " + x + ", Y: " + y);
//   // Update an element's position based on mouse movement
//   //  ...
// }

// // Attach the event listener to the window object
// window.addEventListener("mousemove", trackMouse);

let isMouseDown;

// specialUnitsSlider.addEventListener("mousedown", function (event) {
//   if (specialUnitsSlider.contains(event.target)) {
//     isMouseDown = true;
//   }
// });
// window.addEventListener("mouseup", function (event) {
//   isMouseDown = false;
// });

// window.addEventListener("mousemove", (event) => {
//   const x = event.clientX;
//   if (isMouseDown) {
//     specialUnitsSlider.style.cssText = `transform: translateX(${x}px)`;
//   }
// });
specialUnitsSlider.addEventListener("touchstart", function (event) {
  if (specialUnitsSlider.contains(event.target)) {
    isMouseDown = true;
  }
});
window.addEventListener("touchend", function (event) {
  isMouseDown = false;
});
window.addEventListener("touchmove", (event) => {
  const x = event.clientX;
  if (isMouseDown) {
    specialUnitsSlider.style.cssText = `transform: translateX(${x}px)`;
  }
});
/////////////////////////////////////// create offer Slider //////////////////////////////////////////////
// const offerSliderData = [
//   { name: "ahmed", age: 23, id: 1 },
//   { name: "ahmed", age: 23, id: 1 },
//   { name: "ahmed", age: 23, id: 1 },
//   { name: "ahmed", age: 23, id: 2 },
//   { name: "ahmed", age: 23, id: 2 },
//   { name: "ahmed", age: 23, id: 2 },
//   { name: "ahmed", age: 23, id: 3 },
//   { name: "ahmed", age: 23, id: 3 },
//   { name: "ahmed", age: 23, id: 3 },
//   { name: "ahmed", age: 23, id: 3 },
// ];

// let groupIndex = Math.floor(offerSliderData.length / 3);
// let firstSlide = [];
// let secondSlide = [];
// let thirdSlide = [];

// for (let i = 0; i < groupIndex; i++) {
//   firstSlide.push(offerSliderData[i]);
// }
// for (let i = groupIndex; i < groupIndex * 2; i++) {
//   secondSlide.push(offerSliderData[i]);
// }
// for (let i = groupIndex * 2; i < offerSliderData.length; i++) {
//   thirdSlide.push(offerSliderData[i]);
// }
// const allOfferSliders = [firstSlide, secondSlide, thirdSlide];

// const offerSlidersContainer = document.querySelector(".offers .offerSlider");
// for (let i = 0; i < allOfferSliders.length; i++) {
//   offerSlidersContainer.insertAdjacentHTML(
//     "beforeend",
//     `  <div class="slider">
//             <div class="slideContainer">
//              ${allOfferSliders[i].map((ele) => {
//                `
//                <div class="slide">
//                 <div class="imageBox">
//                   <span class="offerLable">50%</span>
//                   <img src="./images/6.jpg" alt="" />
//                 </div>
//               </div>
//               `;
//              })}
//             </div>
//           </div>
//    `
//   );
// }

const offerSliders = document.querySelectorAll(".offerSlider .slider");

for (let i = 0; i < offerSliders.length; i++) {
  offerSliders[i].insertAdjacentHTML(
    "beforeend",
    offerSliders[i].querySelector(".slideContainer").outerHTML
  );
}

function setSliderHeight(slider) {
  const slideContainer = slider.querySelector(".slideContainer");
  const numberOfSlides = slideContainer.querySelectorAll(".slide").length;
  const slideHeight = 290;
  slider.style.height = `${numberOfSlides * slideHeight * 2}px`;
}

offerSliders.forEach(setSliderHeight);

//////////////////////////////////////// create whoAreWe slider /////////////////////////////////////////////

let whoAreWeSlider = new Swiper(".whoAreWeSlider .Slider-container", {
  effect: "cards",
  grabCursor: true,
  centerdSlides: true,
  loop: true,
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});
// swiper.changeDirection('vertical');

////////////////////////////////////// handel open and close sections //////////////////////////////////////////////
const filterUnitForm = document.querySelector(".filterUnitForm");
filterUnitForm.addEventListener("submit", function (event) {
  event.preventDefault();
  $(".unitSearchOutput").slideDown();
  const homeType = document.getElementById("AreaUnitName").value;
  const choseTown = document.getElementById("AreaUnitCode").value;
  const choseNeighborhood = document.getElementById("AreaUnitDistrict").value;

  const displayInputsValue = document.getElementById("displayInputsValue");
  displayInputsValue.innerHTML = `${homeType != "" ? homeType + " - " : ""}${
    choseTown != "" ? choseTown + " - " : ""
  }${choseNeighborhood != "" ? choseNeighborhood : ""}`;

  const scrollTop = document.querySelector("#unitSearchOutput").offsetTop;
  window.scrollTo({
    top: scrollTop,
    behavior: "smooth",
  });
  const inputContainer = document.querySelectorAll(
    ".inputContainer .select-btn  "
  );
  const inputs = document.querySelectorAll("input");
  for (var i = 0; i < inputs.length; i++) {
    inputs[i].value = "";
    inputContainer[i].firstElementChild.innerText = "";
  }
});
const offerBtn = document.querySelector("#openOffersSection");
offerBtn.addEventListener("click", function (event) {
  event.preventDefault();
  $(".offersSectionScreen").slideDown();
  const scrollTop = document.querySelector("#offersSectionScreen").offsetTop;
  window.scrollTo({
    top: scrollTop,
    behavior: "smooth",
  });
});
const handelCloseUnitSearchOutput = () => {
  $(".unitSearchOutput").slideUp();
};
const handelCloseOffersSectionScreen = () => {
  $(".offersSectionScreen").slideUp();
};
const handelOpenOrderBox = () => {
  $("#uintSearchOrderContainer").fadeIn();
  3;
};
const handelOpenFilterBox = () => {
  $("#uintSearchFilterContainer").fadeIn();
};
const handelOpenOffersOrderBox = () => {
  $("#offersOrderContainer").fadeIn();
};
const handelOpenOffersFilterBox = () => {
  $("#offerFilterContainer").fadeIn();
};
const handelCloseOrderBox = () => {
  $(".orderContainer").fadeOut();
};
const handelClosefilterBox = () => {
  $(".filterContainer").fadeOut();
};

const searchBtn = document.querySelectorAll(".searchUnitSearchButton");
searchBtn.forEach((btn) => {
  btn.addEventListener("click", () => {});
});
////////////////////////////////////// handel price range//////////////////////////////////////////////
const lang = localStorage.getItem("lang");
const isRight = lang === "rtl";
const rangeInput = document.querySelectorAll(".range-input input"),
  priceInput = document.querySelectorAll(".price-input input"),
  range = document.querySelector(".slider .progress");
let priceGap = 100;

priceInput.forEach((input) => {
  input.addEventListener("input", (e) => {
    let minPrice = parseInt(priceInput[0].value),
      maxPrice = parseInt(priceInput[1].value);

    if (maxPrice - minPrice >= priceGap && maxPrice <= rangeInput[1].max) {
      if (e.target.className === "input-min") {
        rangeInput[0].value = minPrice;
        if (isRight) {
          range.style.right = (minPrice / rangeInput[0].max) * 100 + "%";
        } else {
          range.style.left = (minPrice / rangeInput[0].max) * 100 + "%";
        }
      } else {
        rangeInput[1].value = maxPrice;

        if (isRight) {
          range.style.left = 100 - (maxPrice / rangeInput[1].max) * 100 + "%";
        } else {
          range.style.right = 100 - (maxPrice / rangeInput[1].max) * 100 + "%";
        }
      }
    }
  });
});

rangeInput.forEach((input) => {
  input.addEventListener("input", (e) => {
    let minVal = parseInt(rangeInput[0].value),
      maxVal = parseInt(rangeInput[1].value);
    if (maxVal - minVal < priceGap) {
      if (e.target.className === "range-min") {
        rangeInput[0].value = maxVal - priceGap;
      } else {
        rangeInput[1].value = minVal + priceGap;
      }
    } else {
      priceInput[0].value = minVal;
      priceInput[1].value = maxVal;

      if (isRight) {
        range.style.right = (minVal / rangeInput[0].max) * 100 + "%";
        range.style.left = 100 - (maxVal / rangeInput[1].max) * 100 + "%";
      } else {
        range.style.left = (minVal / rangeInput[0].max) * 100 + "%";
        range.style.right = 100 - (maxVal / rangeInput[1].max) * 100 + "%";
      }
    }
  });
});

////////////////////////////////////handel filter unitSearchOutput///////////////////////////////////
const unitSearchCardsContainer = document.querySelector(
  ".unitSearchOutput .cardsContainer "
);
const unitSearchCards = document.querySelectorAll(
  ".unitSearchOutput .cardsContainer .card"
);
const filterForm = document.querySelector("#outputFilterForm");
filterForm.addEventListener("submit", (event) => {
  event.preventDefault();
  const minPrice = document.querySelector("#UnitSearchMinPrice").value;
  const maxPrice = document.querySelector("#UnitSearchMaxPrice").value;
  const unitName = document.querySelector("#UnitSearchUnitName").value;
  const unitCode = document.querySelector("#UnitSearchUnitCode").value;
  const unitLocation = document.querySelector("#UnitSearchUnitLocation").value;
  const numberOfVehiclesInput = filterForm.querySelectorAll(
    'input[type="radio"][name="numberOfVehicles"]'
  );
  const capacityInput = filterForm.querySelectorAll(
    'input[type="radio"][name="capacity"]'
  );
  let minNumberOfVehicles;
  let maxNumberOfVehicles;

  for (const radioButton of numberOfVehiclesInput) {
    if (radioButton.checked) {
      minNumberOfVehicles = radioButton.getAttribute("minNumberOfVehicles");
      maxNumberOfVehicles = radioButton.getAttribute("maxNumberOfVehicles");
      break;
    }
  }

  let minCapacity;
  let maxCapacity;
  for (const radioButton of capacityInput) {
    if (radioButton.checked) {
      minCapacity = radioButton.getAttribute("minCapacity");
      maxCapacity = radioButton.getAttribute("maxCapacity");
      break;
    }
  }

  const filteredCards = Array.from(unitSearchCards).filter((card) => {
    return (
      (+card.getAttribute("minCapacity") >= minCapacity ||
        minCapacity === "") &&
      (+card.getAttribute("maxCapacity") <= maxCapacity ||
        maxCapacity === "") &&
      +card.getAttribute("price") >= minPrice &&
      +card.getAttribute("price") <= maxPrice &&
      (+card.getAttribute("minNumberOfVehicles") >= minNumberOfVehicles ||
        minNumberOfVehicles === "") &&
      (+card.getAttribute("maxNumberOfVehicles") <= maxNumberOfVehicles ||
        maxNumberOfVehicles === "") &&
      (card.getAttribute("unitName").includes(unitName) || unitName === "") &&
      (card.getAttribute("unitCode").includes(unitCode) || unitCode === "") &&
      (card.getAttribute("unitLocation").includes(unitLocation) ||
        unitLocation === "")
    );
  });
  unitSearchCardsContainer.innerHTML = "";

  for (let i = 0; i < filteredCards.length; i++) {
    const cardElement = filteredCards[i];
    unitSearchCardsContainer.appendChild(cardElement);
  }

  handelClosefilterBox();
});
////////////////////////////////////handel filter offersSectionScreen ///////////////////////////////////

const offersSectioncardsContainer = document.querySelector(
  ".offersSectionScreen .cardsContainer "
);
const offerCards = document.querySelectorAll(
  ".offersSectionScreen .cardsContainer .card"
);
const offerFilterForm = document.getElementById("offerFilterForm");
offerFilterForm.addEventListener("submit", (event) => {
  event.preventDefault();
  const unitName = document.getElementById("offersSectionUnitName").value;
  const unitCode = document.getElementById("offersSectionUnitCode").value;
  const unitLocation = document.getElementById(
    "offersSectionUnitLocation"
  ).value;
  const numberOfVehiclesInput = offerFilterForm.querySelectorAll(
    'input[type="radio"][name="numberOfVehicles"]'
  );
  const capacityInput = offerFilterForm.querySelectorAll(
    'input[type="radio"][name="capacity"]'
  );
  let minNumberOfVehicles;
  let maxNumberOfVehicles;

  for (const radioButton of numberOfVehiclesInput) {
    if (radioButton.checked) {
      minNumberOfVehicles = radioButton.getAttribute("minNumberOfVehicles");
      maxNumberOfVehicles = radioButton.getAttribute("maxNumberOfVehicles");
      break;
    }
  }

  let minCapacity;
  let maxCapacity;
  for (const radioButton of capacityInput) {
    if (radioButton.checked) {
      minCapacity = radioButton.getAttribute("minCapacity");
      maxCapacity = radioButton.getAttribute("maxCapacity");
      break;
    }
  }

  const filteredCards = Array.from(offerCards).filter((card) => {
    return (
      (+card.getAttribute("minCapacity") >= minCapacity ||
        minCapacity === "") &&
      (+card.getAttribute("maxCapacity") <= maxCapacity ||
        maxCapacity === "") &&
      (+card.getAttribute("minNumberOfVehicles") >= minNumberOfVehicles ||
        minNumberOfVehicles === "") &&
      (+card.getAttribute("maxNumberOfVehicles") <= maxNumberOfVehicles ||
        maxNumberOfVehicles === "") &&
      (card.getAttribute("unitName").includes(unitName) || unitName === "") &&
      (card.getAttribute("unitCode").includes(unitCode) || unitCode === "") &&
      (card.getAttribute("unitLocation").includes(unitLocation) ||
        unitLocation === "")
    );
  });

  offersSectioncardsContainer.innerHTML = "";

  for (let i = 0; i < filteredCards.length; i++) {
    const cardElement = filteredCards[i];

    offersSectioncardsContainer.appendChild(cardElement);
  }

  handelClosefilterBox();
});
///////////////////////////////////////Handel Send Cards To Map///////////////////////////////////////

const searchOutputMapButton = document.getElementById("searchOutputMapButton");
const offersSectionMapButton = document.getElementById(
  "offersSectionMapButton"
);
const cardSelector = ".unitSearchOutput .cardsContainer .card";
const cardSelector2 = ".offersSectionScreen .cardsContainer .card";

const handelSendCardsToMap = (searchOutputMapButton, cardSelector) => {
  searchOutputMapButton.addEventListener("click", () => {
    const currentunitSearchCards = Array.from(
      document.querySelectorAll(cardSelector)
    );

    let mapCards = [];
    let i = 110;
    for (const card of currentunitSearchCards) {
      mapCards.push({
        id: i,
        price: card.getAttribute("price"),
        name: card.getAttribute("unitName"),
        lon: card.getAttribute("lon"),
        lat: card.getAttribute("lat"),
      });
      i++;
    }
    localStorage.setItem("cardsShownInMap", JSON.stringify(mapCards));
    window.location.href = "../showOnMap.html";
  });
};

handelSendCardsToMap(searchOutputMapButton, cardSelector);
handelSendCardsToMap(offersSectionMapButton, cardSelector2);

///////////////////////////////// handel pagenation ////////////////////////////////////

const sectionData = [
  { name: "ahmed", age: 23, id: 1 },
  { name: "ahmed", age: 23, id: 1 },
  { name: "ahmed", age: 23, id: 1 },
  { name: "ahmed", age: 23, id: 2 },
  { name: "ahmed", age: 23, id: 2 },
  { name: "ahmed", age: 23, id: 2 },
  { name: "ahmed", age: 23, id: 3 },
  { name: "ahmed", age: 23, id: 3 },
  { name: "ahmed", age: 23, id: 3 },
  { name: "ahmed", age: 23, id: 3 },
];

let unitSearchSectionCurrentDisplayedPage = 0;
let offersSectionCurrentDisplayedPage = 0;
let displayedItems = [];
function createPagination(selector, SectionCurrentDisplayedPage, data) {
  displayedItems = [];
  let counter = 0;
  let displayedPage = [];
  // repleac data to cards data
  for (let i = 0; i < data.length; i++) {
    if (counter === 8) {
      counter = 0;
      displayedItems.push(displayedPage);
      displayedPage = [];
    }
    displayedPage.push(data[i]);
    counter++;
  }

  let blockOfElements = `${displayedItems[SectionCurrentDisplayedPage].map(
    (card) => `<div
            class="card"
            price="100"
            minCapacity="0"
            maxCapacity="0"
            minNumberOfVehicles="5"
            maxNumberOfVehicles="10"
            unitLocation="geda"
            unitCode="RB65"
            unitName="amlak"
            lat="30.3"
            lon="31.53"
          >
            <div class="favoriteIcon">
              <i class="fa-regular fa-heart"></i>
            </div>
            <img src="./images/1.jpg" alt="" />
            <div class="info">
              <div class="rateAndOffer">
                <span>
                  <span class="icons">
                    <i class="fa-solid fa-star"></i>
                    <i class="fa-solid fa-star"></i>
                    <i class="fa-solid fa-star"></i>
                    <i class="fa-solid fa-star"></i>
                  </span>
                  4.5
                </span>
                <span>خصم 50%</span>
              </div>
              <div class="specialUnitsStatistics">
                <span>32 <i class="fa-solid fa-house"></i></span>
                <span>53 <i class="fa-solid fa-couch"></i></span>
                <span>83 <i class="fa-solid fa-couch"></i></span>
              </div>
              <p>Bt120</p>
              <span class="price">سعر الوحدة ${card.age}$</span>
            </div>
          </div>`
  ).join(" ")}`;
  selector.innerHTML = blockOfElements;
}

function handleOffersNextPage() {
  const unitSearchOutputSection = document.querySelector(
    ".offersSectionScreen"
  );
  const selector = unitSearchOutputSection.querySelector(".cardsContainer");
  const pagenationContainer = unitSearchOutputSection.querySelector(
    ".pagenation .pageNumber"
  );
  // createPagination(selector, unitSearchSectionCurrentDisplayedPage ,sectionData);
  if (offersSectionCurrentDisplayedPage < 10 - 1) {
    offersSectionCurrentDisplayedPage++;
    pagenationContainer.innerHTML = offersSectionCurrentDisplayedPage + 1;
  }
}
function handleOffersPreviousPage() {
  const unitSearchOutputSection = document.querySelector(
    ".offersSectionScreen"
  );
  const selector = unitSearchOutputSection.querySelector(".cardsContainer");
  const pagenationContainer = unitSearchOutputSection.querySelector(
    ".pagenation .pageNumber"
  );
  // createPagination(selector, unitSearchSectionCurrentDisplayedPage , sectionData);
  if (offersSectionCurrentDisplayedPage > 0) {
    offersSectionCurrentDisplayedPage--;
    pagenationContainer.innerHTML = offersSectionCurrentDisplayedPage + 1;
  }
}

function handleUnitSearchNextPage() {
  const unitSearchOutputSection = document.querySelector(".unitSearchOutput");
  const selector = unitSearchOutputSection.querySelector(".cardsContainer");
  const pagenationContainer = unitSearchOutputSection.querySelector(
    ".pagenation .pageNumber"
  );
  // createPagination(selector, unitSearchSectionCurrentDisplayedPage ,sectionData);

  if (unitSearchSectionCurrentDisplayedPage < 10 - 1) {
    unitSearchSectionCurrentDisplayedPage++;
    pagenationContainer.innerHTML = unitSearchSectionCurrentDisplayedPage + 1;
  }
}
function handleUnitSearchPreviousPage() {
  const unitSearchOutputSection = document.querySelector(".unitSearchOutput");
  const selector = unitSearchOutputSection.querySelector(".cardsContainer");
  const pagenationContainer = unitSearchOutputSection.querySelector(
    ".pagenation .pageNumber"
  );
  // createPagination(selector, unitSearchSectionCurrentDisplayedPage ,sectionData);
  if (unitSearchSectionCurrentDisplayedPage > 0) {
    unitSearchSectionCurrentDisplayedPage--;
    pagenationContainer.innerHTML = unitSearchSectionCurrentDisplayedPage + 1;
  }
}
