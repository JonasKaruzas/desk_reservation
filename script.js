const reservations = {
  1: {
    Monday: [8, 9, 10],
    Tuesday: [11, 12],
    Wednesday: [13, 14],
    Thursday: [8, 9, 10, 11, 12, 13, 14, 15, 16, 17],
    Friday: [],
    Saturday: [9, 13],
    Sunday: [8, 12],
  },
  2: {
    Monday: [11, 12, 17],
    Tuesday: [],
    Wednesday: [17],
    Thursday: [],
    Friday: [8, 9, 10, 11, 12, 13, 14, 15, 16, 17],
    Saturday: [8, 9, 10, 11, 12, 13, 14, 15, 16, 17],
    Sunday: [10],
  },
  3: {
    Monday: [13],
    Tuesday: [11, 12],
    Wednesday: [],
    Thursday: [8, 9, 10, 11, 12, 13, 14, 15, 16, 17],
    Friday: [14],
    Saturday: [],
    Sunday: [9],
  },
  4: {
    Monday: [8, 9, 10, 11, 12, 13, 14, 15, 16, 17],
    Tuesday: [8, 9, 10, 11, 12, 13, 14, 15, 16, 17],
    Wednesday: [11],
    Thursday: [],
    Friday: [],
    Saturday: [],
    Sunday: [],
  },
  5: {
    Monday: [8, 9, 10],
    Tuesday: [11, 12],
    Wednesday: [],
    Thursday: [],
    Friday: [10, 14],
    Saturday: [9, 13],
    Sunday: [8, 12],
  },
  6: {
    Monday: [],
    Tuesday: [13, 14],
    Wednesday: [10],
    Thursday: [],
    Friday: [],
    Saturday: [],
    Sunday: [],
  },
};

let activeTable = 0;
let activeDay = "";
let r = document.querySelector(":root");

document.addEventListener("click", handleClick);

let a = document.getElementsByClassName("day");
for (let i = 0; i < a.length; i++) {
  const notificationDiv = document.createElement("div");
  notificationDiv.className = "notification";
  a[i].appendChild(notificationDiv);
}

function handleClick(e) {
  element = e.target;
  // console.log(element);
  // console.log(element.id);
  // console.log(e);

  if (element.classList.contains("desk")) {
    tableClick(element);
    deskNoUpdate(element.id);
    activateTable(element.id);
  }
  
  if (element.classList.contains("day")) {
    dayClick(element);
    activateDay(element.outerText);
  }
  
  if (element.classList.contains("hour")) {
    hourClick(element);
  }
  
  if (activeTable && activeDay) {
    viewReservedHours();
  }
  
  
  showAvailability();
}

function tableClick(e) {
  let desks = document.getElementsByClassName("desk");
  for (let i = 0; i < desks.length; i++) {
    desks[i].classList.remove("selected");
  }
  e.classList.toggle("selected");
}

function deskNoUpdate(e) {
  let no = document.getElementsByClassName("desk-number");
  no[0].innerHTML = "Desk no. ".concat(e);
}

function dayClick(e) {
  let days = document.getElementsByClassName("day");
  for (let i = 0; i < days.length; i++) {
    days[i].classList.remove("selected");
  }
  e.classList.toggle("selected");
}

function hourClick(e) {
  newHour = parseInt(e.innerHTML);

  if (reservations[activeTable][activeDay].indexOf(newHour) == -1) {
    reservations[activeTable][activeDay].push(newHour);
  } else {
    reservations[activeTable][activeDay].splice(
      reservations[activeTable][activeDay].indexOf(newHour),
      1
    );
  }
}

function activateTable(tableID) {
  activeTable = tableID;
}

function activateDay(day) {
  activeDay = day;
}

function viewReservedHours() {
  reservedHours = reservations[activeTable][activeDay];
  let allHours = document.getElementsByClassName("hour");

  removeAllRed(allHours);

  for (let i = 0; i < reservedHours.length; i++) {
    for (let j = 0; j < allHours.length; j++) {
      if (allHours[j].innerHTML == reservedHours[i]) {
        allHours[j].classList.add("red");
      }
    }
  }
}

function removeAllRed(redElements) {
  for (let i = 0; i < redElements.length; i++) {
    redElements[i].classList.remove("red");
  }
}

function showAvailability() {
  rDays = Object.keys(reservations[activeTable]);
  divDays = document.getElementsByClassName("day");
  removeNotifications();

  for (let i = 0; i < divDays.length; i++) {
    divDayText = divDays[i].outerText;
    reservationLength = reservations[activeTable][divDayText].length;

    if (reservationLength == 0) {
      divDays[i].children[0].classList.add("greenNotif");
    } else if (reservationLength == 10) {
      divDays[i].children[0].classList.add("redNotif");
    } else {
      divDays[i].children[0].classList.add("orange");
    }
  }
}

function removeNotifications() {
  n = document.getElementsByClassName('notification');
  
  for (let i = 0; i < n.length; i++) {
    const element = n[i];
    element.classList.remove('redNotif');
    element.classList.remove('greenNotif');
    element.classList.remove('orange');
    
  }
  
}
