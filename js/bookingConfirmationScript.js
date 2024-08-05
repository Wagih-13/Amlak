allCountries = [];
async function setCountries() {
  await fetch("https://restcountries.com/v3.1/all")
    .then((response) => response.json())
    .then((data) => {
      const countryNames = data.map((country) => country.name.common);

      allCountries = countryNames;
    });

  const optionsContainer = document.querySelectorAll(
    ".inputContainer .options.nationality"
  );

  optionsContainer.forEach((option) => {
    option.innerHTML = `${allCountries
      .map((country) => {
        return `<li onclick="searchUnitUpdateName(this)" optionCode="">${country}</li> `;
      })
      .join("")}`;
  });
}
setCountries();

const input = document.querySelector("#phone");

window.intlTelInput(input, {
  utilsScript:
    "https://cdn.jsdelivr.net/npm/intl-tel-input@23.8.0/build/js/utils.js",
});
const country = document.querySelectorAll(".iti__country ");
const input2 = document.querySelector("#phone2");
window.intlTelInput(input2, {
  utilsScript:
    "https://cdn.jsdelivr.net/npm/intl-tel-input@23.8.0/build/js/utils.js",
});

country.forEach((item) => {
  item.addEventListener("click", () => {
    input2.value = item.querySelector(".iti__dial-code").innerText;
  });
});

input.value = localStorage.getItem("userPhoneNumber");

const dataSectionsContainer = document.getElementById("dataSectionsContainer");
const companionsInformation = document.getElementById("companionsInformation");
const companionsInfoCounter = document.getElementById("companionsInfoCounter");
const companionsInfoMinCount = document.getElementById(
  "companionsInfoMinCount"
);

function addNewCompanionsInfoSection() {
  const maxCount = Number(
    document.getElementById("companionsInfoCounter").getAttribute("maxCount")
  );
  const minCount = Number(
    document.getElementById("companionsInfoCounter").getAttribute("minCount")
  );
  const companionsInfoSection = `
            <div class="inputContainer">
                  <label for="" class="ArLang">الاسم </label>
                  <label for="" class="EnLang"> Name</label>
                  <input type="text" class="inputVal" />
                </div>
                <div class="inputContainer">
                  <label for="" class="ArLang">رقم الهوية </label>
                  <label for="" class="EnLang"> ID Nunmber</label>
                  <input type="text" class="inputVal"  />
                </div>
                <div class="inputContainer">
                  <label for="" class="ArLang">صله القرابة </label>
                  <label for="" class="EnLang"> Kinship</label>
                  <input type="text" class="valueInput " />
                  <input type="text" class="emptyInput inputVal" />
                  <div class="wrapper">
                    <div class="select-btn">
                      <span> </span>
                      <i class="fa-solid fa-angle-down"></i>
                    </div>
                    <div class="content">
                      <div class="search">
                        <input
                          spellcheck="false"
                          type="text"
                          placeholder="Search"
                        />
                      </div>
                      <ul class="options">
                          <li
                          onclick="searchUnitUpdateName(this)"
                          optionCode="2822"
                        >
                          زوج/زوجة
                        </li>
                        <li
                          onclick="searchUnitUpdateName(this)"
                          optionCode="2822"
                        >
                          ابن/بنت
                        </li>
                        <li
                          onclick="searchUnitUpdateName(this)"
                          optionCode="2822"
                        >
                        والد/والدة
                        </li>
                        <li
                          onclick="searchUnitUpdateName(this)"
                          optionCode="2822"
                        >
                        اخ/اخت
                        </li>
                        <li
                          onclick="searchUnitUpdateName(this)"
                          optionCode="2822"
                        >
                          اخرى
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
                <div class="inputContainer">
                  <label for="" class="ArLang">جنسية المرافق </label>
                  <label for="" class="EnLang"> Escort's Nationality</label>
                  <input type="text" class="valueInput " />
                  <input type="text" class="emptyInput inputVal" />
                  <div class="wrapper">
                    <div class="select-btn">
                      <span> </span>
                      <i class="fa-solid fa-angle-down"></i>
                    </div>
                    <div class="content">
                      <div class="search">
                        <input
                          spellcheck="false"
                          type="text"
                          placeholder="Search"
                        />
                      </div>
                      <ul class="options">
                         ${allCountries.map((country) => {
                           return `<li onclick="searchUnitUpdateName(this)" optionCode="">${country}</li> `;
                         })}
                      </ul>
                    </div>
                  </div>
                </div>
                <div class="delete">
                  <button onclick="removeSection(this)">
                    <span class="ArLang">حذف</span
                    ><span class="EnLang">delet</span>
                  </button>
                </div>
 
  `;
  const newDiv = document.createElement("div");
  newDiv.className = "dataSection";
  newDiv.innerHTML = companionsInfoSection;

  if (minCount < maxCount) {
    companionsInfoCounter.setAttribute("minCount", `${minCount + 1}`);
    companionsInfoMinCount.innerText = minCount + 1;
    dataSectionsContainer.appendChild(newDiv);
  }
  reRenderDropdown();
  reRenderLang();
  resetValues();
}

function removeSection(section) {
  let dataSectionsContainer = document.getElementById("dataSectionsContainer");
  const dataSection = section.closest(".dataSection ");
  const minCount = Number(
    document.getElementById("companionsInfoCounter").getAttribute("minCount")
  );
  if (minCount > 0) {
    dataSectionsContainer.removeChild(dataSection);
    companionsInfoCounter.setAttribute("minCount", `${minCount - 1}`);
    companionsInfoMinCount.innerText = minCount - 1;
  }
}

const carDataSectionsContainer = document.getElementById(
  "carDataSectionsContainer"
);
const carData = document.getElementById("carData");
const carDataCounter = document.getElementById("carDataCounter");
const carDataMinCount = document.getElementById("carDataMinCount");

function addNewCarDataSection() {
  const maxCount = Number(
    document.getElementById("carDataCounter").getAttribute("maxCount")
  );
  const minCount = Number(
    document.getElementById("carDataCounter").getAttribute("minCount")
  );
  const companionsInfoSection = `
                 <div class="inputContainer">
                  <label for="" class="ArLang"> نوع السيارة</label>
                  <label for="" class="EnLang">Car Type</label>
                  <input type="text" class="inputVal"  />
                </div>
                <div class="inputContainer">
                  <label for="" class="ArLang">رقم لوحة السيارة </label>
                  <label for="" class="EnLang">ID Nunmber </label>
                  <input type="text"  class="inputVal" />
                </div>
                <div class="delete">
                  <button onclick="removeCarSection(this)">
                    <span class="ArLang">حذف</span
                    ><span class="EnLang">delet</span>
                  </button>
                </div>
   
    `;
  const newDiv = document.createElement("div");
  newDiv.className = "dataSection";
  newDiv.innerHTML = companionsInfoSection;

  if (minCount < maxCount) {
    carDataCounter.setAttribute("minCount", `${minCount + 1}`);
    carDataMinCount.innerText = minCount + 1;
    carDataSectionsContainer.appendChild(newDiv);
  }
  reRenderLang();
  resetValues();
}

function removeCarSection(section) {
  let carDataSectionsContainer = document.getElementById(
    "carDataSectionsContainer"
  );
  const dataSection = section.closest(".dataSection ");
  const minCount = Number(
    document.getElementById("carDataCounter").getAttribute("minCount")
  );
  if (minCount > 0) {
    carDataSectionsContainer.removeChild(dataSection);
    carDataCounter.setAttribute("minCount", `${minCount - 1}`);
    carDataMinCount.innerText = minCount - 1;
  }
}

let companionData = {
  unitBookingDate: {
    arrivedDate: "",
    leavedDate: "",
  },
  tenantData: {
    phone: "",
    id: "",
    name: "",
    nationality: "",
  },
  companionsInformation: [],
  carData: [],
};

function fillCompanionData() {
  const tenantData = document.querySelectorAll("#tenantData .inputVal");
  let phoneInpVal = document.getElementById("phone");
  companionData.tenantData.phone = phoneInpVal.value;
  companionData.tenantData.id = tenantData[0].value;
  companionData.tenantData.name = tenantData[1].value;
  companionData.tenantData.nationality = tenantData[2].value.trim();

  const companionsInformation = document.querySelectorAll(
    "#companionsInformation .dataSection"
  );
  const carData = document.querySelectorAll("#carData .dataSection");

  companionsInformation.forEach((section) => {
    let inputs = section.querySelectorAll(".inputVal");
    let data = {
      name: inputs[0].value,
      id: inputs[1].value,
      kinship: inputs[2].value.trim(),
      escortsNationality: inputs[3].value.trim(),
    };
    companionData.companionsInformation.push(data);
  });
  carData.forEach((section) => {
    let inputs = section.querySelectorAll(".inputVal");
    let data = {
      carType: inputs[0].value,
      carId: inputs[1].value,
    };
    companionData.carData.push(data);
  });
  console.log(companionData);
  const confirmButton = document.querySelector(".confirmButton button");
  confirmButton.disabled = true;
  confirmButton.querySelector("i").style.display = "block";
  confirmButton
    .querySelectorAll("span")
    .forEach((span) => (span.style.display = "none"));

  setTimeout(() => {
    companionData = {
      unitBookingDate: {
        arrivedDate: "",
        leavedDate: "",
      },
      tenantData: {
        phone: "",
        id: "",
        name: "",
        nationality: "",
      },
      companionsInformation: [],
      carData: [],
    };
    let inputs = document.querySelectorAll(".inputVal");
    let selectBtn = document.querySelectorAll(".select-btn span");
    inputs.forEach((input) => {
      input.value = "";
    });
    selectBtn.forEach((btn) => {
      btn.innerText = "";
    });
    ////////////////////////////// if response successfuly //////////////////////////

    Swal.fire({
      icon: "success",
      title: "success",
      text: "Something went success",
      iconColor: "#a99571",
    }).then((result) => {
      if (result.isConfirmed) {
        window.location.href = "/";
      }
    });
    confirmButton.querySelector("i").style.display = "none";
    confirmButton
      .querySelectorAll("span")
      .forEach((span) => (span.style.display = "block"));
    reRenderLang();
    confirmButton.disabled = false;
  }, 3000);
}



// Swal.fire({
//   icon: "success",
//   title: "نجاح العملية",
//   text: "تم تنفيذ العملية بنجاح",
//   iconColor: "#a99571",
//   showCancelButton: true,
//   confirmButtonText: 'موافق',
//   cancelButtonText: 'إلغاء',
// }).then((result) => {
//   if (result.isConfirmed) {
//     // إذا قام المستخدم بالنقر على زر "موافق"
//     window.location.href = "صفحة_الوجهة.html"; // استبدل "صفحة_الوجهة.html" باسم الصفحة التي تريد التوجه إليها
//   }
// });
