let date = new Date();
let currentDateServer;

let setArrivedDate = "";
let setLeavedDate = "";
let countOfClick = 0;
let currentMonthIndex = 0;
//let priceOfNight = document.getElementById("txtTotalPrice").value;
let maxReserved;
let maxLeavedReserved;
let strAreaUnitOwnerPercentValue;
let strOwnerIsFixedAmount;
let reservedDays = [];

let reservedDaysArr = [];
////////////////////////////////////////////////////////////////////////////////
const monthDays = document.querySelector(".days");
let days = "";
for (let j = 1; j <= 30; j++) {
  days += `<div class="next-date">${j}</div>`;
}
monthDays.innerHTML = days;
////////////////////////////////////////////////////////////////////////////////

function renderReservedDays() {
  // initialize price night
  //document.querySelectorAll('.price-night-of-day').forEach((priceNight) => {
  //    priceNight.innerHTML = document.getElementById("txtTotalPrice").value;
  //})
  reservedDaysArr = [];
  reservedDays.forEach((reservedDay) => {
    reservedDaysArr.push(reservedDay.arrivedDate);
    const diffInMs =
      new Date(reservedDay.leavedDate) - new Date(reservedDay.arrivedDate);
    const diffInDays = diffInMs / (1000 * 60 * 60 * 24);
    // initial
    let numberOfDaysInCurrMs = getNumberOfDaysInCurrDays(
      new Date(reservedDay.arrivedDate)
    );
    let DateLoop = reservedDay.arrivedDate; // 29/5 2/6 30
    let currentIncrement = 1;

    for (let d = 1; d <= diffInDays; d++) {
      // 4
      if (new Date(DateLoop).getDate() + 1 == numberOfDaysInCurrMs) {
        reservedDaysArr.push(
          `${new Date(DateLoop).getMonth() + 1}/${
            new Date(DateLoop).getDate() + 1
          }/${new Date(DateLoop).getFullYear()}`
        );

        if (new Date(DateLoop).getMonth() + 1 == 12) {
          DateLoop = `${1}/${1}/${new Date(DateLoop).getFullYear() + 1}`;
        } else {
          DateLoop = `${new Date(DateLoop).getMonth() + 2}/${1}/${new Date(
            DateLoop
          ).getFullYear()}`;
        }
        reservedDaysArr.push(DateLoop);
        numberOfDaysInCurrMs = getNumberOfDaysInCurrDays(new Date(DateLoop));
        currentIncrement = 1;
        d++;
      } else {
        reservedDaysArr.push(
          `${new Date(DateLoop).getMonth() + 1}/${
            new Date(DateLoop).getDate() + 1
          }/${new Date(DateLoop).getFullYear()}`
        );
        DateLoop = `${new Date(DateLoop).getMonth() + 1}/${
          new Date(DateLoop).getDate() + 1
        }/${new Date(DateLoop).getFullYear()}`;
        currentIncrement = currentIncrement + 1;
      }
    }
  });
}

function getNumberOfDaysInCurrDays(targetDate) {
  //get last day in current month
  return new Date(
    targetDate.getFullYear(),
    targetDate.getMonth() + 1, // to get last day in the current month
    0 // 0 get last day in current month
  ).getDate();
}

const renderCalendar = () => {
  date.setDate(1);

  const monthDays = document.querySelector(".days");
  //get last day in current month
  const lastDay = new Date(
    date.getFullYear(),
    date.getMonth() + 1, // to get last day in the current month
    0 // 0 get last day in current month
  ).getDate();
  //get last day in prev month
  const prevLastDay = new Date(
    date.getFullYear(),
    date.getMonth(),
    0 // 0 get last day in prev month
  ).getDate();
  const firstDayIndex = date.getDay();
  const lastDayIndex = new Date(
    date.getFullYear(),
    date.getMonth() + 1, // to get last day in the current month
    0 // 0 get last day in current month
  ).getDay();
  const nextDays = 7 - lastDayIndex - 1;
  const months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];
  document.querySelector(".date h1").innerHTML = months[date.getMonth()];
  document.querySelector(".date p").innerHTML =
    currentDateServer.toDateString();

  let days = "";

  for (let x = firstDayIndex; x > 0; x--) {
    days += `<div class="prev-date">${prevLastDay - x + 1}</div>`;
  }

  for (let i = 1; i <= lastDay; i++) {
    let indexOfReservedDays = 0;
    let isReservedDay = false;
    while (indexOfReservedDays != reservedDaysArr.length) {
      if (
        i === new Date(reservedDaysArr[indexOfReservedDays]).getDate() &&
        date.getMonth() ===
          new Date(reservedDaysArr[indexOfReservedDays]).getMonth() &&
        date.getFullYear() ===
          new Date(reservedDaysArr[indexOfReservedDays]).getFullYear()
      ) {
        isReservedDay = true;
        break;
      }
      indexOfReservedDays++;
    }
    if (
      i === currentDateServer.getDate() &&
      date.getMonth() === currentDateServer.getMonth() &&
      !isReservedDay
    ) {
      // in case today and arrived selected
      if (
        i === new Date(setArrivedDate).getDate() &&
        date.getMonth() === new Date(setArrivedDate).getMonth()
      ) {
        days += `<div class="today arrived-selected" data-date="${setArrivedDate}">${i}</div>`;
      } else if (
        // in case today and leaved selected
        i === new Date(setLeavedDate).getDate() &&
        date.getMonth() === new Date(setLeavedDate).getMonth()
      ) {
        days += `<div class="today leaved-selected" data-date="${setArrivedDate}">${i}</div>`;
      } else if (
        new Date(setArrivedDate) -
          new Date(`${date.getMonth() + 1}/${i}/${date.getFullYear()}`) <
          0 &&
        new Date(setLeavedDate) -
          new Date(`${date.getMonth() + 1}/${i}/${date.getFullYear()}`) >
          0
      ) {
        days += `<div class="today day-selected" data-date="${
          date.getMonth() + 1
        }/${i}/${date.getFullYear()}">${i}</div>`;
      } else {
        days += `<div class="today" data-date="${
          date.getMonth() + 1
        }/${i}/${date.getFullYear()}">${i}</div>`;
      }
    } else if (isReservedDay) {
      days += `<div class="reserved-day" data-date="${
        date.getMonth() + 1
      }/${i}/${date.getFullYear()}" data-reserved="true">${i}</div>`;
    } else {
      if (
        i < currentDateServer.getDate() &&
        date.getMonth() === currentDateServer.getMonth()
      ) {
        days += `<div class="day before-today" data-date="${
          date.getMonth() + 1
        }/${i}/${date.getFullYear()}">${i}</div>`;
      } else if (
        i === new Date(setArrivedDate).getDate() &&
        date.getMonth() === new Date(setArrivedDate).getMonth()
      ) {
        days += `<div class="day arrived-selected" data-date="${setArrivedDate}">${i}</div>`;
      } else if (
        // in case today and leaved selected
        i === new Date(setLeavedDate).getDate() &&
        date.getMonth() === new Date(setLeavedDate).getMonth()
      ) {
        days += `<div class="day leaved-selected" data-date="${setArrivedDate}">${i}</div>`;
      } else if (
        new Date(setArrivedDate) -
          new Date(`${date.getMonth() + 1}/${i}/${date.getFullYear()}`) <
          0 &&
        new Date(setLeavedDate) -
          new Date(`${date.getMonth() + 1}/${i}/${date.getFullYear()}`) >
          0
      ) {
        days += `<div class="day day-selected" data-date="${
          date.getMonth() + 1
        }/${i}/${date.getFullYear()}">${i}</div>`;
      } else {
        if (
          currentDateServer -
            new Date(`${date.getMonth() + 1}/${i}/${date.getFullYear()}`) <
            0 &&
          new Date(maxLeavedReserved) -
            new Date(`${date.getMonth() + 1}/${i}/${date.getFullYear()}`) >=
            0
        ) {
          days += `<div class="day" data-date="${
            date.getMonth() + 1
          }/${i}/${date.getFullYear()}">${i}</div>`;
        } else {
          days += `<div class="day cancel" data-date="${
            date.getMonth() + 1
          }/${i}/${date.getFullYear()}">${i}</div>`;
        }
      }
    }
  }

  for (let j = 1; j <= nextDays; j++) {
    days += `<div class="next-date">${j}</div>`;
  }

  monthDays.innerHTML = days;

  document.querySelectorAll(".days>div").forEach((divDay, index) => {
    divDay.addEventListener("click", () => {
      if (
        countOfClick < 2 &&
        !divDay.classList.contains("prev-date") &&
        !divDay.classList.contains("next-date") &&
        !divDay.classList.contains("before-today") &&
        !divDay.classList.contains("cancel")
      ) {
        if (countOfClick == 0) {
          divDay.classList.add("arrived-selected");
          document.getElementById("txtUnitLockDateStart").value = new Date(
            divDay.getAttribute("data-date")
          ).toDateString();

          countOfClick = 1;
          setArrivedDate = divDay.getAttribute("data-date");
        } else if (countOfClick == 1) {
          if (
            new Date(divDay.getAttribute("data-date")) -
              new Date(setArrivedDate) >
            0
          ) {
            let totalDaysDiff = Math.ceil(
              (new Date(divDay.getAttribute("data-date")) -
                new Date(setArrivedDate)) /
                (1000 * 3600 * 24)
            );

            showNumberOfDays(
              totalDaysDiff,
              new Date(divDay.getAttribute("data-date")).toDateString(),
              new Date(divDay.getAttribute("data-date")).toDateString()
            );

            if (totalDaysDiff < parseInt(maxReserved)) {
              divDay.classList.add("leaved-selected");
              document.querySelector(".close-icon").classList.add("show");
              document.getElementById("txtUnitLockDateEnd").value = new Date(
                divDay.getAttribute("data-date")
              ).toDateString();

              setLeavedDate = divDay.getAttribute("data-date");
              selectAllDaysBetweenArrivedAndLeaved(
                new Date(setArrivedDate),
                new Date(setLeavedDate)
              );
            } else {
              setArrivedDate = "";
              countOfClick = 0;
              document.querySelector(
                ".messages"
              ).innerHTML = `أقصى عدد الأيام الحجز = ${maxReserved}`;
              if (document.querySelector(".arrived-selected")) {
                document
                  .querySelector(".arrived-selected")
                  .classList.remove("arrived-selected");
              }
            }
          } else {
            removeReservedSelected();
            divDay.classList.add("arrived-selected");
            document.getElementById("txtUnitLockDateStart").value = new Date(
              divDay.getAttribute("data-date")
            ).toDateString();
            countOfClick = 1;
            setArrivedDate = divDay.getAttribute("data-date");
          }
        }
      }
    });
  });

  document
    .querySelector(".close-icon")
    .addEventListener("click", removeReservedSelected);

  function removeReservedSelected() {
    countOfClick = 0;
    document.querySelectorAll(".days>div").forEach((divDay) => {
      divDay.classList.remove("arrived-selected");
      divDay.classList.remove("leaved-selected");
      divDay.classList.remove("day-selected");
    });
    document.querySelector(".close-icon").classList.remove("show");
    setArrivedDate = "";
    setLeavedDate = "";

    document.getElementById("txtUnitLockDateStart").value = "";
    document.getElementById("txtUnitLockDateEnd").value = "";

    //document.getElementById("txtNightsCount").value = "";
    //document.getElementById("txtTotalPrice").value = "";

    //document.getElementById("txtAreaUnitOwnerPercentValue").value = parseFloat(strAreaUnitOwnerPercentValue).toFixed(2) ;

    //var intAreaUnitOwnerPercentValue = document.getElementById("txtAreaUnitOwnerPercentValue").value;
    //var intBeneficiaryNotApprovedBalance = document.getElementById("txtBeneficiaryNotApprovedBalance").value;

    //document.getElementById("txtTotalBalanceNeedValue").value = parseFloat(parseFloat(intAreaUnitOwnerPercentValue) + parseFloat(intBeneficiaryNotApprovedBalance)).toFixed(2);
  }

  function selectAllDaysBetweenArrivedAndLeaved(arrivedDate, leavedDate) {
    document.querySelectorAll(".days .day").forEach((divDay) => {
      if (
        arrivedDate - new Date(divDay.getAttribute("data-date")) < 0 &&
        leavedDate - new Date(divDay.getAttribute("data-date")) > 0
      ) {
        divDay.classList.add("day-selected");
      }
    });
    let indexRe = 0;
    let isCanceled = false;
    while (indexRe != document.querySelectorAll(".days .reserved-day").length) {
      indexRe++;
    }
    if (!isCanceled) {
      countOfClick = 2;
      document.querySelector(".messages").innerHTML = "";
    }
  }
};

document.querySelector(".prev").addEventListener("click", () => {
  if (currentMonthIndex > 0) {
    date.setMonth(date.getMonth() - 1);
    currentMonthIndex--;
    if (currentMonthIndex == 0) {
      document.querySelector(".month .prev").style.cursor = "no-drop";
    }
    renderCalendar();
  }
});

document.querySelector(".next").addEventListener("click", () => {
  date.setMonth(date.getMonth() + 1);
  currentMonthIndex++;
  document.querySelector(".month .prev").style.cursor = "pointer";
  renderCalendar();
});

function showNumberOfDays(totalDaysDiff, arrivedDate, leavedDate) {
  //document.getElementById("txtNightsCount").value = totalDaysDiff;
  //GetNightsCount2();
}


