let isUser = localStorage.getItem("isUser");
if (isUser == "false") {
  window.location.href = "/";
}
const userPhoneNumber = JSON.parse(localStorage.getItem("userPhoneNumber"));

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

const input2 = document.querySelector("#phone2");
window.intlTelInput(input2, {
  utilsScript:
    "https://cdn.jsdelivr.net/npm/intl-tel-input@23.8.0/build/js/utils.js",
});

const country = document.querySelectorAll(".iti__country");
input2.value = "";

country.forEach((item) => {
  item.addEventListener("click", () => {
    input2.value = "";
    console.log(input2.getAttribute("countryCode"));

    input2.setAttribute(
      "countryCode",
      item.querySelector(".iti__dial-code").innerText
    );
    console.log(input2.getAttribute("countryCode"));
    console.log(item.querySelector(".iti__dial-code").innerText);
  });
});
const iti = window.intlTelInput(input, {
  utilsScript:
    "https://cdn.jsdelivr.net/npm/intl-tel-input@23.8.0/build/js/utils.js",
});
const countyCode = JSON.parse(
  localStorage.getItem("userPhoneNumber")
).countryCode;

input.value =
  countyCode +
  "" +
  JSON.parse(localStorage.getItem("userPhoneNumber")).phoneNumber;

input.setAttribute("countryCode", countyCode);

country.forEach((item) => {
  if (item.querySelector(".iti__dial-code").innerText == countyCode) {
    const countryName = item.getAttribute("data-country-code");
    iti.setCountry(countryName);
  }
});

const dataSectionsContainer = document.getElementById("dataSectionsContainer");
const companionsInformation = document.getElementById("companionsInformation");
const companionsInfoCounter = document.getElementById("companionsInfoCounter");
const companionsInfoMinCount = document.getElementById(
  "companionsInfoMinCount"
);

function addNewCompanionsInfoSection() {
  dataSectionsContainer.querySelector(
    ".notFound"
  ).style.cssText = `display: none;`;
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
                  <input type="text" class="inputVal" inputName="Name" />
                  <span class="errorMessage"></span>
                </div>
                <div class="inputContainer">
                <label for="" class="ArLang"> رقم الهوية للمستأجر</label>
                <label for="" class="EnLang"> Tenant's ID</label>
                <input
                  type="number"
                  class="inputVal "
                  inputName="IdNumber"
                  onkeyup="checkIsSaudian(this)"
                  
                />
                <span class="errorMessage"></span>
              </div>
                <div class="inputContainer">
                  <label for="" class="ArLang">صله القرابة </label>
                  <label for="" class="EnLang"> Kinship</label>
                  <input type="text" class="valueInput " />
                  <input type="text" class="emptyInput inputVal" inputName="dropDown" />
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
                  <span class="errorMessage"></span>
                </div>
                <div class="inputContainer nationalityInput">
                  <label for="" class="ArLang">جنسية المرافق </label>
                  <label for="" class="EnLang"> Escort's Nationality</label>
                <input type="text" class="valueInput" />
                <input
                  type="text"
                  class="emptyInput inputVal "
                  inputName="dropDown"
                />
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
                  <span class="errorMessage"></span>
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
  console.log(minCount);
  if (minCount > 0) {
    dataSectionsContainer.removeChild(dataSection);
    companionsInfoCounter.setAttribute("minCount", `${minCount - 1}`);
    companionsInfoMinCount.innerText = minCount - 1;
  }
  if (minCount == "1") {
    dataSectionsContainer.querySelector(
      ".notFound"
    ).style.cssText = `display: inline-block;`;
    reRenderLang();
  }
}

const carDataSectionsContainer = document.getElementById(
  "carDataSectionsContainer"
);
const carData = document.getElementById("carData");
const carDataCounter = document.getElementById("carDataCounter");
const carDataMinCount = document.getElementById("carDataMinCount");

function addNewCarDataSection() {
  carDataSectionsContainer.querySelector(
    ".notFound"
  ).style.cssText = `display: none;`;
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
                  <input type="text" class="inputVal" inputName="CarType" />
                  <span class="errorMessage"></span>
                </div>
                <div class="inputContainer">
                  <label for="" class="ArLang">رقم لوحة السيارة </label>
                  <label for="" class="EnLang">ID Nunmber </label>
                  <input type="text"  class="inputVal" inputName="CarNumber" />
                  <span class="errorMessage"></span>
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
  if (minCount == "1") {
    carDataSectionsContainer.querySelector(
      ".notFound"
    ).style.cssText = `display: inline-block;`;
    reRenderLang();
  }
}

let companionData = {
  unitBookingDate: {
    arrivedDate: "",
    leavedDate: "",
  },
  tenantData: {
    phone: userPhoneNumber.phoneNumber,
    countryCode: userPhoneNumber.countryCode,
    id: "",
    name: "",
    nationality: "",
  },
  companionsInformation: [],
  carData: [],
  sendToOtherPhone: {
    phone: "",
    countryCode: "",
  },
};

let isAllInputsValid = true;

function inputsValidationsSchema() {
  const dropDownInputs = document.querySelectorAll('[inputName="dropDown"]');
  const idNumberInputs = document.querySelectorAll('[inputName="IdNumber"]');
  const nameInputs = document.querySelectorAll('[inputName="Name"]');
  const carNumberInputs = document.querySelectorAll('[inputName="CarNumber"]');
  const carTypeInputs = document.querySelectorAll('[inputName="CarType"]');

  isAllInputsValid = true;

  dropDownInputs.forEach((input) => {
    console.log(input.value);

    const selectBtn = input
      .closest(".inputContainer")
      .querySelector(".select-btn");

    if (input.value == "") {
      isAllInputsValid = false;
      selectBtn.classList.add("errorInput");
      selectBtn
        .closest(".inputContainer")
        .querySelector(".errorMessage").innerHTML = `
        <span class="ArLang">الحقل مطلوب</span>
                <span class="EnLang">field is required</span>
        `;
      reRenderLang();
    } else {
      selectBtn.classList.remove("errorInput");
      selectBtn
        .closest(".inputContainer")
        .querySelector(".errorMessage").innerHTML = ``;
    }
  });

  idNumberInputs.forEach((input) => {
    if (input.value == "") {
      isAllInputsValid = false;
      input.classList.add("errorInput");
      input
        .closest(".inputContainer")
        .querySelector(".errorMessage").innerHTML = `
        <span class="ArLang">الحقل مطلوب</span>
        <span class="EnLang">field is required</span>
    `;
      reRenderLang();
    } else if (input.value.length < 10 || input.value.length > 10) {
      isAllInputsValid = false;
      input.classList.add("errorInput");
      input
        .closest(".inputContainer")
        .querySelector(".errorMessage").innerHTML = `
        <span class="ArLang">يجب ان يكون مكون من 10 ارقام</span>
                <span class="EnLang">must be build from 10 degit </span>
        `;
      reRenderLang();
    } else {
      input.classList.remove("errorInput");
      input
        .closest(".inputContainer")
        .querySelector(".errorMessage").innerHTML = ``;
    }
  });

  nameInputs.forEach((input) => {
    if (input.value == "") {
      isAllInputsValid = false;
      input.classList.add("errorInput");
      input
        .closest(".inputContainer")
        .querySelector(".errorMessage").innerHTML = `
        <span class="ArLang">الحقل مطلوب</span>
        <span class="EnLang">field is required</span>
    `;
      reRenderLang();
    } else if (input.value.length < 2 || input.value.length > 50) {
      isAllInputsValid = false;
      input.classList.add("errorInput");
      input
        .closest(".inputContainer")
        .querySelector(".errorMessage").innerHTML = `
        <span class="ArLang">يجب ان يكون عدد الاحرف اكثر من 2 واقل من 50 </span>
                <span class="EnLang">must be build from 10 degit </span>
        `;
      reRenderLang();
    } else {
      input.classList.remove("errorInput");
      input
        .closest(".inputContainer")
        .querySelector(".errorMessage").innerHTML = ``;
    }
  });

  carNumberInputs.forEach((input) => {
    if (input.value == "") {
      isAllInputsValid = false;
      input.classList.add("errorInput");
      input
        .closest(".inputContainer")
        .querySelector(".errorMessage").innerHTML = `
        <span class="ArLang">الحقل مطلوب</span>
        <span class="EnLang">field is required</span>
    `;
      reRenderLang();
    } else if (input.value.length < 2 || input.value.length > 50) {
      isAllInputsValid = false;
      input.classList.add("errorInput");
      input
        .closest(".inputContainer")
        .querySelector(".errorMessage").innerHTML = `
        <span class="ArLang">يجب ان يكون عدد الاحرف اكثر من 2 واقل من 50 </span>
                <span class="EnLang">must be build from 10 degit </span>
        `;
      reRenderLang();
    } else {
      input.classList.remove("errorInput");
      input
        .closest(".inputContainer")
        .querySelector(".errorMessage").innerHTML = ``;
    }
  });

  carTypeInputs.forEach((input) => {
    if (input.value == "") {
      isAllInputsValid = false;
      input.classList.add("errorInput");
      input
        .closest(".inputContainer")
        .querySelector(".errorMessage").innerHTML = `
        <span class="ArLang">الحقل مطلوب</span>
        <span class="EnLang">field is required</span>
    `;
      reRenderLang();
    } else if (input.value.length < 2 || input.value.length > 50) {
      isAllInputsValid = false;
      input.classList.add("errorInput");
      input
        .closest(".inputContainer")
        .querySelector(".errorMessage").innerHTML = `
        <span class="ArLang">يجب ان يكون عدد الاحرف اكثر من 2 واقل من 50 </span>
                <span class="EnLang">must be build from 10 degit </span>
        `;
      reRenderLang();
    } else {
      input.classList.remove("errorInput");
      input
        .closest(".inputContainer")
        .querySelector(".errorMessage").innerHTML = ``;
    }
  });
}

function fillCompanionData() {
  ///////////////////////////////////////////////// inputsتاكد من صالحية ال  ///////////////////////////////////////

  inputsValidationsSchema();

  ///////////////////////////////////////////////// button  تغير حالة  ///////////////////////////////////////

  const confirmButton = document.querySelector(".confirmButton button");
  confirmButton.disabled = true;
  confirmButton.querySelector("i").style.display = "block";
  confirmButton
    .querySelectorAll("span")
    .forEach((span) => (span.style.display = "none"));

  ///////////////////////////////////////////////// صالحة inputs  اذا كان كل  ///////////////////////////////////////
  const finalData = JSON.parse(localStorage.getItem("finalData"));

  if (isAllInputsValid) {
    ///////////////////////////////////////////////// data جمع ال ///////////////////////////////////////

    const tenantData = document.querySelectorAll("#tenantData .inputVal");
    finalData.renterMobile = userPhoneNumber.phoneNumber;
    finalData.renterCountryCode = userPhoneNumber.countryCode;
    finalData.renterIDNo = tenantData[0].value;
    finalData.renterName = tenantData[1].value;
    finalData.renterNationalityCode = tenantData[2].value;

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
      finalData.areaUnitContractEscort.push(data);
    });
    carData.forEach((section) => {
      let inputs = section.querySelectorAll(".inputVal");
      let data = {
        carType: inputs[0].value,
        carId: inputs[1].value,
      };
      finalData.areaUnitContractCar.push(data);
    });
    if (checkIfUserConfirm()) {
      const phone = document.querySelector("#phone").value;
      const countryCode = input2.getAttribute("countryCode");
      companionData.sendToOtherPhone.phone = phone;
      companionData.sendToOtherPhone.countryCode =
        countryCode == "" ? "+966" : countryCode;
    }

    // send data to server or database
    //...
    ////////////////////////////// if response successfuly //////////////////////////
    // companionData = {
    //   unitBookingDate: {
    //     arrivedDate: "",
    //     leavedDate: "",
    //   },
    //   tenantData: {
    //     phone: "",
    //     id: "",
    //     name: "",
    //     nationality: "",
    //   },
    //   companionsInformation: [],
    //   carData: [],
    // };

    setTimeout(() => {
      let inputs = document.querySelectorAll(".inputVal");
      let selectBtn = document.querySelectorAll(".select-btn span");
      inputs.forEach((input) => {
        input.value = "";
      });
      selectBtn.forEach((btn) => {
        btn.innerText = "";
      });
      Swal.fire({
        icon: "success",
        title: "success",
        text: "Something went success",
        iconColor: "#a99571",
        allowOutsideClick: false,
      }).then((result) => {
        if (result.isConfirmed) {
          localStorage.setItem("isUser", "false");
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
    ////////////////////////////// if response is not successfuly //////////////////////////
    // setTimeout(() => {
    //   Swal.fire({
    //     icon: "error",
    //     title: "error",
    //     text: "Something went error",
    //     iconColor: "#a99571",
    //   }).then((result) => {
    //     // if (result.isConfirmed) {
    //     //   localStorage.setItem("isUser", "false");
    //     //   window.location.href = "/";
    //     // }
    //   });
    //   confirmButton.querySelector("i").style.display = "none";
    //   confirmButton
    //     .querySelectorAll("span")
    //     .forEach((span) => (span.style.display = "block"));
    //   reRenderLang();
    //   confirmButton.disabled = false;
    // }, 3000);
  } else {
    setTimeout(() => {
      confirmButton.querySelector("i").style.display = "none";
      confirmButton
        .querySelectorAll("span")
        .forEach((span) => (span.style.display = "block"));
      reRenderLang();
      confirmButton.disabled = false;
      Swal.fire({
        icon: "error",
        title: "error",
        text: "Something went error",
        iconColor: "#a99571",
      }).then((result) => {
        // if (result.isConfirmed) {
        //   localStorage.setItem("isUser", "false");
        //   window.location.href = "/";
        // }
      });
    }, 100);
  }

  console.log(companionData);

  ////////////////////////////// if response successfuly //////////////////////////
}

function checkIfUserConfirm() {
  const input = document.getElementById("confirmSectionCheckbox");
  if (input.checked) {
    return true;
  } else {
    return false;
  }
}

function checkIsSaudian(input) {
  console.log(input);

  const parent = input.closest(".dataSection");
  console.log(parent);

  const inputText = parent.querySelector(".nationalityInput .select-btn span");
  const inputValue = parent.querySelector(".nationalityInput .inputVal");
  console.log(inputValue.value);
  if (input.value.length == "1" && input.value == "1") {
    if (localStorage.getItem("lang") == "rtl") {
      inputText.innerText = "سعودي";
      inputValue.value = "8239";
    } else {
      inputText.innerText = "saudian";
      inputValue.value = "8239";
    }
  }
  console.log(inputValue.value);
}

function fillPageData(data) {
  const tenantData = document.querySelectorAll("#tenantData .inputVal");
  const parent = tenantData[2].closest(".dataSection");
  const inputText = parent.querySelector(".nationalityInput .select-btn span");

  // tenantData[0].value = data.tenantData.id;
  tenantData[1].value = data.tenantData.name;
  tenantData[2].value = data.tenantData.nationality;
  inputText = data.tenantData.nationality;

  /////////////////////////////////////////////////////////////////////////////////////////

  if (data.carData.length > 0) {
    data.carData.forEach((item) => {
      const companionsInfoSection = `
                     <div class="inputContainer">
                      <label for="" class="ArLang"> نوع السيارة</label>
                      <label for="" class="EnLang">Car Type</label>
                      <input type="text" class="inputVal" inputName="CarType" />
                      <span class="errorMessage"></span>
                    </div>
                    <div class="inputContainer">
                      <label for="" class="ArLang">رقم لوحة السيارة </label>
                      <label for="" class="EnLang">ID Nunmber </label>
                      <input type="text"  class="inputVal" inputName="CarNumber" />
                      <span class="errorMessage"></span>
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

      carDataSectionsContainer.appendChild(newDiv);
    });
    carDataSectionsContainer.querySelector(
      ".notFound"
    ).style.cssText = `display: none;`;
    document
      .getElementById("carDataCounter")
      .setAttribute("maxCount", `${unitData.maxLingth}`);

    document
      .getElementById("carDataCounter")
      .setAttribute("minCount", `${data.carData.length}`);
  }

  ////////////////////////////////////////////////////////////////////////////////////////////

  if (data.companionData.length > 0) {
    data.companionsInfoData.forEach((item) => {
      const companionsInfoSection = `
              <div class="inputContainer">
                    <label for="" class="ArLang">الاسم </label>
                    <label for="" class="EnLang"> Name</label>
                    <input type="text" class="inputVal" inputName="Name" />
                    <span class="errorMessage"></span>
                  </div>
                  <div class="inputContainer">
                    <label for="" class="ArLang" >رقم الهوية </label>
                    <label for="" class="EnLang"> ID Nunmber</label>
                    <input type="number" class="inputVal"  inputName="IdNumber" onchange="checkisSaudian(this)"/>
                    <span class="errorMessage"></span>
                  </div>
                  <div class="inputContainer">
                    <label for="" class="ArLang">صله القرابة </label>
                    <label for="" class="EnLang"> Kinship</label>
                    <input type="text" class="valueInput " />
                    <input type="text" class="emptyInput inputVal" inputName="dropDown" />
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
                        </ul>
                      </div>
                    </div>
                    <span class="errorMessage"></span>
                  </div>
                  <div class="inputContainer nationalityInput">
                    <label for="" class="ArLang">جنسية المرافق </label>
                    <label for="" class="EnLang"> Escort's Nationality</label>
                    <input type="text" class="valueInput " />
                    <input type="text" class="emptyInput inputVal" inputName="dropDown" />
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
                    
                        </ul>
                      </div>
                    </div>
                    <span class="errorMessage"></span>
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
      dataSectionsContainer.appendChild(newDiv);
    });

    dataSectionsContainer.querySelector(
      ".notFound"
    ).style.cssText = `display: none;`;

    document
      .getElementById("companionsInfoCounter")
      .setAttribute("maxCount", `${unitData.maxLingth}`);

    document
      .getElementById("companionsInfoCounter")
      .setAttribute("minCount", `${data.carData.length}`);
  }

  reRenderDropdown();
  reRenderLang();
  resetValues();
}

function checkIsFormerClient(input) {
  if (input.value.length == "10") {
    console.log("hello");
  }
}
