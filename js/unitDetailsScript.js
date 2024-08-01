let defaultLat = 31.32;
let defaultLon = 31.51;

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

function removeReservedSelected(event) {
  countOfClick = 0;
  document.querySelectorAll(".days>div").forEach((divDay) => {
    divDay.classList.remove("arrived-selected");
    divDay.classList.remove("leaved-selected");
    divDay.classList.remove("day-selected");
  });
  setArrivedDate = "";
  setLeavedDate = "";
}

function fillConfirmDate(button) {
  console.log("fillConfirmDate");
}
function removeVal() {
  const expensesContainer = document.querySelector(
    `.unitDetails .calenderSide .bookingDetails .expenses`
  );
  $(expensesContainer).slideUp();
  const confirmBooking = document.querySelector(`.unitDetails .confirmBooking`);
  $(confirmBooking).fadeOut();
}
function showContainer() {
  const expensesContainer = document.querySelector(
    `.unitDetails .calenderSide .bookingDetails .expenses`
  );
  const confirmBooking = document.querySelector(`.unitDetails .confirmBooking`);
  $(expensesContainer).slideDown();
  $(confirmBooking).fadeIn();
  const section = document.getElementById("bookingDetails");
  section.scrollIntoView({ behavior: "smooth" });
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
    console.log("hiii");
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
    console.log("hiii");
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
}

function openLcationSection() {
  const section = document.getElementById("activeSectionContainer");
  section.scrollIntoView({ behavior: "smooth" });
  swichSction(infoLinksList[2]);
}
