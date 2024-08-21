let finalData = {
  areaUnitContractID: 0,
  areaUnitContractCode: "0",
  areaUnitContractNumber: "0",
  areaUnitContractDate: new Date().toISOString(),
  areaUnitContractDateTime: new Date().toISOString(),
  areaUnitContractState: 0,
  areaUnitContractType: "0",
  areaUnitCode: "+",
  areaUnitPrice: "+",
  areaUnitServiceFee: "+",
  areaUnitTaxValue: "+",
  areaUnitSectionPercentValue: "+",
  areaUnitWebSitePercentValue: "+",
  areaUnitTotalPrice: "+",
  checkInDate: "+",
  checkOutDate: "+",
  nightsCount: "+",
  nightPrice: "+",
  totalPrice: "+",
  contractInsurance: "+",
  waletStus: "0",
  createUserName: "",
  craeteUserDate: new Date().toISOString(),
  updateUserName: "",
  updateUserDate: new Date().toISOString(),
  renterMobile: "+",
  renterCountryCode: "+",
  verificationCode: "+",
  renterIDNo: "+",
  renterName: "+",
  renterNationalityCode: "+",
  areaUnitContractEscort: [],
  areaUnitContractCar: [],
};

localStorage.setItem("finalData", JSON.stringify(finalData));

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

const bookingButtonMobileView = document.getElementById(
  "bookingButtonMobileView"
);
const bookingButton = document.getElementById("bookingButton");

///////////////////////
let startDate; ///
let endDate; ///
////////////////////
function fillConfirmDate(arrivedDate, leavedDate) {
  startDate = new Date(arrivedDate);
  endDate = new Date(leavedDate);
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

const input2 = document.querySelector("#phone2");
window.intlTelInput(input2, {
  utilsScript:
    "https://cdn.jsdelivr.net/npm/intl-tel-input@23.8.0/build/js/utils.js",
});

const input = document.querySelector("#phone");
window.intlTelInput(input, {
  initialCountry: "auto",
  geoIpLookup: (callback) => {
    fetch("https://ipapi.co/json")
      .then((res) => res.json())
      .then((data) => callback(data.country_code))
      .catch(() => callback("us"));
  },
  utilsScript: "/intl-tel-input/js/utils.js?1722010922246",
});

const country = document.querySelectorAll(".iti__country");
input.value = "";
input2.value = "";

country.forEach((item) => {
  item.addEventListener("click", () => {
    input2.value = "";
    input2.setAttribute(
      "countryCode",
      item.querySelector(".iti__dial-code").innerText
    );
  });
});

country.forEach((item) => {
  item.addEventListener("click", () => {
    input.value = "";
    input.setAttribute(
      "countryCode",
      item.querySelector(".iti__dial-code").innerText
    );
  });
});

const verificationCodeInput = document.querySelectorAll(
  ".verificationCodeInput input"
);
const verificationButton = document.getElementById("verificationButton");
function checkPhone() {
  const phone = document.querySelector("#phone").value;
  const userPhoneNumber = {
    phoneNumber: phone,
    countryCode:
      input.getAttribute("countryCode") == ""
        ? "+966"
        : input.getAttribute("countryCode"),
  };
  localStorage.setItem("userPhoneNumber", JSON.stringify(userPhoneNumber));
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

    ////////////////////////// if response is successful ///////////////////////////////
    if (basicPhoneRegex.test(phone) /*&& response == "success"*/) {
      document.getElementById("mobileInputBox").style.display = "none";
      document.getElementById("verifyInputBox").style.display = "flex";
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
    } else {
      ///////////////////////////// if response is failed ///////////////////////////////////
      errorMsg.innerHTML = `<span class="ArLang">رقم الهاتف غير صالح</span><span class="EnLang">phone is not valid</span>`;
      continueButton.disabled = false;
      continueButton.style.cursor = "pointer";
      continueButton.style.backgroundColor = "#a99571";
      reRenderLang();
    }
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
        currentElement.disabled = true;
        prevElement.disabled = false;
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
          currentElement.disabled = true;
          nextElement.disabled = false;
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
      localStorage.setItem("isUser", "true");
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

const AddYourCommentSection = document.getElementById("AddYourComment");
const checkPhoneBox = document.getElementById("checkPhoneBox");
const writeCommentBox = document.getElementById("writeCommentBox");
const AddReplyBox = document.getElementById("AddReplyBox");

function checkIsFormerClient() {
  const role = localStorage.getItem("commentRole");
  const button = document.getElementById("AddCommentPhoneSubmitButton");
  const phoneInputVal = document.getElementById("phone2").value;
  const errorMsg = document.getElementById("AddCommentPhoneInputErrorMessage");
  errorMsg.innerHTML = ``;
  button.disabled = true;
  button
    .querySelectorAll("span")
    .forEach((span) => (span.style.display = "none"));
  button.querySelector("i").style.display = "block";
  button.disabled = true;
  button.style.cursor = "not-allowed";
  button.style.backgroundColor = "#928263c9";
  setTimeout(() => {
    if (basicPhoneRegex.test(phoneInputVal)) {
      if (role == "client") {
        //Ajex call
        // if (response == "success") {
        checkPhoneBox.style.display = "none";
        writeCommentBox.style.display = "flex";
        // } else {
        //   //Show error message
        //   errorMsg.innerHTML = `<span class="ArLang">متاح فقط لزائر الوحدة</span><span class="EnLang">avilable only for unit vistor </span>`;
        //   reRenderLang();
        // }
      } else if (role == "admin") {
        // if (response == "success") {
        checkPhoneBox.style.display = "none";
        AddReplyBox.style.display = "flex";
        // } else {
        //   //Show error message
        //   errorMsg.innerHTML = `<span class="ArLang">متاح فقط للادمن</span><span class="EnLang">avilable only for Admin</span>`;
        //   reRenderLang();
        // }
      }
    } else {
      errorMsg.innerHTML = `<span class="ArLang">رقم الهاتف غير صالح</span><span class="EnLang">phone is not valid</span>`;
    }

    button.disabled = false;
    button.style.cursor = "pointer";
    button.style.backgroundColor = "#a99571";
    button
      .querySelectorAll("span")
      .forEach((span) => (span.style.display = "inline-block"));
    button.querySelector("i").style.display = "none";
    reRenderLang();
  }, 3000);
}

let clientReplyBack = "";
function openAddCommentBox() {
  localStorage.setItem("commentRole", "client");
  $(AddYourCommentSection).fadeIn();
}
function openAddReplyBox(clinet) {
  localStorage.setItem("commentRole", "admin");
  clientReplyBack = clinet.closest(".review").getAttribute("userId");
  $(AddYourCommentSection).fadeIn();
}

function AddComment() {
  const comment = document.getElementById("clientComment").value;
  //Ajex call
  closeAddCommentScreen();
  console.log(comment);
  const Toast = Swal.mixin({
    toast: true,
    position: "top-end",
    showConfirmButton: false,
    timer: 3000,
    timerProgressBar: true,
    didOpen: (toast) => {
      toast.onmouseenter = Swal.stopTimer;
      toast.onmouseleave = Swal.resumeTimer;
    },
  });
  Toast.fire({
    icon: "success",
    title: "Your reply comment successfully",
  });
}
function AddReply() {
  const comment = document.getElementById("AdminReply").value;
  //Ajex call
  //clientReplyBack

  closeAddCommentScreen();
  console.log(comment);
  const Toast = Swal.mixin({
    toast: true,
    position: "top-end",
    showConfirmButton: false,
    timer: 3000,
    timerProgressBar: true,
    didOpen: (toast) => {
      toast.onmouseenter = Swal.stopTimer;
      toast.onmouseleave = Swal.resumeTimer;
    },
  });
  Toast.fire({
    icon: "success",
    title: "Your reply added successfully",
  });
}

function closeAddCommentScreen() {
  checkPhoneBox.style.display = "flex";
  writeCommentBox.style.display = "none";
  AddReplyBox.style.display = "none";
  $(AddYourCommentSection).fadeOut();
}

function checkIsFavoriteUnit() {
  const icons = document.querySelectorAll(".favoriteIcon");
  let favoriteUnits = [];
  if (localStorage.getItem("favoriteUnits")) {
    favoriteUnits = JSON.parse(localStorage.getItem("favoriteUnits"));
  }
  if (favoriteUnits.includes("84393")) {
    icons.forEach((icon) => {
      icon.classList.remove("fa-regular");
      icon.classList.add("fa-solid");
      icon.style.color = "red";
    });
  } else {
    icons.forEach((icon) => {
      icon.classList.add("fa-regular");
      icon.classList.remove("fa-solid");
      icon.style.color = "white";
    });
  }
}

checkIsFavoriteUnit();

function addUnitToFavorite() {
  let favoriteUnits = [];
  if (localStorage.getItem("favoriteUnits")) {
    favoriteUnits = JSON.parse(localStorage.getItem("favoriteUnits"));
  }
  if (favoriteUnits.includes("84393")) {
    favoriteUnits = favoriteUnits.filter((unitId) => unitId !== "84393");
    localStorage.setItem("favoriteUnits", JSON.stringify(favoriteUnits));
  } else {
    favoriteUnits.push("84393");
    localStorage.setItem("favoriteUnits", JSON.stringify(favoriteUnits));
  }
  checkIsFavoriteUnit();
}

function fillPricingData(data) {
  let dataOfDays = [];
  const firstData = data?.pricing;
  const originalPrice = unitDetails?.areaUnitPrice;
  const weekEndPrice = unitDetails?.areaUnitWeekEndPrice;
  const arr2 = [];
  if (firstData) {
    for (let i = 0; i < firstData?.length; i++) {
      const arr = [
        String(originalPrice),
        String(originalPrice),
        String(originalPrice),
        String(originalPrice),
        String(originalPrice),
        String(weekEndPrice),
        String(weekEndPrice),
      ];
      const data = firstData[i]?.pricingDays;
      if (data) {
        for (let i = 0; i < data?.length; i++) {
          switch (data[i]?.unitPricingDayName) {
            case "السبت":
              arr[0] = data[i]?.unitPricingDayPrice;
              break;
            case "الأحد":
              arr[1] = data[i]?.unitPricingDayPrice;
              break;
            case "الإثنين":
              arr[2] = data[i]?.unitPricingDayPrice;
              break;
            case "الثلاثاء":
              arr[3] = data[i]?.unitPricingDayPrice;
              break;
            case "الأربعاء":
              arr[4] = data[i]?.unitPricingDayPrice;
              break;
            case "الخميس":
              arr[5] = data[i]?.unitPricingDayPrice;
              break;
            case "الجمعة":
              arr[6] = data[i]?.unitPricingDayPrice;
              break;
          }
        }
        arr2.push(arr);
      }
    }
    dataOfDays = arr2;
  }

  const tableData = `
  ${dataOfDays?.map((table, idx) => {
    return ` <div class="tableContainer">
          <table class="">
            <thead>
              <th class="head">
                <span class="ArLang">اليوم</span>
                <span class="EnLang"> day </span>
              </th>
                      <th>
                        <span class="ArLang">السبت</span
                        ><span class="EnLang">sat</span>
                      </th>

                      <th>
                        <span class="ArLang">الاحد</span>
                        <span class="EnLang">Sun</span>
                      </th>
                      <th>
                        <span class="ArLang">الاثنين</span>
                        <span class="EnLang">Mon</span>
                      </th>
                      <th>
                        <span class="ArLang">الثلثاء</span>
                        <span class="EnLang">Tue</span>
                      </th>
                      <th>
                        <span class="ArLang">الاربعاء</span>
                        <span class="EnLang">wed</span>
                      </th>
                      <th>
                        <span class="ArLang">الخميس</span>
                        <span class="EnLang">thu</span>
                      </th>
                      <th>
                        <span class="ArLang">الجمعة</span>
                        <span class="EnLang">Fri</span>
                      </th>
            </thead>
            <tbody>
              <tr>
                <td class="head">
                  <span class="ArLang">السعر</span>
                  <span class="EnLang"> price </span>
                </td>
                ${table.map((element, idx) => {
                  return `<td >{element}</td> `;
                })}
              </tr>
            </tbody>
          </table>
        </div>
        `;
  })}
  `;
  document.getElementById("pricingContainer").innerHTML = tableData;
  reRenderLang();
}

function fillOffersData(data) {
  const offersData = `
  ${data?.map((offer, idx) => {
    return `
    <div class="offerContainer">
      <div class="offerTitle">
        <span class="ArLang">${offer?.offerNameArabic}</span>
        <span class="EnLang">${offer?.offerNameEnglish}</span>
      </div>
      <div class="offerDescription">
        <span class="ArLang">${offer?.offerDescriptionArabic}</span>
        <span class="EnLang">${offer?.offerDescriptionEnglish}</span>
      </div>
    </div>
    `;
  })}
  `;
  document.getElementById("offersContainer").innerHTML = offersData;
  reRenderLang();
}

/////////////////////////////////////////////////////////////////////////////////////////
function fillFinalData(contractTotalData) {
  // fetch unitDetails data
  const finalData = JSON.parse(localStorage.getItem("finalData"));
  console.log(finalData);
}

// let lastData = {
//   areaUnitContractID: 0,
//   areaUnitContractCode: "0",
//   areaUnitContractNumber: "0",
//   areaUnitContractDate: new Date().toISOString(),
//   areaUnitContractDateTime: new Date().toISOString(),
//   areaUnitContractState: 0,
//   areaUnitContractType: "0",
//   areaUnitCode: unitId,
//   areaUnitPrice: Number(unitDetails?.areaUnitPrice),
//   areaUnitServiceFee: Number(unitDetails?.areaUnitServiceFee),
//   areaUnitTaxValue: unitDetails?.taxValue,
//   areaUnitSectionPercentValue: unitDetails?.sectionValue,
//   areaUnitWebSitePercentValue: unitDetails?.websiteValue,
//   areaUnitTotalPrice: totalCost?.total,
//   checkInDate: startDate?.toISOString(),
//   checkOutDate: endDate?.toISOString(),
//   nightsCount: totalNights,
//   nightPrice: Number(unitDetails?.areaUnitPrice),
//   totalPrice: totalCost?.total,
//   contractInsurance: Number(unitDetails?.areaUnitInsurance),
//   waletStus: "0",
//   createUserName: "",
//   craeteUserDate: new Date().toISOString(),
//   updateUserName: "",
//   updateUserDate: new Date().toISOString(),
//   renterMobile: currentPhoneNumber,
//   renterCountryCode: `+${countryCode}`,
//   verificationCode: verificationCode,
//   renterIDNo: renterInfo.areaUnitContract.renterIDNo,
//   renterName: renterInfo.areaUnitContract.renterName,
//   renterNationalityCode: renterInfo.areaUnitContract.renterNationalityCode,
//   areaUnitContractEscort: [],
//   areaUnitContractCar: [],
// };

// const options = { year: 'numeric', month: 'numeric', day: 'numeric' };
// const formatter = new Intl.DateTimeFormat('en', options);
// const dateParts = formatter.formatToParts(new Date());

// console.log(dateParts)

// const options = { year: 'numeric', month: 'numeric', day: 'numeric' };
// const formatter = new Intl.DateTimeFormat('fr-FR', options);
// const formattedDate = formatter.format(new Date());
// console.log(formattedDate);

function selectRate(star) {
  const rating = star.dataset.rating;
  const stars = document.querySelectorAll(".fa-star");

  stars.forEach((s) => {
    s.classList.add("fa-regular");
    s.classList.remove("fa-solid");
  });
  stars.forEach((s) => {
    if (s.dataset.rating <= rating) {
      s.classList.add("fa-solid");
      s.classList.remove("fa-regular");
    }
  });

  console.log(rating);
}

const final = {
  arrivedDate: startDate,
  leavedDate: new Date(endDate),
};
console.log(startDate )
localStorage.setItem("hmada ", JSON.stringify(final));
