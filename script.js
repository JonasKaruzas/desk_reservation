const reservations = {
    1:{
        Monday: [10, 14, 16],
        Tuesday: [9, 17]
    },
    2:{
        Monday: [11, 12, 17],
        Tuesday: [13, 14]
    }
}

let activeTable = 0;
let activeDay = '';


document.addEventListener('click', handleClick);

function handleClick(e) {
    element = e.target;
    // console.log(element);
    // console.log(element.id);
    // console.log(e);

    if (element.classList.contains('desk')) {
     tableClick(element);
     deskNoUpdate(element.id);
     activateTable(element.id);   
    //  console.log('1');
    }

    if (element.classList.contains('day')) {
        dayClick(element);
        activateDay(element.innerHTML);   
        // console.log('2');
    }

    if (element.classList.contains('hour'))  {
        hourClick(element);   
        // console.log('3');
    }

    if (activeTable != 0 && activeDay != '') {
        viewReservedHours();
        // console.log('4');
    }
}

function tableClick(e) {
    let desks = document.getElementsByClassName("desk");
    for (let i = 0; i < desks.length; i++) {
        desks[i].classList.remove('selected');
    }
    e.classList.toggle('selected');
}

function deskNoUpdate(e) {
    let no = document.getElementsByClassName("desk-number");
    no[0].innerHTML =  'Desk no. '.concat(e);
}

function dayClick(e) {
    let days = document.getElementsByClassName("day");
    for (let i = 0; i < days.length; i++) {
        days[i].classList.remove('selected');
    }
    e.classList.toggle('selected');

}

function hourClick(e) {
    e.classList.toggle('green');
}

function activateTable(tableID) {
    activeTable = tableID;
}

function activateDay(day) {
    activeDay = day;
}

function viewReservedHours() {
    reservedHours = reservations[activeTable][activeDay];
    let allHours = document.getElementsByClassName('hour');

    for (let i = 0; i < allHours.length; i++){
        allHours[i].classList.remove('red');
    }

    for (let i = 0; i < reservedHours.length; i++) {
        for (let j =0; j < allHours.length; j++){
            if (allHours[j].innerHTML == reservedHours[i]){
                allHours[j].classList.add('red');
            }
            
        }
    }

    // console.log(reservations[activeTable][activeDay]);

}