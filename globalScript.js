const body = document.body;

//////////////////////////// handel add nav bar //////////////////////////////////

const navBar = `
  <nav class="navBar">
      <div class="container">
        <div class="logo" >
          <img src="./images/logo.png" alt="Amlak Elshatea logo" width="150" />
        </div>
        <div class="links">
          <ul>
           ${
             window.location.pathname === "/"
               ? '<li><a href="#specialUnits"> وحدات مميزة </a></li>'
               : '<li><a href="/"> الرئيسية </a></li>'
           }
            
            <li><a href="#offers"> العروض </a></li>
            <li><a href="#whoAreWe"> من نحن </a></li>
            <li><a href="/unitDetails.html"> unit details </a></li>
          </ul>
        </div>
        <div class="buttons">
          <button class="mainButton gold-color">تسجيل الدخول</button>
          <button class="mainButton transparent-color" onclick="handelOpenAddUnitScreen()">اضف عقارك</button>
        </div>
        <div class="themeAndLang">
          <button class="lang" id="lang" onclick="switchLanguage()">AR</button>
          <div>
            <button class="themeButton" id="themeButton-1"></button>
            <label for="themeButton-1" class="themeButton-label">
              <i class="fas fa-moon"></i>
              <i class="fas fa-sun"></i>
              <span class="ball"></span>
            </label>
          </div>
        </div>
      </div>
    </nav>

    <div class="sideNavIcon">
      <div id="nav-icon1" className="barsIcon" onclick="handelOpenLinksList()">
        <span></span>
        <span></span>
        <span></span>
      </div>
    </div>
    <aside class="NavBarMinScreen">
      <div class="logo">
        <img src="./images/logo.png" alt="Amlak Elshatea logo" width="150" />
      </div>
      <div class="links">
        <ul>
           ${
             window.location.pathname === "/"
               ? ' <li onclick="handelOpenLinksList()"><a href="#specialUnits"> وحدات مميزة </a></li>'
               : ' <li onclick="handelOpenLinksList()"><a href="/"> الرئيسية </a></li>'
           }
            <li onclick="handelOpenLinksList()"><a href="#offers"> العروض </a></li>
            <li onclick="handelOpenLinksList()"><a href="#whoAreWe"> من نحن </a></li>
            <li > <a href="/unitDetails.html"> unit details </a></li>
        </ul>
      </div>
      <div class="buttons">
        <button class="mainButton gold-color">تسجيل الدخول</button>
        <button class="mainButton transparent-color" onclick="handelOpenAddUnitScreen()">اضف عقارك</button>
      </div>
      <div class="themeAndLang">
        <button class="lang" id="lang2" onclick="switchLanguage()">AR</button>
        <div>
          <button class="themeButton" id="themeButton-2"></button>
          <label for="themeButton-2" class="themeButton-label">
            <i class="fas fa-moon"></i>
            <i class="fas fa-sun"></i>
            <span class="ball"></span>
          </label>
        </div>
      </div>
    </aside>
`;

const footer = `
   <footer>
   <div class="darkLayOut"></div>
      <div class="footerBackground">
        <img src="./images/right.png" class="png-1" alt="footerBackground" />
        <img src="./images/left.png" class="png-2" alt="footerBackground" />
      </div>
      <div class="container">
        <div class="supscribeBox" id="contactUs">
          <p>إشتراك فى خدمة رسائل البريد الالكترونى</p>
          <form class="inputBox">
            <input type="text" name="" id="" placeholder="ادخل الايميل" />
            <button class="supscribeButton">اشترك</button>
          </form>
        </div>
        <div class="footerContainer">
          <div class="footerLogo">
            <img src="./images/logo.png" width="150px" alt="" />
            <p>اتصل بنا اليوم للحصول على تقييم إيجار مجاني لمنزلك</p>
            <ul class="socialMediaIcons">
              <li>
                <a href=""><i class="fa-brands fa-square-instagram"></i></a>
              </li>
              <li>
                <a href=""><i class="fa-brands fa-facebook"></i></a>
              </li>
              <li>
                <a href=""><i class="fa-brands fa-x-twitter"></i></a>
              </li>
              <li>
                <a href=""><i class="fa-brands fa-youtube"></i></a>
              </li>
            </ul>
          </div>
          <div class="footerLinks">
            <ul>
              <li>الشركة</li>
              <li><a href="">الاسئلة المتكرره</a></li>
              <li><a href="">الشروط و الأحكام</a></li>
              <li><a href="">العروض</a></li>
            </ul>
            <ul>
              <li>اتصل بنا</li>
              <li><a href="">من نحن</a></li>
              <li><a href="">الرئيسية</a></li>
              <li><a href="">إنضم لنا</a></li>
            </ul>
          </div>
          <div class="footerSocialLinks">
            <div class="whatsAppBox">
              <div class="box">
                <div class="icon">
                  <i class="fa-brands fa-whatsapp"></i>
                </div>
                <div class="socialInfo copy-button">
                  <img
                    width="20px"
                    src="./images/saudia flag.png"
                    alt="saudi flag"
                  /><span >01938373990</span>
                </div>
              </div>
              <div class="box">
                <div class="icon">
                  <i class="fa-brands fa-whatsapp"></i>
                </div>
                <div class="socialInfo copy-button">
                  <img
                    width="20px"
                    src="./images/saudia flag.png"
                    alt="saudi flag"
                  /><span >01938373990</span>
                </div>
              </div>
            </div>
            <div class="emailBox">
              <div class="box">
                <div class="icon"><i class="fa-solid fa-envelope"></i></div>
                <div class="socialInfo copy-button">
                  <span >email@example.com</span>
                </div>
              </div>
              <div class="box">
                <div class="icon"><i class="fa-solid fa-envelope"></i></div>
                <div class="socialInfo copy-button">
                  <span >email@example.com</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="copyright">جميع الحقوق محفوظة لشركة أملاك الشاطئ © 2024</div>
    </footer>
`;

body.insertAdjacentHTML("afterbegin", navBar);
body.insertAdjacentHTML("beforeend", footer);

//////////////////////////// handel theme ///////////////////////////////////////

const themeToggleButton = document.querySelectorAll(".themeButton");
const balls = document.querySelectorAll(".ball");
const themeToggle = () => {
  const currentTheme = localStorage.getItem("theme");
  const newTheme = currentTheme === "light" ? "dark" : "light";
  localStorage.setItem("theme", newTheme);
  body.classList.toggle("light-mode");
  balls.forEach((ball) => ball.classList.toggle("openLight"));
};

if (localStorage.getItem("theme") === "light") {
  body.classList.add("light-mode");
  balls.forEach((ball) => ball.classList.add("openLight"));
}

themeToggleButton.forEach((checkbox) =>
  checkbox.addEventListener("click", themeToggle)
);

//////////////////////////// handel language ////////////////////////////////////

const localStorageKey = "lang";
const toggleLang = document.querySelector("#lang");
const toggleLangMinScreen = document.querySelector("#lang2");
const ArLang = document.querySelectorAll(".ArLang");
const EnLang = document.querySelectorAll(".EnLang");
const getLang = () => {
  const storedLang = localStorage.getItem(localStorageKey);
  return storedLang ?? "rtl";
};
const imageSliderContainer = document.getElementById("imageSliderContainer");

const setLang = (lang) => {
  localStorage.setItem(localStorageKey, lang);
  body.setAttribute("dir", lang);
  if (lang === "rtl") {
    toggleLang.textContent = "EN";
    toggleLangMinScreen.textContent = "EN";
    ArLang.forEach((div) => (div.style.cssText = `display:inline-block ;`));
    EnLang.forEach((div) => (div.style.cssText = `display:none ;`));
    if (imageSliderContainer) {
      imageSliderContainer.setAttribute("dir", "ltr");
    }
  } else {
    toggleLang.textContent = "AR";
    toggleLangMinScreen.textContent = "AR";
    ArLang.forEach((div) => (div.style.cssText = `display:none ;`));
    EnLang.forEach((div) => (div.style.cssText = `display:inline-block ;`));
    if (imageSliderContainer) {
      imageSliderContainer.setAttribute("dir", "ltr");
    }
  }
};

const initialLang = getLang();
setLang(initialLang);

const switchLanguage = () => {
  const currentLang = getLang();
  const newLang = currentLang === "ltr" ? "rtl" : "ltr";
  setLang(newLang);
  location.reload();
};
// <!-- //////////////// تعديل //////////////// -->
function reRenderLang() {
  const lang = localStorage.getItem("lang");
  const ArLang = document.querySelectorAll(".ArLang");
  const EnLang = document.querySelectorAll(".EnLang");
  if (lang === "rtl") {
    ArLang.forEach((div) => (div.style.cssText = `display:inline-block ;`));
    EnLang.forEach((div) => (div.style.cssText = `display:none ;`));
    if (imageSliderContainer) {
      imageSliderContainer.setAttribute("dir", "ltr");
    }
  } else {
    ArLang.forEach((div) => (div.style.cssText = `display:none ;`));
    EnLang.forEach((div) => (div.style.cssText = `display:inline-block ;`));
  }
}

////////////// reset specialUnits slider dir /////////////////

const specialUnitsSliderGlobal = document.querySelectorAll(
  ".specialUnitsSlider .slideContainer"
);
if (localStorage.getItem("lang") === "ltr") {
  specialUnitsSliderGlobal.forEach((slider) => slider.classList.add("leftDir"));
  specialUnitsSliderGlobal.forEach((slider) =>
    slider.classList.remove("rightDir")
  );
} else {
  specialUnitsSliderGlobal.forEach((slider) =>
    slider.classList.add("rightDir")
  );
  specialUnitsSliderGlobal.forEach((slider) =>
    slider.classList.remove("leftDir")
  );
}

//////////////////////////// handel open side nav ////////////////////////////////////

const handelOpenLinksList = (eI) => {
  document.querySelector(".NavBarMinScreen").classList.toggle("openSideBar");
  document.getElementById("nav-icon1").classList.toggle("open");
};

//////////////////////////// handel copy on click ////////////////////////////////////
// <!-- //////////////// تعديل //////////////// -->
const copyButtons = document.querySelectorAll(".copy-button");

copyButtons.forEach((button) => {
  button.addEventListener("click", function () {
    const textToCopy = this.textContent.trim();
    const tempInput = document.createElement("input");
    tempInput.value = textToCopy;
    document.body.appendChild(tempInput);
    tempInput.select();

    try {
      const successful = navigator.clipboard.writeText(textToCopy);
      const message = successful ? "Copied!" : "Failed to copy.";
      Swal.fire({
        position: "center",
        icon: "success",
        title: `${message}`,
        showConfirmButton: false,
        timer: 1500,
        iconColor: "#a99571",
      });
    } catch (err) {
      console.error("Failed to copy text:", err);
    }
    document.body.removeChild(tempInput);
  });
});

////////////////////////////////////// handel open and close  all dropDown lists //////////////////////////////////////////////

const searchInputsContainer = document.querySelectorAll(
  ".inputContainer:not(.calenderInput)"
);
const searchDateInput = document.querySelectorAll(
  ".inputContainer.calenderInput"
);

searchInputsContainer.forEach((inputBox) => {
  inputBox.addEventListener("click", () => {
    const dropDownList = inputBox.querySelector(".dropDownList");
    $(dropDownList).slideToggle();
  });
});

searchDateInput.forEach((input) => {
  input.querySelector(".dropDownBox").addEventListener("click", (event) => {
    const dropDownList = input.querySelector(".dateDropDown");
    const clickedElement = event.target;
    if (dropDownList.contains(clickedElement)) {
      event.stopPropagation();
    } else {
      $(dropDownList).slideToggle();
    }
  });
});

searchInputsContainer.forEach((inputBox) => {
  const option = inputBox.querySelectorAll(".dropDownList li");
  const input = inputBox.querySelector(".valueInput");
  option.forEach((opt) => {
    opt.addEventListener("click", () => {
      const valueOfOtion = opt.textContent.trim();
      input.value = valueOfOtion;
    });
  });
});

////////////////////////////////////////// handel all DropDowns ///////////////////////////////////////////

let searchUnitSelectBtn = document.querySelectorAll(
  ".inputContainer .select-btn"
);
let searchUnitContent = document.querySelectorAll(".inputContainer .content");
let searchUnitWrapper = document.querySelectorAll(".inputContainer .wrapper");
let searchUnitSearchInp = document.querySelectorAll(
  ".inputContainer .wrapper input"
);
let searchUnitValueInputs = document.querySelectorAll(
  ".inputContainer .valueInput"
);
let searchUnitEmptyInput = document.querySelectorAll(
  ".inputContainer .emptyInput"
);
let searchUnitOptions = document.querySelectorAll(
  ".inputContainer .wrapper .options"
);

let searchUnitOptionsArray = Array.from(searchUnitOptions);
let dropDownData = searchUnitOptionsArray.map((options) =>
  Array.from(options.querySelectorAll("li")).map((li) => li)
);

// <!-- //////////////// تعديل //////////////// -->
function resetValues() {
  searchUnitSelectBtn = document.querySelectorAll(
    ".inputContainer .select-btn"
  );
  searchUnitContent = document.querySelectorAll(".inputContainer .content");
  searchUnitWrapper = document.querySelectorAll(".inputContainer .wrapper");
  searchUnitSearchInp = document.querySelectorAll(
    ".inputContainer .wrapper input"
  );
  searchUnitValueInputs = document.querySelectorAll(
    ".inputContainer .valueInput"
  );
  searchUnitEmptyInput = document.querySelectorAll(
    ".inputContainer .emptyInput"
  );
  searchUnitOptions = document.querySelectorAll(
    ".inputContainer .wrapper .options"
  );

  searchUnitOptionsArray = Array.from(searchUnitOptions);
  dropDownData = searchUnitOptionsArray.map((options) =>
    Array.from(options.querySelectorAll("li")).map((li) => li)
  );
  searchUnitSearchInp.forEach((input, index) => {
    input.addEventListener("keyup", () => {
      let arr = [];
      let searchWord = input.value.toLowerCase();

      arr = dropDownData[index]
        .filter((data) => {
          return data.innerText.toLowerCase().trim().startsWith(searchWord);
        })
        .map((data) => {
          let li = data.outerHTML;
          return li;
        })
        .join("");
      searchUnitOptions[index].innerHTML = arr
        ? arr
        : `<p style="margin-top: 10px;">Oops! Country not found</p>`;
    });
  });
}

function searchUnitAddCase(selectedLi) {
  searchUnitOptions.forEach((option, index) => {
    option.innerHTML = "";
    const unitCode = selectedLi.getAttribute("optionCode");
    let li = `<li onclick="restDropDown(this)">All</li>`;
    option.insertAdjacentHTML("afterbegin", li);
    dropDownData[index].forEach((list) => {
      let li = list.outerHTML;
      option.insertAdjacentHTML("beforeend", li);
    });
  });
}

// <!-- //////////////// تعديل //////////////// -->
function searchUnitUpdateName(selectedLi) {
  const inputContainer = selectedLi.closest(".inputContainer");
  inputContainer.querySelector(".wrapper .content input").value = "";
  searchUnitAddCase(selectedLi);
  inputContainer.querySelector(".wrapper ").classList.remove("active");
  inputContainer.querySelector(".select-btn").firstElementChild.innerText =
    selectedLi.innerText.trim();
  inputContainer.querySelector(".valueInput").value =
    selectedLi.getAttribute("optionCode");
  inputContainer.querySelector(".emptyInput").value = selectedLi.innerText;
  $(inputContainer.querySelector(".wrapper .content")).slideUp();
}
// <!-- //////////////// تعديل //////////////// -->
function restDropDown(selectedLi) {
  const inputContainer = selectedLi.closest(".inputContainer");
  inputContainer.querySelector(".wrapper .content input").value = "";
  inputContainer.querySelector(".valueInput").value = "";
  inputContainer.querySelector(".select-btn").firstElementChild.innerText = "";
  $(inputContainer.querySelector(".wrapper .content")).slideUp();
}

searchUnitSearchInp.forEach((input, index) => {
  input.addEventListener("keyup", () => {
    let arr = [];
    let searchWord = input.value.toLowerCase();

    arr = dropDownData[index]
      .filter((data) => {
        return data.innerText.toLowerCase().trim().startsWith(searchWord);
      })
      .map((data) => {
        let li = data.outerHTML;
        return li;
      })
      .join("");
    searchUnitOptions[index].innerHTML = arr
      ? arr
      : `<p style="margin-top: 10px;">Oops! Country not found</p>`;
  });
});

// <!-- //////////////// تعديل //////////////// -->

searchUnitSelectBtn.forEach((btn, index) => {
  if (!btn.dataset.hasEventListener) {
    btn.dataset.hasEventListener = true;

    btn.addEventListener("click", () => {
      $(searchUnitContent[index]).slideToggle();
      searchUnitSelectBtn.forEach((select, idx) => {
        if (select !== btn) {
          $(searchUnitContent[idx]).slideUp();
        }
      });
    });
  }
});
// <!-- //////////////// تعديل //////////////// -->
function reRenderDropdown() {
  const searchUnitSelectBtn = document.querySelectorAll(
    ".inputContainer .select-btn"
  );
  const searchUnitContent = document.querySelectorAll(
    ".inputContainer .content"
  );

  searchUnitSelectBtn.forEach((btn, index) => {
    if (!btn.dataset.hasEventListener) {
      btn.dataset.hasEventListener = true;
      btn.addEventListener("click", () => {
        $(searchUnitContent[index]).slideToggle();
        searchUnitSelectBtn.forEach((select, idx) => {
          if (select !== btn) {
            $(searchUnitContent[idx]).slideUp();
          }
        });
      });
    }
  });
}

document.addEventListener("click", (event) => {
  const clickedElement = event.target;
  searchUnitContent.forEach((content, index) => {
    if (
      !searchUnitSelectBtn[index].contains(event.target) &&
      !content.contains(event.target)
    ) {
      $(content).slideUp();
    }
  });
  const dropDownList = document.querySelectorAll(
    ".inputContainer.calenderInput .dateDropDown"
  );
  const myDiv = document.querySelectorAll(".inputContainer.calenderInput ");
  myDiv.forEach((div, index) => {
    if (!div.contains(clickedElement)) {
      $(dropDownList[index]).slideUp();
    } else {
      event.stopPropagation();
    }
  });
});

/////////////////////////////////////////////////////////////////////////
const basicPhoneRegex = /^\+?(\d{2}|\d{3})[- ]?(\d{2,3})[- ]?(\d{4,8})$/;
const addUnitScreen = document.getElementById("addYourUintSection");

function handelOpenAddUnitScreen() {
  $(addUnitScreen).fadeIn();
  handelOpenLinksList();
}
function handelcCloseAddUnitScreen() {
  $(addUnitScreen).fadeOut();
  document.getElementById("checkPoneNumberBox").style.display = "flex";
  document.getElementById("addUintFormSlider").style.display = "none";
}

let addUnitFormSwiper = new Swiper(".addUnitSwiper", {
  preventInteractionOnTransition: true,
  pagination: {
    el: ".swiper-pagination",
    type: "progressbar",
  },
  touchRatio: 0.001,
  grabCursor: false,
});
addUnitFormSwiper.on("slideChangeTransitionStart", function () {
  console.log("hiii");

  if ($(this.slides[this.activeIndex]).find(".fourthSection").length > 0) {
    document.querySelector(".fourthSectionSlide").style.display = "inline-block";
    let addUnitMap = L.map("addUnitMap", {
      zoomSnap: 3,
      dragging: true,
    }).setView(["30", "33.2"], 13);

    L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
      attribution:
        '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
    }).addTo(addUnitMap);

    let currentMarker;

    addUnitMap.on("click", function (e) {
      if (currentMarker) {
        addUnitMap.removeLayer(currentMarker);
      }
      let lat = e.latlng.lat;
      let lng = e.latlng.lng;
      currentMarker = L.marker([lat, lng]).addTo(addUnitMap);
      currentMarker.bindPopup("<h3> تم تحديد الموقع الجديد </h3>").openPopup();
      console.log(lat, lng);
    });

    // Call invalidateSize() only if container is visible
    setTimeout(() => {
      addUnitMap.invalidateSize();
    }, 1500);
  } else {
    document.querySelector(".fourthSectionSlide").style.display = "none";
  }
});

let isConditionMet = false;

function slideNext() {
  currentForm = addUnitFormSwiper.activeIndex;
  if (checkIsFormValid(currentForm)) {
    addUnitFormSwiper.slideNext();
  }
}
function slidePrev() {
  addUnitFormSwiper.slidePrev();
  currentForm = addUnitFormSwiper.activeIndex;
}

function checkIsFormValid(currentSlide) {
  let status = true;
  // switch (currentSlide) {
  //   case 0:
  //     const form = document.querySelectorAll("#firstForm .inputVal");
  //     form.forEach((input) => {
  //       input
  //         .closest(".inputContainer")
  //         .querySelector(".errorMessage").innerHTML = "";
  //       if (input.value == "") {
  //         input
  //           .closest(".inputContainer")
  //           .querySelector(
  //             ".errorMessage"
  //           ).innerHTML = ` <span class="ArLang">الحقل مطلوب</span>
  //               <span class="EnLang">field is required</span>`;
  //         reRenderLang();
  //         status = false;
  //       }
  //     });
  //     break;

  //   default:
  //     break;
  // }
  // if (currentSlide == 9) {
  //   document.getElementById("swiperNext").style.display = "none";
  //   document.getElementById("addUnitSubmitButton").style.display =
  //     "inline-block";
  // } else {
  //   document.getElementById("addUnitSubmitButton").style.display = "none";
  //   document.getElementById("swiperNext").style.display = "inline-block";
  // }

  return status;
}

const checkPhoneInput = document.querySelector("#checkPhoneInput");

window.intlTelInput(checkPhoneInput, {
  utilsScript:
    "https://cdn.jsdelivr.net/npm/intl-tel-input@23.8.0/build/js/utils.js",
});

function addPhoneNumber() {
  const phone = document.getElementById("checkPhoneInput").value;
  const userPhoneNumber = {
    phoneNumber: phone,
    countryCode:
      checkPhoneInput.getAttribute("countryCode") == ""
        ? "+966"
        : checkPhoneInput.getAttribute("countryCode"),
  };
  const errorMsg = document.querySelector(
    ".addYourUintSection .checkPoneNumberBox .errorMessage"
  );
  const continueButton = document.querySelector(
    ".addYourUintSection .checkPoneNumberBox .continueButton"
  );

  continueButton.disabled = true;
  continueButton
    .querySelectorAll("span")
    .forEach((span) => (span.style.display = "none"));
  continueButton.querySelector("i").style.display = "block";
  errorMsg.innerHTML = ``;
  continueButton.disabled = true;
  continueButton.style.cursor = "not-allowed";
  continueButton.style.backgroundColor = "#928263c9";
  setTimeout(() => {
    continueButton
      .querySelectorAll("span")
      .forEach((span) => (span.style.display = "inline-block"));
    continueButton.querySelector("i").style.display = "none";
    reRenderLang();

    ////////////////////////// if response is successful ///////////////////////////////
    if (basicPhoneRegex.test(phone) /*&& response == "success"*/) {
      document.getElementById("checkPoneNumberBox").style.display = "none";
      document.getElementById("addUintFormSlider").style.display = "flex";
    } else {
      ///////////////////////////// if response is failed ///////////////////////////////////
      errorMsg.innerHTML = `<span class="ArLang">رقم الهاتف غير صالح</span><span class="EnLang">phone is not valid</span>`;

      reRenderLang();
    }
    continueButton.disabled = false;
    continueButton.style.cursor = "pointer";
    continueButton.style.backgroundColor = "#a99571";
  }, 1000);
}

function addMainPhoto(event, element) {
  const image = element
    .closest(".inputContainer")
    .querySelector(".imageUploaded");
  if (image.contains(event.target)) {
    return;
  } else {
    const inputFile = element
      .closest(".inputContainer")
      .querySelector("input[type=file]");
    inputFile.click();
  }
}

function displayImg(input) {
  const reader = new FileReader();
  reader.readAsDataURL(input.files[0]);
  reader.onload = () => {
    const image = input
      .closest(".inputContainer")
      .querySelector(".imageUploaded img");
    image.src = reader.result;
  };

  input
    .closest(".inputContainer")
    .querySelector(".imageUploaded").style.display = "flex";
}

function deleteImage(element) {
  element.closest(".imageUploaded").style.display = "none";
  element.closest(".imageUploaded").querySelector("img").src = "";
}

const addImgInput = document.getElementById("addImgInput");
const imageCounter = document.getElementById("imgCounter");
const displayCounter = document.getElementById("displayCounter");

function deleteImageSection(element) {
  let minCount = imageCounter.dataset.mincount;
  if (Number(minCount) > 0) {
    element.closest(".inputContainer").remove();
    imageCounter.dataset.mincount = Number(minCount) - 1;
    displayCounter.innerText = imageCounter.dataset.mincount;
  }
}

function addNewImage() {
  const secondForm = document.getElementById("secondForm");
  let minCount = imageCounter.dataset.mincount;
  let maxCount = imageCounter.dataset.maxcount;
  if (minCount != maxCount) {
    addImgInput.click();
  }
}

addImgInput.onchange = (e) => {
  const reader = new FileReader();
  reader.readAsDataURL(addImgInput.files[0]);
  document.getElementById("lodingSpiner").style.display = "block";
  reader.onload = () => {
    const section = `
                    <input
                      hidden=""
                      class="unitPhoto"
                      type="file"
                      accept="image/*"
                      value="${reader.result}"
                    />
                    <div class="uploadImage">
                      <div class="imageBox">
                        <i
                          class="fa-solid fa-x"
                          onclick="deleteImageSection(this)"
                        ></i>
                        <img
                          src="${reader.result}"
                          width="200"
                          height="200"
                          alt=""
                        />
                      </div>
                    </div>`;
    document.getElementById("lodingSpiner").style.display = "none";
    const newDiv = document.createElement("div");
    let minCount = imageCounter.dataset.mincount;
    let maxCount = imageCounter.dataset.maxcount;
    imageCounter.dataset.mincount = Number(minCount) + 1;
    displayCounter.innerText = imageCounter.dataset.mincount;
    newDiv.className = "inputContainer";
    newDiv.innerHTML = section;
    secondForm.appendChild(newDiv);
  };
};

function increase(element) {
  const parent = element.closest(".counter");
  let countInput = parent.querySelector(".count");
  countInput.value = parseInt(countInput.value) + 1;
}

function decrease(element) {
  const parent = element.closest(".counter");
  let countInput = parent.querySelector(".count");

  if (countInput.value > 0) {
    countInput.value = parseInt(countInput.value) - 1;
  }
}
