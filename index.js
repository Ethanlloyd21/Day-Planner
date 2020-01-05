//variable for the intro and date
var introElement = document.getElementById('intro');
var intro2Element = document.getElementById('simple');
var dateElement = document.getElementById('date');
//variables for the timeFrame 
var timeElement9 = document.getElementById('timeFrame-9');
var timeElement10 = document.getElementById('timeFrame-10');
var timeElement11 = document.getElementById('timeFrame-11');
var timeElement12 = document.getElementById('timeFrame-12');
var timeElement13 = document.getElementById('timeFrame-13');
var timeElement14 = document.getElementById('timeFrame-14');
var timeElement15 = document.getElementById('timeFrame-15');
var timeElement16 = document.getElementById('timeFrame-16');
var timeElement17 = document.getElementById('timeFrame-17')
//variables for the textArea boxes
var eventElement9 = document.getElementById('event1');
var eventElement10 = document.getElementById('event2');
var eventElement11 = document.getElementById('event3');
var eventElement12 = document.getElementById('event4');
var eventElement13 = document.getElementById('event5');
var eventElement14 = document.getElementById('event6');
var eventElement15 = document.getElementById('event7');
var eventElement16 = document.getElementById('event8');
var eventElement17 = document.getElementById('event9');
//variables for the timemin buttons
var timeminsecElement9 = document.getElementById('timeminsec9');
var timeminsecElement10 = document.getElementById('timeminsec10');
var timeminsecElement11 = document.getElementById('timeminsec11');
var timeminsecElement12 = document.getElementById('timeminsec12');
var timeminsecElement13 = document.getElementById('timeminsec13');
var timeminsecElement14 = document.getElementById('timeminsec14');
var timeminsecElement15 = document.getElementById('timeminsec15');
var timeminsecElement16 = document.getElementById('timeminsec16');
var timeminsecElement17 = document.getElementById('timeminsec17');


//variables for the arrow buttons
var previousElement = document.getElementById('previous');
var nextElement = document.getElementById('next');

//variables for current date and save buttons
var dateNow = document.getElementById('current');
var saveNow = document.getElementById('savebutton');


//prints out the intro and the arrow buttons
introElement.innerHTML = "Work Day Planner";
intro2Element.innerHTML = "A simple calendar app for scheduling your work day"
previousElement.innerHTML = "&#8249;";
nextElement.innerHTML = "&#8250;";
//gives value on each of the timeFrame
timeElement9.value = 9;
timeElement10.value = 10;
timeElement11.value = 11;
timeElement12.value = 12;
timeElement13.value = 13;
timeElement14.value = 14;
timeElement15.value = 15;
timeElement16.value = 16;
timeElement17.value = 17;
//prints the time on the time-Frame id
timeElement9.innerHTML = timeElement9.value + "am";
timeElement10.innerHTML = timeElement10.value + "am";
timeElement11.innerHTML = timeElement11.value + "am";
timeElement12.innerHTML = timeElement12.value + "noon";
timeElement13.innerHTML = timeElement13.value - 12 + "pm";
timeElement14.innerHTML = timeElement14.value - 12 + "pm";
timeElement15.innerHTML = timeElement15.value - 12 + "pm";
timeElement16.innerHTML = timeElement16.value - 12 + "pm";
timeElement17.innerHTML = timeElement17.value - 12 + "pm";


//variable for the current date
var currentDate = moment().format('LL');
//variable constant for the current date. This constant never change through out the code
var dateCons = moment().format('LL');
//prints the current date on the date id.
dateElement.innerHTML = currentDate;

//variable for the current time
var timeNow = moment().format('H');

//function to check if the time had pass the hour, if so dim the div.
timePassed();
//check the localStorage of the current date.
renderEvent(currentDate);



//previous button
previousElement.addEventListener('click', function () {
    //subtracts dates
    if (currentDate === moment().format('LL')) {
        currentDate = moment().subtract(1, 'days').format('LL');
        dateElement.innerHTML = currentDate;
    }
    else {
        currentDate = moment(currentDate).subtract(1, 'days').format('LL');
        dateElement.innerHTML = currentDate;
    }


    //dims the div if the date is less than the current date
    dimDiv();
    //checks the localStorage 
    renderEvent(currentDate);


});

//next button
nextElement.addEventListener('click', function () {
    //add dates
    if (currentDate === moment().format('LL')) {
        currentDate = moment().add(1, 'days').format('LL');
        dateElement.innerHTML = currentDate;

    }
    else {
        currentDate = moment(currentDate).add(1, 'days').format('LL');
        dateElement.innerHTML = currentDate;

    }
    //dims the div if the date is less than the current date
    dimDiv();
    //checks the localStorage
    renderEvent(currentDate);
});

//button to go to the current day
dateNow.addEventListener('click', function () {
    location.reload()
});
//save button to save the event/ notes.
saveNow.addEventListener('click', function () {

    localStorage.removeItem(currentDate);

    var event = {
        nine: eventElement9.value,
        ten: eventElement10.value,
        eleven: eventElement11.value,
        twelve: eventElement12.value,
        thirteen: eventElement13.value,
        fourteen: eventElement14.value,
        fifthteem: eventElement15.value,
        sixteen: eventElement16.value,
        seventeen: eventElement17.value
    }
    //set items on the localStorage
    localStorage.setItem(currentDate, JSON.stringify(event));
    //refresh the page
    location.reload();
});

//dims the div on the past time and date
function dimDiv() {
    if (currentDate === dateCons) { //if the date is today
        timePassed();
        showTime();
    }
    else if (currentDate > dateCons) { //if the date is in the future
        futureDate();
    }
    else if (currentDate < dateCons) {
        pastDate();
    }
    else {
        futureDate();
    }

}

//dim previous dates
function pastDate() {

    opac(timeElement9, eventElement9, timeminsecElement9);
    opac(timeElement10, eventElement10, timeminsecElement10);
    opac(timeElement11, eventElement11, timeminsecElement11);
    opac(timeElement12, eventElement12, timeminsecElement12);
    opac(timeElement13, eventElement13, timeminsecElement13);
    opac(timeElement14, eventElement14, timeminsecElement14);
    opac(timeElement15, eventElement15, timeminsecElement15);
    opac(timeElement16, eventElement16, timeminsecElement16);
    opac(timeElement17, eventElement17, timeminsecElement17);

}

//restores div for the future dates
function futureDate() {
    opacNormal(timeElement9, eventElement9, timeminsecElement9);
    opacNormal(timeElement10, eventElement10, timeminsecElement10);
    opacNormal(timeElement11, eventElement11, timeminsecElement11);
    opacNormal(timeElement12, eventElement12, timeminsecElement12);
    opacNormal(timeElement13, eventElement13, timeminsecElement13);
    opacNormal(timeElement14, eventElement14, timeminsecElement14);
    opacNormal(timeElement15, eventElement15, timeminsecElement15);
    opacNormal(timeElement16, eventElement16, timeminsecElement16);
    opacNormal(timeElement17, eventElement17, timeminsecElement17);

}

//checks if the time slot is current, if not dim the div
function timePassed() {
    if (parseInt(timeNow) > timeElement9.value) {
        opac(timeElement9, eventElement9, timeminsecElement9);
    }
    if (parseInt(timeNow) > timeElement10.value) {
        opac(timeElement10, eventElement10, timeminsecElement10);
    }
    if (parseInt(timeNow) > timeElement11.value) {
        opac(timeElement11, eventElement11, timeminsecElement11);
    }
    if (parseInt(timeNow) > timeElement12.value) {
        opac(timeElement12, eventElement12, timeminsecElement12);
    }
    if (parseInt(timeNow) > timeElement13.value) {
        opac(timeElement13, eventElement13, timeminsecElement13);
    }
    if (parseInt(timeNow) > timeElement14.value) {
        opac(timeElement14, eventElement14, timeminsecElement14);
    }
    if (parseInt(timeNow) > timeElement15.value) {
        opac(timeElement15, eventElement15, timeminsecElement15);
    }
    if (parseInt(timeNow) > timeElement16.value) {
        opac(timeElement16, eventElement16, timeminsecElement16);
    }
    if (parseInt(timeNow) > timeElement17.value) {
        opac(timeElement17, eventElement17, timeminsecElement17);
    }
}

//function that dims the div and id.
function opac(time, textA, timemin) {
    textA.style.backgroundColor = "#D3D3D3";
    textA.style.opacity = 0.3;
    time.style.opacity = 0.3;
    timemin.style.opacity = 0.3;

}
//function that restores the div and id
function opacNormal(time, textA, timemin) {
    textA.style.backgroundColor = "white";
    textA.style.opacity = 1;
    time.style.opacity = 1;
    timemin.style.opacity = 1;
}

//function to show the current time beside the time slot on the table
function showTime() {
    if (parseInt(timeNow) === timeElement9.value) {
        timeminsecElement9.innerHTML = moment().format('LT');
    }
    if (parseInt(timeNow) === timeElement10.value) {
        timeminsecElement10.innerHTML = moment().format('LT');
    }
    if (parseInt(timeNow) === timeElement11.value) {
        timeminsecElement11.innerHTML = moment().format('LT');
    }
    if (parseInt(timeNow) === timeElement12.value) {
        timeminsecElement12.innerHTML = moment().format('LT');
    }
    if (parseInt(timeNow) === timeElement13.value) {
        timeminsecElement13.innerHTML = moment().format('LT');
    }
    if (parseInt(timeNow) === timeElement14.value) {
        timeminsecElement14.innerHTML = moment().format('LT');
    }
    if (parseInt(timeNow) === timeElement15.value) {
        timeminsecElement15.innerHTML = moment().format('LT');
    }
    if (parseInt(timeNow) === timeElement16.value) {
        timeminsecElement16.innerHTML = moment().format('LT');
    }
    if (parseInt(timeNow) === timeElement17.value) {
        timeminsecElement17.innerHTML = moment().format('LT');
    }
}

//get item on the localStorage and print in the textArea
function renderEvent(date) {
    if (currentDate in localStorage) {

        var get = JSON.parse(localStorage.getItem(currentDate));

        eventElement9.innerHTML = get.nine;
        eventElement10.innerHTML = get.ten;
        eventElement11.innerHTML = get.eleven;
        eventElement12.innerHTML = get.twelve;
        eventElement13.innerHTML = get.thirteen;
        eventElement14.innerHTML = get.fourteen;
        eventElement15.innerHTML = get.fifthteem;
        eventElement16.innerHTML = get.sixteen;
        eventElement17.innerHTML = get.seventeen;
    }
    else {
        eventElement9.innerHTML = "";
        eventElement10.innerHTML = "";
        eventElement11.innerHTML = "";
        eventElement12.innerHTML = "";
        eventElement13.innerHTML = "";
        eventElement14.innerHTML = "";
        eventElement15.innerHTML = "";
        eventElement16.innerHTML = "";
        eventElement17.innerHTML = "";
    }
}

