# Day-Planner
A simple calendar application that allows the user to save events for each hour of the day. This app will run in the browser and feature dynamically updated HTML and CSS powered by native JavaScript.

![](/images/home.PNG)

The app displays standard business hours (9 a.m. to 5 p.m.). Each time slot represents one hour and contain the following:

* The time
* A field to hold user input
* Save button
* Current Date button
* Current time

Clicking on the save button will store the time and user input in localStorage.
Each hour is color coded to reflect whether the time slot is in the past, the present, or the future. This will change depending on the time of day.
The application uses a third party application (Moment.js) library to work with date and times. 
