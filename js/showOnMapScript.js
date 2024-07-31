let unitsData = JSON.parse(localStorage.getItem("cardsShownInMap"));

let defaultLat = unitsData[0].lat;
let defaultLon = unitsData[0].lon;

let map = L.map("map", {
  zoomSnap: 2,
}).setView([defaultLat, defaultLon], 13);

L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
  attribution:
    '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
}).addTo(map);
setTimeout(() => {
  map.invalidateSize();
}, 2000);

let unitSideContainer = document.querySelector(".unitSideContainer ");
let unitContainer = document.querySelector(".unitsSide");
let cartona = "";
for (let i = 0; i < unitsData.length; i++) {
  let card = `<div class="unit" id="${unitsData[i].id}">
            <img
              src="./images/1.jpg"
              alt="صورة الوحدة 1"
            />
           <div class="info">
           <h3>${unitsData[i].name}</h3>
           <p>سعر الوحدة ${unitsData[i].price}$</p>
             <a href="">اذهب الي الوحدة <i class="fa-solid fa-arrow-up-right-from-square"></i> </a>
           </div>
          </div>`;
  cartona += card;
}

unitContainer.innerHTML = cartona;

unitsData.forEach(function (unit) {
  let marker = L.marker([unit.lat, unit.lon]).addTo(map);
  marker.bindPopup("<h3>" + unit.name + "</h3>");
  marker.addEventListener("click", (ei) => {
    // ei.target._icon.setAttribute("src", "../images/marker-icon-red.png");
    let uni = document.getElementById(unit.id);
    unitContainer.scrollTo(0, uni.offsetTop - uni.offsetHeight - 20);
    unitSideContainer.scrollTo(uni.offsetLeft - uni.offsetWidth + 185, 0);

    uni.classList.add("focus");
    let units = document.querySelectorAll(".unit");
    for (let i = 0; i < units.length; i++) {
      if (units[i].classList.contains("focus") && units[i] !== uni) {
        units[i].classList.remove("focus");
      }
    }
  });
  document.getElementById(unit.id).addEventListener("click", function () {
    map.panTo([unit.lat, unit.lon], 13);
  });
});

let markerIcon = document.querySelectorAll("img.leaflet-marker-icon");
markerIcon.forEach((mark) =>
  mark.setAttribute("src", "../images/marker-icon.png")
);

let units = document.querySelectorAll(".unit");
units.forEach((uni, index) => {
  uni.addEventListener("click", () => {
    markerIcon[index].setAttribute("src", "../images/marker-icon-red.png");
    uni.classList.add("focus");
    for (let i = 0; i < units.length; i++) {
      if (units[i].classList.contains("focus") && units[i] !== uni) {
        units[i].classList.remove("focus");
      }
      if (
        markerIcon[i].getAttribute("src") === "../images/marker-icon-red.png" &&
        markerIcon[i] !== markerIcon[index]
      ) {
        markerIcon[i].setAttribute("src", "../images/marker-icon.png");
      }
    }
  });
});
