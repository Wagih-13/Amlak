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
  const confirmDateInput = document.getElementById("confirmDateInput");
  const displayInputsValue = document.getElementById("displayInputsValue");
  const arrivedDate = confirmDateInput.getAttribute("arrivedDate");
  const leavedDate = confirmDateInput.getAttribute("leavedDate");
  displayInputsValue.innerHTML = `${homeType != "" ? homeType + " - " : ""}${
    choseTown != "" ? choseTown + " - " : ""
  }${choseNeighborhood != "" ? choseNeighborhood + " - " : ""}${
    arrivedDate != "" ? arrivedDate + " - " : ""
  }${leavedDate != "" ? leavedDate : ""}`;

  const scrollTop = document.querySelector("#unitSearchOutput").offsetTop;
  window.scrollTo({
    top: scrollTop,
    behavior: "smooth",
  });
  const inputContainer = document.querySelectorAll(
    ".inputContainer .select-btn  "
  );
  const inputs = document.querySelectorAll("input");
  confirmDateInput.setAttribute("arrivedDate", "");
  confirmDateInput.setAttribute("leavedDate", "");
  confirmDateInput.setAttribute("placeholder", "");
  countOfClick = 0;
  document.querySelectorAll(".days>div").forEach((divDay) => {
    divDay.classList.remove("arrived-selected");
    divDay.classList.remove("leaved-selected");
    divDay.classList.remove("day-selected");
  });
  document.querySelector(".buttonsContainer").classList.remove("show");
  setArrivedDate = "";
  setLeavedDate = "";

  for (var i = 0; i < inputs.length; i++) {
    if (inputContainer[i]) {
      inputs[i].value = "";
      inputContainer[i].firstElementChild.innerText = "";
    }
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
let unitSearchCardsContainer = document.querySelector(
  ".unitSearchOutput .cardsContainer "
);
let unitSearchCards = document.querySelectorAll(
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
  console.log(unitSearchCards);
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
  { name: "ahmed", price: 100, id: 1 },
  { name: "ahmed", price: 200, id: 2 },
  { name: "ahmed", price: 300, id: 3 },
  { name: "ahmed", price: 400, id: 4 },
  { name: "ahmed", price: 500, id: 5 },
  { name: "ahmed", price: 600, id: 6 },
  { name: "ahmed", price: 700, id: 7 },
  { name: "ahmed", price: 800, id: 8 },
  { name: "ahmed", price: 900, id: 9 },
  { name: "ahmed", price: 1000, id: 10 },
  { name: "ahmed", price: 1100, id: 11 },
  { name: "ahmed", price: 1200, id: 12 },
];

let unitSearchSectionCurrentDisplayedPage = 0;
let displayedItems = [];
const unitSearchOutputSection = document.querySelector(".unitSearchOutput");
const selector = unitSearchOutputSection.querySelector(".cardsContainer");
const pagenationContainer = unitSearchOutputSection.querySelector(
  ".pagenation .pageNumber"
);

function createPagination() {
  displayedItems = [];
  let counter = 0;
  let displayedPage = [];
  for (let i = 0; i <= sectionData.length; i++) {
    if (counter == 8 || i == sectionData.length) {
      counter = 0;
      displayedItems.push(displayedPage);
      displayedPage = [];
    }
    displayedPage.push(sectionData[i]);
    counter++;
  }
}

let rating = 2.5;

function creatSection() {
  let blockOfElements = `${displayedItems[unitSearchSectionCurrentDisplayedPage]
    .map(
      (card) => `<div
            class="card"
            price="${card.price}"
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
                    ${Array(5)
                      .fill("")
                      .map((_, i) =>
                        i < rating
                          ? '<i class="fa-solid fa-star"></i>'
                          : i < Math.ceil(Number(rating))
                          ? '<i class="fa-regular fa-star-half-stroke"></i>'
                          : '<i class="fa-regular fa-star"></i>'
                      )
                      .join("")}
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
              <span class="price">سعر الوحدة ${card.price}$</span>
            </div>
          </div>`
    )
    .join(" ")}`;

  selector.innerHTML = blockOfElements;

  unitSearchCardsContainer = document.querySelector(
    ".unitSearchOutput .cardsContainer "
  );
  unitSearchCards = document.querySelectorAll(
    ".unitSearchOutput .cardsContainer .card"
  );
}

createPagination();
creatSection();

function handleUnitSearchNextPage() {
  console.log(displayedItems.length);
  if (unitSearchSectionCurrentDisplayedPage < displayedItems.length - 1) {
    unitSearchSectionCurrentDisplayedPage++;
    pagenationContainer.innerHTML = unitSearchSectionCurrentDisplayedPage + 1;
    createPagination();
    creatSection();
  }
}
function handleUnitSearchPreviousPage() {
  if (unitSearchSectionCurrentDisplayedPage > 0) {
    unitSearchSectionCurrentDisplayedPage--;
    pagenationContainer.innerHTML = unitSearchSectionCurrentDisplayedPage + 1;
    createPagination();
    creatSection();
  }
}

let offersSectionCurrentDisplayedPage = 0;

// function handleOffersNextPage() {
//   const unitSearchOutputSection = document.querySelector(
//     ".offersSectionScreen"
//   );
//   const selector = unitSearchOutputSection.querySelector(".cardsContainer");
//   const pagenationContainer = unitSearchOutputSection.querySelector(
//     ".pagenation .pageNumber"
//   );
//   // createPagination(selector, unitSearchSectionCurrentDisplayedPage ,sectionData);
//   if (offersSectionCurrentDisplayedPage < 10 - 1) {
//     offersSectionCurrentDisplayedPage++;
//     pagenationContainer.innerHTML = offersSectionCurrentDisplayedPage + 1;
//   }
// }
// function handleOffersPreviousPage() {
//   const unitSearchOutputSection = document.querySelector(
//     ".offersSectionScreen"
//   );
//   const selector = unitSearchOutputSection.querySelector(".cardsContainer");
//   const pagenationContainer = unitSearchOutputSection.querySelector(
//     ".pagenation .pageNumber"
//   );
//   // createPagination(selector, unitSearchSectionCurrentDisplayedPage , sectionData);
//   if (offersSectionCurrentDisplayedPage > 0) {
//     offersSectionCurrentDisplayedPage--;
//     pagenationContainer.innerHTML = offersSectionCurrentDisplayedPage + 1;
//   }
// }
////////////////////////////////////handel calender ///////////////////////////////////

function showContainer() {
  document.querySelector(".buttonsContainer").classList.add("show");
}

function removeVal(event) {
  document.querySelector(".buttonsContainer").classList.remove("show");
  if (event) {
    const calenderInput = event.target.closest(".calenderInput");
    calenderInput
      .querySelector("#confirmDateInput")
      .setAttribute("leavedDate", ``);
    calenderInput
      .querySelector("#confirmDateInput")
      .setAttribute("arrivedDate", ``);

    calenderInput
      .querySelector("#confirmDateInput")
      .setAttribute("placeholder", "");
  }
}

function fillConfirmDate() {
  const dateSetLeavedDate = new Date(setLeavedDate);
  const formattedLeavedDateDate = dateSetLeavedDate.toLocaleDateString(
    "fr-FR",
    {
      day: "2-digit",
      month: "2-digit",
      year: "numeric",
    }
  );
  const dateSetArrivedDate = new Date(setArrivedDate);
  const formattedArrivedDate = dateSetArrivedDate.toLocaleDateString("fr-FR", {
    day: "2-digit",
    month: "2-digit",
    year: "numeric",
  });

  const calenderInput = document.querySelector(".calenderInput");
  calenderInput
    .querySelector("#confirmDateInput")
    .setAttribute("leavedDate", `  ${setLeavedDate}`);
  calenderInput
    .querySelector("#confirmDateInput")
    .setAttribute("arrivedDate", `${setArrivedDate}`);

  calenderInput
    .querySelector("#confirmDateInput")
    .setAttribute(
      "placeholder",
      `${formattedArrivedDate} - ${formattedLeavedDateDate}`
    );
}
