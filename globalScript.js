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
const emailRegex =
  /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
const addUnitScreen = document.getElementById("addYourUintSection");
let defaultSlide = 0;
let isConditionMet = false;

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
  touchStartPreventDefault: false,
  pagination: {
    el: ".swiper-pagination",
    type: "progressbar",
  },
  touchRatio: 0.001,
  grabCursor: false,
});
addUnitFormSwiper.on("slideChangeTransitionStart", function () {
  if ($(this.slides[this.activeIndex]).find(".fourthSection").length > 0) {
    document.querySelector(".fourthSectionSlide").style.display =
      "inline-block";
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
      currentMarker
        .bindPopup(
          "<h3> <span class='ArLang'>تم تحديد الموقع </span> <span class='EnLang' >Location determined </span></h3>"
        )
        .openPopup();
      reRenderLang();
      document.getElementById("newUnitLocation").value = `${lat} , ${lng}`;
      console.log(document.getElementById("newUnitLocation").value);
    });

    // Call invalidateSize() only if container is visible
    setTimeout(() => {
      addUnitMap.invalidateSize();
    }, 2000);
  } else {
    document.querySelector(".fourthSectionSlide").style.display = "none";
  }
});

function slideNext() {
  if (defaultSlide == 0) {
    addUnitFormSwiper.slideTo(0, 300);
  }
  addUnitFormSwiper.params.touchStartPreventDefault = true;
  setTimeout(function () {
    addUnitFormSwiper.params.touchStartPreventDefault = false;
  }, 100);
  currentForm = addUnitFormSwiper.activeIndex;
  if (checkIsFormValid(currentForm)) {
    addUnitFormSwiper.slideNext();
  }

  if (currentForm == 9 && checkIsFormValid(currentForm) != false) {
    document.getElementById("swiperNext").style.display = "none";
    document.getElementById("addUnitSubmitButton").style.display =
      "inline-block";
  } else {
    document.getElementById("addUnitSubmitButton").style.display = "none";
    document.getElementById("swiperNext").style.display = "inline-block";
  }
}
function slidePrev() {
  if (defaultSlide == 0) {
    addUnitFormSwiper.slideTo(0, 300);
  }
  addUnitFormSwiper.params.touchStartPreventDefault = true;
  setTimeout(function () {
    addUnitFormSwiper.params.touchStartPreventDefault = false;
  }, 100);
  addUnitFormSwiper.slidePrev();
  currentForm = addUnitFormSwiper.activeIndex;
  document.getElementById("addUnitSubmitButton").style.display = "none";
  document.getElementById("swiperNext").style.display = "inline-block";
}

const unitPhotos = [];
const unitData = {};
function checkIsFormValid(currentSlide) {
  let status = true;
  switch (currentSlide) {
    case 0:
      const form_1 = document.querySelectorAll("#firstForm .inputVal");
      const f1SelectedList = document.querySelector("#firstForm .valueInput");
      form_1.forEach((input) => {
        input
          .closest(".inputContainer")
          .querySelector(".errorMessage").innerHTML = "";
        if (input.value == "") {
          input
            .closest(".inputContainer")
            .querySelector(
              ".errorMessage"
            ).innerHTML = ` <span class="ArLang">الحقل مطلوب</span>
                <span class="EnLang">field is required</span>`;
          reRenderLang();
          status = false;
        }
      });
      if (!emailRegex.test(form_1[0].value) && form_1[0].value != "") {
        form_1[0]
          .closest(".inputContainer")
          .querySelector(
            ".errorMessage"
          ).innerHTML = ` <span class="ArLang">ادخل ايميل صحيح</span>
            <span class="EnLang">field is required</span>`;
        reRenderLang();
        status = false;
      }
      if (status == true) {
        defaultSlide = 1;
        unitData.f1_inp1 = form_1[0].value;
        unitData.f1_inp2 = form_1[1].value;
        unitData.f1_inp3 = form_1[2].value;
        unitData.f1_inp4 = f1SelectedList.value.trim();
        unitData.f1_inp5 = form_1[4].value;
      }
      console.log(unitData);

      break;
    case 1:
      const form_2 = document.querySelectorAll("#secondForm .inputVal");
      form_2.forEach((input) => {
        input
          .closest(".inputContainer")
          .querySelector(".errorMessage").innerHTML = "";
        if (input.value == "") {
          input
            .closest(".inputContainer")
            .querySelector(
              ".errorMessage"
            ).innerHTML = ` <span class="ArLang">الحقل مطلوب</span>
                  <span class="EnLang">field is required</span>`;
          reRenderLang();
          status = false;
        }
      });
      if (status == true) {
        unitData.f2_inp1 = form_2[0].value;
        unitData.f2_inp2 = unitPhotos;
      }
      console.log(unitData);
      break;
    case 2:
      const form_3 = document.querySelectorAll("#thirdSection .inputVal");
      const f3SelectedList = document.querySelectorAll(
        "#thirdSection .valueInput"
      );
      form_3.forEach((input) => {
        input
          .closest(".inputContainer")
          .querySelector(".errorMessage").innerHTML = "";
        if (input.value == "") {
          input
            .closest(".inputContainer")
            .querySelector(
              ".errorMessage"
            ).innerHTML = ` <span class="ArLang">الحقل مطلوب</span>
                  <span class="EnLang">field is required</span>`;
          reRenderLang();
          status = false;
        }
      });
      if (status == true) {
        unitData.f3_inp1 = f3SelectedList[0].value.trim();
        unitData.f3_inp2 = f3SelectedList[1].value.trim();
        unitData.f3_inp3 = f3SelectedList[2].value.trim();
      }
      console.log(unitData);
      break;
    case 3:
      const form_4 = document.querySelectorAll("#fourthSectionSlide .inputVal");
      form_4.forEach((input) => {
        input
          .closest(".fourthSectionSlide")
          .querySelector(".errorMessage").innerHTML = "";
        if (input.value == "") {
          input
            .closest(".fourthSectionSlide")
            .querySelector(
              ".errorMessage"
            ).innerHTML = ` <span class="ArLang">الحقل مطلوب</span>
                  <span class="EnLang">field is required</span>`;
          reRenderLang();
          status = false;
        }
      });
      if (status == true) {
        unitData.f4_inp1 = form_4[0].value;
      }
      console.log(unitData);
      break;
    case 4:
      const form_5 = document.querySelectorAll("#fifthSection .inputVal");
      form_5.forEach((input) => {
        input
          .closest(".inputContainer")
          .querySelector(".errorMessage").innerHTML = "";
        if (input.value == "") {
          input
            .closest(".inputContainer")
            .querySelector(
              ".errorMessage"
            ).innerHTML = ` <span class="ArLang">الحقل مطلوب</span>
                  <span class="EnLang">field is required</span>`;
          reRenderLang();
          status = false;
        }
      });
      if (status == true) {
        unitData.f5_inp1 = form_5[0].value;
        unitData.f5_inp2 = form_5[1].value;
        unitData.f5_inp3 = form_5[2].value;
        unitData.f5_inp4 = form_5[3].value;
      }
      console.log(unitData);
      break;
    case 5:
      const form_6 = document.querySelectorAll("#sixthSection .inputVal");
      unitData.f6_inp1 = form_6[0].value;
      unitData.f6_inp2 = form_6[1].value;
      unitData.f6_inp3 = form_6[2].value;
      unitData.f6_inp4 = form_6[3].value;
      unitData.f6_inp5 = form_6[4].value;
      console.log(unitData);
      break;
    case 6:
      const form_7 = document.querySelectorAll("#seventhSection .inputVal");
      unitData.f7_inp1 = form_7[0].value;
      unitData.f7_inp2 = form_7[1].value;
      unitData.f7_inp3 = form_7[2].value;
      console.log(unitData);
      break;

    case 8:
      const form_9 = document.querySelectorAll("#ninthSection .inputVal");
      form_9.forEach((input) => {
        input
          .closest(".inputContainer")
          .querySelector(".errorMessage").innerHTML = "";
        if (input.value == "") {
          input
            .closest(".inputContainer")
            .querySelector(
              ".errorMessage"
            ).innerHTML = ` <span class="ArLang">الحقل مطلوب</span>
                  <span class="EnLang">field is required</span>`;
          reRenderLang();
          status = false;
        }
      });
      if (status == true) {
        unitData.f8_inp1 = form_9[0].value;
        unitData.f8_inp2 = form_9[1].value;
        unitData.f8_inp3 = form_9[2].value;
        unitData.f8_inp4 = form_9[3].value;
        unitData.f8_inp5 = form_9[4].value;
        unitData.f8_inp6 = form_9[5].value;
      }
      console.log(unitData);
      break;
    case 9:
      const form_10 = document.querySelectorAll("#tenthSection .inputVal");
      form_10.forEach((input) => {
        input
          .closest(".inputContainer")
          .querySelector(".errorMessage").innerHTML = "";
        if (input.value == "") {
          input
            .closest(".inputContainer")
            .querySelector(
              ".errorMessage"
            ).innerHTML = ` <span class="ArLang">الحقل مطلوب</span>
                  <span class="EnLang">field is required</span>`;
          reRenderLang();
          status = false;
        }
      });
      if (status == true) {
        unitData.f9_inp1 = form_10[0].value;
        unitData.f9_inp2 = form_10[1].value;
        unitData.f9_inp3 = form_10[2].value;
        unitData.f9_inp4 = form_10[3].value;
        unitData.f9_inp5 = form_10[4].value;
      }
      console.log(unitData);

      break;

    default:
      break;
  }

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
      document.getElementById("addUintVerifyInputBox").style.display = "flex";
      const addUintVerificationCodeInput = document.querySelectorAll(
        ".addUintVerificationCodeInput input"
      );
      addUintVerificationCodeInput.forEach((input) => {
        input.value = "";
      });

      addUintVerificationCodeInput[0].disabled = false;
      addUintVerificationCodeInput[3].disabled = true;
      addUintVerificationCodeInput[0].focus();
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
  if (input.value != "") {
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
}

function deleteImage(element) {
  element.closest(".imageUploaded").style.display = "none";
  element.closest(".imageUploaded").querySelector("img").src = "";
  element.closest(".inputContainer").querySelector(".inputVal").value = "";
}

const addImgInput = document.getElementById("addImgInput");
const imageCounter = document.getElementById("imgCounter");
const displayCounter = document.getElementById("displayCounter");

function deleteImageSection(element) {
  console.log(element);

  let minCount = imageCounter.dataset.mincount;
  if (Number(minCount) > 0) {
    element.closest(".inputContainer").remove();
    imageCounter.dataset.mincount = Number(minCount) - 1;
    displayCounter.innerText = imageCounter.dataset.mincount;
    const deletedInput = element
      .closest(".inputContainer")
      .querySelector(".inputVal");

    const inputIndex = unitPhotos.findIndex((x) => x == deletedInput.value);
    unitPhotos.splice(inputIndex, 1);
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
                      class="unitPhoto "
                      type="file"
                      accept="image/*"
                    />
                    <input
                      hidden=""
                      class=" inputVal"
                      type="text"
                      value="${addImgInput.files}"
                      hidden
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
                    </div>
                       <div class="errorMessage"></div>
                    `;
    document.getElementById("lodingSpiner").style.display = "none";
    const newDiv = document.createElement("div");
    let minCount = imageCounter.dataset.mincount;
    let maxCount = imageCounter.dataset.maxcount;
    imageCounter.dataset.mincount = Number(minCount) + 1;
    displayCounter.innerText = imageCounter.dataset.mincount;
    newDiv.className = "inputContainer";
    newDiv.innerHTML = section;
    secondForm.appendChild(newDiv);
    unitPhotos.push(addImgInput.files);
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
////////////////////////////////////////////////////////////

const addUintVerificationCodeInput = document.querySelectorAll(
  ".addUintVerificationCodeInput input"
);
const addUintVerificationButton = document.getElementById(
  "addUintVerificationButton"
);
addUintVerificationCodeInput[0].addEventListener("focus", () => {
  navigator.clipboard.readText().then((clipText) => {
    if (clipText.length == 4 && !isNaN(clipText)) {
      const verificationCode = clipText.split("");
      addUintVerificationCodeInput.forEach((input, index) => {
        input.value = verificationCode[index];
        if (index < 3) {
          input.disabled = true;
        }
      });
      addUintVerificationCodeInput[3].focus();
    }
  });
});

addUintVerificationCodeInput.forEach((input) => {
  let lastInputStatus = 0;
  input.onkeyup = (event) => {
    const currentElement = event.target;
    const nextElement = input.nextElementSibling;
    const prevElement = input.previousElementSibling;

    if (prevElement && event.keyCode === 8) {
      if (lastInputStatus === 1) {
        currentElement.disabled = true;
        prevElement.disabled = false;
        prevElement.value = "";
        prevElement.focus();
      }
      addUintVerificationButton.setAttribute("disabled", true);
      lastInputStatus = 1;
    } else {
      const regex = /^[0-9]+$/;
      if (!regex.test(currentElement.value)) {
        currentElement.value = currentElement.value.replace(/\D/g, "");
      } else if (currentElement.value) {
        if (nextElement) {
          currentElement.disabled = true;
          nextElement.disabled = false;
          nextElement.focus();
        } else {
          addUintVerificationButton.removeAttribute("disabled");
        }
      }
    }
  };
});

function AddUnitCheckVerfiedCode() {
  const errorMsg = document.getElementById(
    "addUintVerificationCodeErrorMessage"
  );
  let values = Array.from(addUintVerificationCodeInput).map(
    (input) => input.value
  );
  if (!values.includes("")) {
    let verifiedCode = "";
    addUintVerificationCodeInput.forEach((input) => {
      verifiedCode += input.value;
    });
    const continueButton = document.getElementById("addUintVerificationButton");
    continueButton
      .querySelectorAll("span")
      .forEach((span) => (span.style.display = "none"));
    continueButton.querySelector("i").style.display = "block";
    continueButton.disabled = true;
    setTimeout(() => {
      continueButton.disabled = false;
      continueButton
        .querySelectorAll("span")
        .forEach((span) => (span.style.display = "inline-block"));
      continueButton.querySelector("i").style.display = "none";
      reRenderLang();
      ////////////////////////// if response is successful ///////////////////////////////
      if (verifiedCode == "0000") {
        document.getElementById("addUintFormSlider").style.display = "flex";
        document.getElementById("addUintVerifyInputBox").style.display = "none";
      } else {
        errorMsg.innerHTML = `<span class="ArLang"> الرقم المتغير غير صالح</span>
        <span class="EnLang">vervified code is not valid</span>`;
        reRenderLang();
      }
    }, 3000);
  }
}

function addUnitBackToPhoneIput() {
  document.getElementById("checkPoneNumberBox").style.display = "flex";
  document.getElementById("addUintVerifyInputBox").style.display = "none";
}

function supmitFinalData() {
  const status = true;
  const form_11 = document.querySelectorAll("#eleventhSection .inputVal");
  form_11.forEach((input) => {
    input.closest(".inputContainer").querySelector(".errorMessage").innerHTML =
      "";
    if (input.value == "") {
      input
        .closest(".inputContainer")
        .querySelector(
          ".errorMessage"
        ).innerHTML = ` <span class="ArLang">الحقل مطلوب</span>
              <span class="EnLang">field is required</span>`;
      reRenderLang();
      status = false;
    }
  });
  if (status == true) {
    unitData.f10_inp1 = form_11[0].value;
    unitData.f10_inp2 = form_11[1].value;
    handelcCloseAddUnitScreen();
    let message;
    if (lang == "rtl") {
      message = "Unit has been added successfully";
    } else {
      message = "تم اضافة الوحدة بنجاح";
    }
    Swal.fire({
      position: "center",
      icon: `success`,
      title: `${message}`,
      showConfirmButton: false,
      timer: 1500,
      iconColor: "#a99571",
    });
  }
  // ajex call here
  // final data is unitData
  console.log(unitData);
}
