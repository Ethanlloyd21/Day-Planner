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
var eventElement1 = document.getElementById('event5');
var eventElement2 = document.getElementById('event6');
var eventElement3 = document.getElementById('event7');
var eventElement4 = document.getElementById('event8');
var eventElement5 = document.getElementById('event9');




var toSaveElement = document.getElementById('toSave');
var previousElement = document.getElementById('previous');
var nextElement = document.getElementById('next');


introElement.innerHTML = "Work Day Planner";
previousElement.innerHTML = "&#8249;";
nextElement.innerHTML = "&#8250;";

timeElement9.value = "09";
timeElement10.value = "10";
timeElement11.value = "11";
timeElement12.value = "12";
timeElement13.value = "13";
timeElement14.value = "14";
timeElement15.value = "15";
timeElement16.value = "16";
timeElement17.value = "17";

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
dateElement.innerHTML = currentDate;
console.log(currentDate);

previousElement.addEventListener('click', function () {

    if (currentDate === moment().format('LL')) {
        currentDate = moment().subtract(1, 'days').format('LL');
        dateElement.innerHTML = currentDate;

    }
    else {
        currentDate = moment(currentDate).subtract(1, 'days').format('LL');
        dateElement.innerHTML = currentDate;
    }
    console.log(currentDate);
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
    console.log(currentDate);
});



var timeNow = moment().format('H');

if (timeNow > timeElement9.value) {
    eventElement9.style.backgroundColor = "#D3D3D3";
}
if (timeNow > timeElement10.value) {
    eventElement10.style.backgroundColor = "#D3D3D3";
}
if (timeNow > timeElement11.value) {
    eventElement11.style.backgroundColor = "#D3D3D3";
}
if (timeNow > timeElement12.value) {
    eventElement12.style.backgroundColor = "#D3D3D3";
}
if (timeNow > timeElement13.value) {
    eventElement1.style.backgroundColor = "#D3D3D3";
}
if (timeNow > timeElement14.value) {
    eventElement2.style.backgroundColor = "#D3D3D3";
}
if (timeNow > timeElement15.value) {
    eventElement3.style.backgroundColor = "#D3D3D3";
}
if (timeNow > timeElement16.value) {
    eventElement4.style.backgroundColor = "#D3D3D3";
}
if (timeNow > timeElement17.value) {
    eventElement5.style.backgroundColor = "#D3D3D3";
}