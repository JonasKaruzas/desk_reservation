const reservations = {
  1: {
    Monday: [8, 9, 10],
    Tuesday: [11, 12],
    Wednesday: [13, 14],
    Thursday: [15, 16, 17],
    Friday: [10, 14],
    Saturday: [9, 13],
    Sunday: [8, 12]
  },
  2: {
    Monday: [11, 12, 17],
    Tuesday: [13, 14],
    Wednesday: [17],
    Thursday: [13],
    Friday: [16],
    Saturday: [12],
    Sunday: [10]
  },
  3: {
    Monday: [13],
    Tuesday: [11, 12],
    Wednesday: [],
    Thursday: [],
    Friday: [14],
    Saturday: [],
    Sunday: [9]
  },
  4: {
    Monday: [11, 12, 17],
    Tuesday: [13, 14],
    Wednesday: [11],
    Thursday: [],
    Friday: [],
    Saturday: [],
    Sunday: []
  },
  5: {
    Monday: [8, 9, 10],
    Tuesday: [11, 12],
    Wednesday: [],
    Thursday: [],
    Friday: [10, 14],
    Saturday: [9, 13],
    Sunday: [8, 12]
  },
  6: {
    Monday: [],
    Tuesday: [13, 14],
    Wednesday: [10],
    Thursday: [],
    Friday: [],
    Saturday: [],
    Sunday: []
  }
};

let activeTable = 0;
let activeDay = "";

document.addEventListener("click", handleClick);

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
    activateDay(element.innerHTML);
  }

  if (element.classList.contains("hour")) {
    hourClick(element);
  }

  if (activeTable && activeDay) {
    viewReservedHours();
  }
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
