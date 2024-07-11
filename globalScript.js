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
            <li><a href="#specialUnits"> وحدات مميزة </a></li>
            <li><a href="#offers"> العروض </a></li>
            <li><a href="#whoAreWe"> من نحن </a></li>
            <li><a href="#contactUs"> تواصل معنا </a></li>
          </ul>
        </div>
        <div class="buttons">
          <button class="mainButton gold-color">تسجيل الدخول</button>
          <button class="mainButton transparent-color">اضف عقارك</button>
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
            <li onclick="handelOpenLinksList()"><a href="#specialUnits"> وحدات مميزة </a></li>
            <li onclick="handelOpenLinksList()"><a href="#offers"> العروض </a></li>
            <li onclick="handelOpenLinksList()"><a href="#whoAreWe"> من نحن </a></li>
            <li onclick="handelOpenLinksList()"><a href="#contactUs"> تواصل معنا </a></li>
        </ul>
      </div>
      <div class="buttons">
        <button class="mainButton gold-color">تسجيل الدخول</button>
        <button class="mainButton transparent-color">اضف عقارك</button>
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
                    src="https://purecatamphetamine.github.io/country-flag-icons/3x2/SA.svg"
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
                    src="https://purecatamphetamine.github.io/country-flag-icons/3x2/SA.svg"
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
const getLang = () => {
  const storedLang = localStorage.getItem(localStorageKey);
  return storedLang ?? "rtl";
};

const setLang = (lang) => {
  localStorage.setItem(localStorageKey, lang);
  body.setAttribute("dir", lang);
  if (lang === "rtl") {
    toggleLang.textContent = "EN";
    toggleLangMinScreen.textContent = "EN";
  } else {
    toggleLang.textContent = "AR";
    toggleLangMinScreen.textContent = "AR";
  }
};

const initialLang = getLang();
setLang(initialLang);

const switchLanguage = () => {
  const currentLang = getLang();
  const newLang = currentLang === "ltr" ? "rtl" : "ltr";
  setLang(newLang);
  ////////////// reset slider dir /////////////////
  const sliderContainers = document.querySelectorAll(".slideContainer");
  if (newLang === "ltr") {
    sliderContainers.forEach((slider) => slider.classList.add("leftDir"));
    sliderContainers.forEach((slider) => slider.classList.remove("rightDir"));
  } else {
    sliderContainers.forEach((slider) => slider.classList.add("rightDir"));
    sliderContainers.forEach((slider) => slider.classList.remove("leftDir"));
  }
  window.location.reload();
  //////////////end reset slider dir /////////////////
};

//////////////////////////// handel open side nav ////////////////////////////////////

const handelOpenLinksList = (eI) => {
  document.querySelector(".NavBarMinScreen").classList.toggle("openSideBar");
  document.getElementById("nav-icon1").classList.toggle("open");
};

//////////////////////////// handel copy on click ////////////////////////////////////
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
      });
    } catch (err) {
      console.error("Failed to copy text:", err);
    }
    document.body.removeChild(tempInput);
  });
});
