
document.addEventListener('click', handleClick);

function handleClick(e) {
    element = e.target;
    // console.log(element);
    // console.log(element.id);
    // console.log(e);

    if (element.classList.contains('desk')) {
     tableClick(element);
     deskNoUpdate(element.id);   
    }

    if (element.classList.contains('day')) {
        dayClick(element);   
    }

    if (element.classList.contains('hour'))  {
        hourClick(element);   
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