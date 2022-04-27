document.addEventListener('click', handleClick);

function handleClick(e) {
    element = e.target;

    if (element.classList.contains('desk')) {
     tableClick(element);   
    }

    if ((element.classList.contains('hour')) || (element.classList.contains('day'))) {
        timeClick(element);   
       }
   
}

function tableClick(e) {
    e.classList.toggle('red');
}
 
function timeClick(e) {
    e.classList.toggle('green');
}

