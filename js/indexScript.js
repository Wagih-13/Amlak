//////////////////////////////////////// create backGroundHome slider /////////////////////////////////////////////

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
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});
swiper.running;
// swiper.changeDirection('vertical');

//////////////////////////////////////// create spceialUnits slider /////////////////////////////////////////////

const specialUnitsSlider = document.querySelector(".specialUnitsSlider");

function createSlide(imageUrl, rating, discountText, description, price) {
  return `
    <div class="slide" onclick="alert('done')">
      <div class="card">
        <div class="favoriteIcon">
          <i class="fa-regular fa-heart"></i>
        </div>
        <img src="${imageUrl}" alt="" />
        <div class="info">
          <div class="rateAndOffer">
            <span>
              <span class="icons">
                <i class="fa-solid fa-star"></i>
                <i class="fa-solid fa-star"></i>
                <i class="fa-solid fa-star"></i>
                <i class="fa-solid fa-star"></i>
                ${"".padStart(
                  Math.floor(rating),
                  '<i class="fa-solid fa-star"></i>'
                )}
                ${rating % 1 !== 0 ? '<i class="fa-regular fa-star"></i>' : ""}
              </span>
              ${rating}
            </span>
            <span>${discountText}</span>
          </div>
          <div class="specialUnitsStatistics">
            <span>32 <i class="fa-solid fa-house"></i></span>
            <span>53 <i class="fa-solid fa-couch"></i></span>
          </div>
          <p>${description}</p>
          <span class="price">سعر الوحدة ${price}$</span>
        </div>
      </div>
    </div>
  `;
}

const slides = [];
for (let i = 0; i < 15; i++) {
  slides.push(
    createSlide(
      "./images/2.jpg",
      4.5,
      "خصم 50%",
      "استمتع بالراحة والفخامة على شواطئ درة العروس - حجوزات منازل عطلاتك المثالية",
      "100$"
    )
  );
}

const slidesContainer = `
  <div class="slideContainer ">
    ${slides.join("")}
  </div>
`;

const cloneSpecialUnitsData = () => {
  const cloneOfData = [];
  for (let i = 0; i < 2; i++) {
    cloneOfData.push(slidesContainer);
  }
  const container = cloneOfData.join("");
  return container;
};

specialUnitsSlider.innerHTML = cloneSpecialUnitsData();

const slideContainers = document.querySelectorAll(".slideContainer");
const numberOfElements = document.querySelectorAll(".slide").length;

specialUnitsSlider.style.width = `${numberOfElements * 400}px`;

const isLeftToRight = localStorage.getItem("lang") === "ltr";
slideContainers.forEach((slider) =>
  slider.classList.add(isLeftToRight ? "leftDir" : "rightDir")
);

/////////////////////////////////////// create offer Slider //////////////////////////////////////////////

const offerSlider = document.querySelectorAll(".offerSlider .slider");

let verticalSlidesContainer = [];
const createVerticalSlider = (imageUrl, i) => {
  return `
  <div class="slide" onclick="alert('done')">
    <div class="imageBox">
    <span class="offerLable">50%</span>
    <img src="${imageUrl}" alt="" />
    </div>
  </div>
  `;
};

for (let i = 0; i < 10; i++) {
  verticalSlidesContainer.push(createVerticalSlider("./images/3.jpg", i));
}

const offerData = `
  <div class="slideContainer ">
          ${verticalSlidesContainer.join("")}
        </div>
`;

const cloneOfferData = () => {
  const cloneOfData = [];
  for (let i = 0; i < 2; i++) {
    cloneOfData.push(offerData);
  }
  const container = cloneOfData.join("");
  return container;
};

const offerSliders = document.querySelectorAll(".offerSlider .slider");

offerSliders.forEach((offer) => {
  offer.innerHTML = cloneOfferData();
});

function setSliderHeight(slider) {
  const slideContainer = slider.querySelector(".slideContainer");
  const numberOfSlides = slideContainer.querySelectorAll(".slide").length;
  const slideHeight = 290;
  slider.style.height = `${numberOfSlides * slideHeight}px`;
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

////////////////////////////////////// handel search unit //////////////////////////////////////////////

const searchInputsContainer = document.querySelectorAll(
  ".inputContainer:not(:nth-child(4)) "
);
const searchDateInput = document.querySelector(".inputContainer:nth-child(4) ");

searchInputsContainer.forEach((inputBox) => {
  inputBox.addEventListener("click", () => {
    const dropDownList = inputBox.querySelector(".dropDownList");
    $(dropDownList).slideToggle();
  });
});

searchDateInput.addEventListener("click", (event) => {
  const dropDownList = searchDateInput.querySelector(".dateDropDown");
  const myDiv = document.querySelector(
    ".inputContainer:nth-child(4) .dateDropDown"
  );
  const clickedElement = event.target;
  if (clickedElement === myDiv || myDiv.contains(clickedElement)) {
    event.stopPropagation();
  } else {
    $(dropDownList).slideToggle();
  }
});

searchInputsContainer.forEach((inputBox) => {
  const option = inputBox.querySelectorAll(".dropDownList li");
  const input = inputBox.querySelector("input");
  option.forEach((opt) => {
    opt.addEventListener("click", () => {
      const valueOfOtion = opt.textContent.trim();
      input.value = valueOfOtion;
    });
  });
});

// $(function () {
//   $('input[name="daterange"]').daterangepicker(
//     {
//       opens: "left",
//       locale: {
//         format: "YYYY-MM-DD",
//       },
//     },
//     function (start, end, label) {
//       console.log(
//         "A new date selection was made: " +
//           start.format("YYYY-MM-DD") +
//           " to " +
//           end.format("YYYY-MM-DD")
//       );
//     }
//   );
// });

////////////////////////////////////// handel filter unit //////////////////////////////////////////////

const searchUnitSelectBtn = document.querySelectorAll(
  ".imageSlider .buttonLay .searchUnit form .inputContainer .select-btn"
);
const searchUnitContent = document.querySelectorAll(
  ".imageSlider .buttonLay .searchUnit form .inputContainer .content"
);
const searchUnitWrapper = document.querySelectorAll(
  ".imageSlider .buttonLay .searchUnit form .inputContainer .wrapper"
);
const searchUnitSearchInp = document.querySelectorAll(
  ".imageSlider .buttonLay .searchUnit form .inputContainer .wrapper input"
);
const searchUnitOptions = document.querySelectorAll(
  ".imageSlider .buttonLay .searchUnit form .inputContainer .wrapper .options"
);
const searchUnitValueInputs = document.querySelectorAll(
  ".imageSlider .buttonLay .searchUnit form .inputContainer .valueInput"
);

const countr1 = [
  "افغانستان",
  "الجزائر",
  "الارجنتين",
  "استراليا",
  "بنغلاديش",
  "بلجيكا",
  "بوتان",
  "البرازيل",
  "كندا",
  "الصين",
  "عمان",
  "الامارات العربية المتحدة",
  "لبنان",
  "فلسطين",
  "الاردن",
  "مصر",
  "السودان",
  "تونس",
  "الجزائر",
  "المغرب",
  "موريتانيا",
  "الصومال",
  "جيبوتي",
  "جزر القمر",
  "السعودية",
  "العراق",
  "سوريا",
  "كردستان",
];
const carNamesArabic = [
  "أودي",
  "ألفا روميو",
  "أستين مارتن",
  "بي إم دبليو",
  "بيجو",
  "بنتلي",
  "بوغاتي",
  "بويك",
  "بورشه",
  "بيك أب",
  "شفروليه",
  "سيتروين",
  "كاديلاك",
  "شيري",
  "شيفروليه",
];
const aircraftNamesAr = [
  "إيرباص إيه 320",
  "إيرباص إيه 330",
  "إيرباص إيه 350",
  "إيرباص إيه 380",
  "بوينج 737",
  "بوينج 747",
  "بوينج 777",
  "بوينج 787",
  "إمبراير 190",
  "إمبراير 19",
];

const countries = [carNamesArabic, aircraftNamesAr, countr1];

function searchUnitAddCase(selectedCountry) {
  searchUnitOptions.forEach((option, index) => {
    option.innerHTML = "";
    countries[index].forEach((country) => {
      let isSelected = country == selectedCountry ? "selected" : "";
      let li = `<li onclick="searchUnitUpdateName(this , ${index} )" class="${isSelected}">${country}</li>`;
      option.insertAdjacentHTML("beforeend", li);
    });
  });
}
searchUnitAddCase();

function searchUnitUpdateName(selectedLi, index) {
  searchUnitSearchInp[index].value = "";
  searchUnitAddCase(selectedLi.innerText, index);
  searchUnitWrapper[index].classList.remove("active");
  searchUnitSelectBtn[index].firstElementChild.innerText = selectedLi.innerText;
  searchUnitValueInputs[index].value = selectedLi.innerText;
  $(searchUnitContent[index]).slideUp();
}

searchUnitSearchInp.forEach((input, index) => {
  input.addEventListener("keyup", () => {
    let arr = [];
    let searchWord = searchUnitSearchInp[index].value.toLowerCase();
    arr = countries[index]
      .filter((data) => {
        return data.toLowerCase().startsWith(searchWord);
      })
      .map((data) => {
        let isSelected =
          data == searchUnitSelectBtn[index].firstElementChild.innerText
            ? "selected"
            : "";
        return `<li onclick="searchUnitUpdateName(this , ${index})" class="${isSelected}">${data}</li>`;
      })
      .join("");
    searchUnitOptions[index].innerHTML = arr
      ? arr
      : `<p style="margin-top: 10px;">Oops! Country not found</p>`;
  });
});

searchUnitSelectBtn.forEach((btn, index) => {
  btn.addEventListener("click", () => {
    $(searchUnitContent[index]).slideToggle();
    searchUnitSelectBtn.forEach((select, idx) => {
      if (select !== btn) {
        $(searchUnitContent[idx]).slideUp();
      }
    });
  });
});

////////////////////////////////////// handel  //////////////////////////////////////////////
const filterUnitForm = document.querySelector(".filterUnitForm");
filterUnitForm.addEventListener("submit", function (event) {
  event.preventDefault();
  $(".unitSearchOutput").slideDown();
});

const handelCloseUnitSearchOutput = () => {
  $(".unitSearchOutput").slideUp();
};
const handelOpenOrderBox = () => {
  $(".orderContainer").fadeIn();
};
const handelOpenFilterBox = () => {
  $(".filterContainer").fadeIn();
};
const handelCloseOrderBox = () => {
  $(".orderContainer").fadeOut();
};
const handelClosefilterBox = () => {
  $(".filterContainer").fadeOut();
};

////////////////////////////////////// handel price range//////////////////////////////////////////////
const lang = localStorage.getItem("lang");
const isRight = lang === "rtl";
const rangeInput = document.querySelectorAll(".range-input input"),
  priceInput = document.querySelectorAll(".price-input input"),
  range = document.querySelector(".slider .progress");
let priceGap = 1000;

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

const FilterFormWrapper = document.querySelectorAll(
  `.unitSearchOutput .filterBoxContainer .filterBox .outputFilterForm .advancedSearchSection .inputContainer .wrapper`
);
const FilterFormSelectBtn = document.querySelectorAll(
  `.unitSearchOutput .filterBoxContainer .filterBox .outputFilterForm .advancedSearchSection .inputContainer .wrapper  .select-btn`
);
const FilterFormContent = document.querySelectorAll(
  `.unitSearchOutput .filterBoxContainer .filterBox .outputFilterForm .advancedSearchSection .inputContainer .wrapper .content`
);

const FilterFormSearchInp = document.querySelectorAll(
  `.unitSearchOutput .filterBoxContainer .filterBox .outputFilterForm .advancedSearchSection .inputContainer .wrapper input`
);
const FilterFormOptions = document.querySelectorAll(
  `.unitSearchOutput .filterBoxContainer .filterBox .outputFilterForm .advancedSearchSection .inputContainer .content .options`
);
const FilterFormValueInputs = document.querySelectorAll(
  ".unitSearchOutput .filterBoxContainer .filterBox .outputFilterForm .advancedSearchSection .inputContainer  .valueInput"
);

const countries2 = [carNamesArabic, aircraftNamesAr, countr1];

function FilterFormAddCase(selectedCountry) {
  FilterFormOptions.forEach((option, index) => {
    option.innerHTML = "";
    countries2[index].forEach((country) => {
      let isSelected = country == selectedCountry ? "selected" : "";
      let li = `<li onclick="FilterFormUpdateName(this , ${index} )" class="${isSelected}" >${country}</li>`;
      option.insertAdjacentHTML("beforeend", li);
    });
    console.log(option);
  });
}

FilterFormAddCase();

function FilterFormUpdateName(selectedLi, index) {
  FilterFormSearchInp[index].value = "";
  FilterFormAddCase(selectedLi.innerText, index);
  FilterFormWrapper[index].classList.remove("active");
  FilterFormSelectBtn[index].firstElementChild.innerText = selectedLi.innerText;
  FilterFormValueInputs[index].value = selectedLi.innerText;
  $(FilterFormContent[index]).slideUp();
}

FilterFormSearchInp.forEach((input, index) => {
  input.addEventListener("keyup", () => {
    let arr = [];
    let searchWord = FilterFormSearchInp[index].value.toLowerCase();
    arr = countries2[index]
      .filter((data) => {
        return data.toLowerCase().startsWith(searchWord);
      })
      .map((data) => {
        let isSelected =
          data == FilterFormSelectBtn[index].firstElementChild.innerText
            ? "selected"
            : "";
        return `<li onclick="FilterFormUpdateName(this , ${index})" class="${isSelected}">${data}</li>`;
      })
      .join("");
    FilterFormOptions[index].innerHTML = arr
      ? arr
      : `<p style="margin-top: 10px;">Oops! Country not found</p>`;
  });
});

FilterFormSelectBtn.forEach((btn, index) => {
  btn.addEventListener("click", () => {
    $(FilterFormContent[index]).slideToggle();
    console.log(FilterFormContent[index], index);
    FilterFormSelectBtn.forEach((select, idx) => {
      if (select !== btn) {
        $(FilterFormContent[idx]).slideUp();
      }
    });
  });
});
