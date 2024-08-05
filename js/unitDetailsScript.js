let defaultLat = Number(
  document.getElementById("unitDetails").getAttribute("Lat")
);
let defaultLon = Number(
  document.getElementById("unitDetails").getAttribute("Lon")
);

let map = L.map("map", {
  zoomSnap: 2,
}).setView([defaultLat, defaultLon], 13);

L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
  attribution:
    '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
}).addTo(map);

let marker = L.marker([defaultLat, defaultLon], 13).addTo(map);
marker.bindPopup("<h3>  unit.name </h3>");

setTimeout(() => {
  map.invalidateSize();
}, 2000);
////////////////////////////////////// تعديل  //////////////////////////////////////////

const bookingButtonMobileView = document.getElementById(
  "bookingButtonMobileView"
);
const bookingButton = document.getElementById("bookingButton");
function fillConfirmDate(arrivedDate, leavedDate) {
  console.log(arrivedDate, leavedDate);
  currentURL = window.location.href;
  const url = new URL(`${currentURL}`);
  const searchParams = new URLSearchParams(url.search);
  const areaUnitCode = searchParams.get("strAreaUnitCode");
  console.log(areaUnitCode);
  showContainer();
  bookingButtonMobileView.disabled = false;
  bookingButtonMobileView.style.cursor = "pointer";
  bookingButtonMobileView.style.backgroundColor = "#a99571";
  bookingButton.disabled = false;
  bookingButton.style.cursor = "pointer";
  bookingButton.style.backgroundColor = "#a99571";
}
function removeVal() {
  const expensesContainer = document.querySelector(
    `.unitDetails .calenderSide .bookingDetails .expenses`
  );
  $(expensesContainer).slideUp();
  const confirmBooking = document.querySelector(`.unitDetails .confirmBooking`);
  $(confirmBooking).fadeOut();
  bookingButtonMobileView.disabled = true;
  bookingButtonMobileView.style.backgroundColor = "#928263c9";
  bookingButtonMobileView.style.cursor = "not-allowed";

  bookingButton.disabled = true;
  bookingButton.style.backgroundColor = "#928263c9";
  bookingButton.style.cursor = "not-allowed";
}
/////////////////////////
function showContainer() {
  const expensesContainer = document.querySelector(
    `.unitDetails .calenderSide .bookingDetails .expenses`
  );
  const confirmBooking = document.querySelector(`.unitDetails .confirmBooking`);
  $(expensesContainer).slideDown();
  $(confirmBooking).fadeIn();
  const section = document.getElementById("bookingDetails");
  const mediaQuery = window.matchMedia("(max-width: 1100px)");
  if (mediaQuery.matches) {
    section.scrollIntoView({ behavior: "smooth" });
  }
}
let swiper = new Swiper(".mySwiper", {
  pagination: {
    el: ".swiper-pagination",
    type: "progressbar",
  },
  grabCursor: true,
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});
let mobileViewSwiper = new Swiper(".mobileViewSwiper", {
  pagination: {
    el: ".swiper-pagination",
    type: "progressbar",
  },
  grabCursor: true,
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});

const imagesSliderLay = document.querySelector(".imagesSliderLay");
const swiperContainer = document.getElementById("swiperContainer");

function closeSliderScreen() {
  $(imagesSliderLay).fadeOut();
}
function openSliderScreen() {
  $(imagesSliderLay).fadeIn();
}

imagesSliderLay.addEventListener("click", (e) => {
  if (!swiperContainer.contains(e.target)) {
    closeSliderScreen();
  }
});

function openinfoDropdown(element) {
  const parent = element.closest(".guarantee");
  const dropDownElement = parent.querySelector(".infoDropdown");
  $(dropDownElement).slideToggle();
  if (element.classList.contains("fa-chevron-down")) {
    element.classList.remove("fa-chevron-down");
    element.classList.add("fa-chevron-up");
  } else {
    element.classList.remove("fa-chevron-up");
    element.classList.add("fa-chevron-down");
  }
}
let infoLinksList = document.querySelectorAll(
  ".unitInformation .unitInfoNavBarContainer .infoNavBar > span"
);
let sectionsList = document.querySelectorAll(
  ".unitInformation  .activeSectionContainer > div"
);
function swichSction(element) {
  element.classList.add("activeLink");
  infoLinksList.forEach((link) => {
    if (link != element) {
      link.classList.remove("activeLink");
    }
  });
  let sectionId = element.getAttribute("sectionId");
  if (element.getAttribute("sectionId") == "thirdSection") {
    setTimeout(() => {
      map.invalidateSize();
    }, 1000);
  }
  sectionsList.forEach((section) => {
    if (section.getAttribute("sectionId") === sectionId) {
      section.classList.add("activeSection");
      sectionsList.forEach((sec) => {
        if (sec !== section) {
          sec.classList.remove("activeSection");
        }
      });
      return;
    }
  });
  const section = document.getElementById("activeSectionContainer");
  const mediaQuery = window.matchMedia("(max-width: 1100px)");
  if (mediaQuery.matches) {
    section.scrollIntoView({ behavior: "smooth" });
  }
}

function openLcationSection() {
  const section = document.getElementById("activeSectionContainer");
  section.scrollIntoView({ behavior: "smooth" });
  swichSction(infoLinksList[2]);
}
/////////////////////////////////////////// اخر تعديل //////////////////////////////////////////////////////
const input = document.querySelector("#phone");
window.intlTelInput(input, {
  utilsScript:
    "https://cdn.jsdelivr.net/npm/intl-tel-input@23.8.0/build/js/utils.js",
});
const country = document.querySelectorAll(".iti__country ");

country.forEach((item) => {
  item.addEventListener("click", () => {
    input.value = item.querySelector(".iti__dial-code").innerText;
  });
});

const verificationCodeInput = document.querySelectorAll(
  ".verificationCodeInput input"
);

const verificationButton = document.getElementById("verificationButton");

function checkPhone() {
  const phone = document.querySelector("#phone").value;
  localStorage.setItem("userPhoneNumber", phone);
  const errorMsg = document.getElementById("phoneInputErrorMessage");
  const continueButton = document.querySelector("#phoneNumberButton");
  continueButton.disabled = true;
  continueButton
    .querySelectorAll("span")
    .forEach((span) => (span.style.display = "none"));
  continueButton.querySelector("i").style.display = "block";
  errorMsg.innerHTML = ``;

  setTimeout(() => {
    continueButton
      .querySelectorAll("span")
      .forEach((span) => (span.style.display = "inline-block"));
    continueButton.querySelector("i").style.display = "none";
    reRenderLang();
    document.getElementById("mobileInputBox").style.display = "none";
    document.getElementById("verifyInputBox").style.display = "flex";

    ////////////////////////// if response is successful ///////////////////////////////
    document.getElementById("phoneNumber1").innerText = phone;
    document.getElementById("phoneNumber2").innerText = phone;
    verificationCodeInput.forEach((input) => {
      input.value = "";
    });
    verificationCodeInput[0].focus();

    localStorage.setItem("verificationCodeCounter", 20);
    continueButton.disabled = true;
    continueButton.style.cursor = "not-allowed";
    continueButton.style.backgroundColor = "#928263c9";
    setInterval(() => {
      let verificationCodeCounter = Number(
        localStorage.getItem("verificationCodeCounter")
      );
      if (verificationCodeCounter == 0) {
        continueButton.disabled = false;
        continueButton.style.cursor = "pointer";
        continueButton.style.backgroundColor = "#a99571";
        document.getElementById("verificationCodeCounter").innerText = "";
        clearInterval();
      } else {
        localStorage.setItem(
          "verificationCodeCounter",
          verificationCodeCounter - 1
        );
        document.getElementById("verificationCodeCounter").innerText =
          verificationCodeCounter - 1;
      }
    }, 1000);
    ///////////////////////////// if response is failed ///////////////////////////////////
    //>>
    // errorMsg.innerHTML = `<span class="ArLang">رقم الهاتف غير صالح</span>
    //             <span class="EnLang">phone is not valid</span>`;
    // reRenderLang();
  }, 3000);
}

verificationCodeInput.forEach((input) => {
  let lastInputStatus = 0;
  input.onkeyup = (event) => {
    const currentElement = event.target;
    const nextElement = input.nextElementSibling;
    const prevElement = input.previousElementSibling;

    if (prevElement && event.keyCode === 8) {
      if (lastInputStatus === 1) {
        prevElement.value = "";
        prevElement.focus();
      }
      verificationButton.setAttribute("disabled", true);
      lastInputStatus = 1;
    } else {
      const regex = /^[0-9]+$/;
      if (!regex.test(currentElement.value)) {
        currentElement.value = currentElement.value.replace(/\D/g, "");
      } else if (currentElement.value) {
        if (nextElement) {
          nextElement.focus();
        } else {
          verificationButton.removeAttribute("disabled");
        }
      }
    }
  };
});

function checkVerfiedCode() {
  const errorMsg = document.getElementById("verificationCodeErrorMessage");
  let values = Array.from(verificationCodeInput).map((input) => input.value);
  if (!values.includes("")) {
    let verifiedCode = "";
    verificationCodeInput.forEach((input) => {
      verifiedCode += input.value;
    });
    const continueButton = document.querySelector("#verificationButton");
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
      window.location.href = "/bookingConfirmation.html";

      ///////////////////////////// if response is failed ///////////////////////////////////
      //>>
      // errorMsg.innerHTML = `<span class="ArLang"> الرقم المتغير غير صالح</span>
      //             <span class="EnLang">vervified code is not valid</span>`;
      // reRenderLang();
    }, 3000);
  }
}

function openVerificationScreen() {
  $("#verificationScreen").fadeIn("fast");
}
function closeVerificationScreen() {
  $("#verificationScreen").fadeOut("fast");
}
function backToPhoneIput() {
  document.getElementById("mobileInputBox").style.display = "flex";
  document.getElementById("verifyInputBox").style.display = "none";
}
