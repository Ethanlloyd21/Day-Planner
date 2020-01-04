var introElement = document.getElementById('intro');
var dateElement = document.getElementById('date');

var timeElement9 = document.getElementById('timeFrame-9');
var timeElement10 = document.getElementById('timeFrame-10');
var timeElement11 = document.getElementById('timeFrame-11');
var timeElement12 = document.getElementById('timeFrame-12');
var timeElement13 = document.getElementById('timeFrame-13');
var timeElement14 = document.getElementById('timeFrame-14');
var timeElement15 = document.getElementById('timeFrame-15');
var timeElement16 = document.getElementById('timeFrame-16');
var timeElement17 = document.getElementById('timeFrame-17')

var eventElement9 = document.getElementById('event1');
var eventElement10 = document.getElementById('event2');
var eventElement11 = document.getElementById('event3');
var eventElement12 = document.getElementById('event4');
var eventElement13 = document.getElementById('event5');
var eventElement14 = document.getElementById('event6');
var eventElement15 = document.getElementById('event7');
var eventElement16 = document.getElementById('event8');
var eventElement17 = document.getElementById('event9');




var toSaveElement = document.getElementById('toSave');
var previousElement = document.getElementById('previous');
var nextElement = document.getElementById('next');


introElement.innerHTML = "Work Day Planner";
previousElement.innerHTML = "&#8249;";
nextElement.innerHTML = "&#8250;";

timeElement9.value = 9;
timeElement10.value = 10;
timeElement11.value = 11;
timeElement12.value = 12;
timeElement13.value = 13;
timeElement14.value = 14;
timeElement15.value = 15;
timeElement16.value = 16;
timeElement17.value = 17;

timeElement9.innerHTML = parseInt(timeElement9.value) + "am";
timeElement10.innerHTML = timeElement10.value + "am";
timeElement11.innerHTML = timeElement11.value + "am";
timeElement12.innerHTML = timeElement12.value + "noon";
timeElement13.innerHTML = timeElement13.value - 12 + "pm";
timeElement14.innerHTML = timeElement14.value - 12 + "pm";
timeElement15.innerHTML = timeElement15.value - 12 + "pm";
timeElement16.innerHTML = timeElement16.value - 12 + "pm";
timeElement17.innerHTML = timeElement17.value - 12 + "pm";



var currentDate = moment().format('LL');
const dateCons = moment().format('LL');
dateElement.innerHTML = currentDate;
console.log(currentDate);
console.log(dateCons);



previousElement.addEventListener('click', function () {

    if (currentDate === moment().format('LL')) {
        currentDate = moment().subtract(1, 'days').format('LL');
        dateElement.innerHTML = currentDate;

    }
    else {
        currentDate = moment(currentDate).subtract(1, 'days').format('LL');
        dateElement.innerHTML = currentDate;
    }

    dimDiv();
});

nextElement.addEventListener('click', function () {

    if (currentDate === moment().format('LL')) {
        currentDate = moment().add(1, 'days').format('LL');
        dateElement.innerHTML = currentDate;

    }
    else {
        currentDate = moment(currentDate).add(1, 'days').format('LL');
        dateElement.innerHTML = currentDate;

    }

    dimDiv();
});



var timeNow = moment().format('H');

var num = 3;
console.log(timeNow);


var currentDateArray = moment().format('L').split('/');

console.log(currentDate);
console.log(dateCons);

timePassed();


function dimDiv() {
    if (currentDate === dateCons) {
        timePassed();
    }
    else if (currentDate > dateCons) {
        futureDate();
    }
    else {
        pastDate();
    }


}


function pastDate() {

    opac(timeElement9, eventElement9, toSaveElement);
    opac(timeElement10, eventElement10, toSaveElement);
    opac(timeElement11, eventElement11, toSaveElement);
    opac(timeElement12, eventElement12, toSaveElement);
    opac(timeElement13, eventElement13, toSaveElement);
    opac(timeElement14, eventElement14, toSaveElement);
    opac(timeElement15, eventElement15, toSaveElement);
    opac(timeElement16, eventElement16, toSaveElement);
    opac(timeElement17, eventElement17, toSaveElement);

}

function futureDate() {
    opacNormal(timeElement9, eventElement9, toSaveElement);
    opacNormal(timeElement10, eventElement10, toSaveElement);
    opacNormal(timeElement11, eventElement11, toSaveElement);
    opacNormal(timeElement12, eventElement12, toSaveElement);
    opacNormal(timeElement13, eventElement13, toSaveElement);
    opacNormal(timeElement14, eventElement14, toSaveElement);
    opacNormal(timeElement15, eventElement15, toSaveElement);
    opacNormal(timeElement16, eventElement16, toSaveElement);
    opacNormal(timeElement17, eventElement17, toSaveElement);

}

function timePassed() {
    if (timeNow > timeElement9.value) {
        opac(timeElement9, eventElement9, toSaveElement);
    }
    if (timeNow > timeElement10.value) {
        opac(timeElement10, eventElement10, toSaveElement);
    }
    if (timeNow > timeElement11.value) {
        opac(timeElement11, eventElement11, toSaveElement);
    }
    if (timeNow > timeElement12.value) {
        opac(timeElement12, eventElement12, toSaveElement);
    }
    if (timeNow > timeElement13.value) {
        opac(timeElement13, eventElement13, toSaveElement);
    }
    if (timeNow > timeElement14.value) {
        opac(timeElement14, eventElement14, toSaveElement);
    }
    if (timeNow > timeElement15.value) {
        opac(timeElement15, eventElement15, toSaveElement);
    }
    if (timeNow > timeElement16.value) {
        opac(timeElement16, eventElement16, toSaveElement);
    }
    if (timeNow > timeElement17.value) {
        opac(timeElement17, eventElement17, toSaveElement);
    }
}

//function that dims the div and id.
function opac(time, textA, save) {
    textA.style.backgroundColor = "#D3D3D3";
    textA.style.opacity = 0.3;
    time.style.opacity = 0.3;
    save.style.opacity = 0.3;
}

function opacNormal(time, textA, save) {
    textA.style.backgroundColor = "white";
    textA.style.opacity = 1;
    time.style.opacity = 1;
    save.style.opacity = 1;
}