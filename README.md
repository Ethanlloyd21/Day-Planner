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
### In order for the user not to lose unsave data, the input data (text area) will contain unsave data unless the save button or the refresh (current date or home) button is pressed. Even if the arrow buttons (previous or next date) are pressed, the unsave data will remain on the text area. 

Each hour is color coded to reflect whether the time slot is in the past or the future. 
### The present time slot will show the current time on the row beside the field text area/ input field to indicate and guide the user of the current time. This will change depending on the time of day.

The application uses a third party application (Moment.js) library to work with date and times. 

![](/images/responsive.PNG)

The nav bar consists of a home button, a link of the code via Github and a link to the third party app: Moment.Js
* The applicaiton is responsive

# User Story
As an employee with a busy schedule,
I want to add important events to a daily planner
so that I can manage my time effectively.

# Business Context
Poor time management can result in missed meetings and deadlines or create the appearance of unprofessionalism. A daily planner allows employees to see their day at a glance, schedule time effectively, and improve productivity.

# Improvement
Because of the time constraints, this project was rushed. I was planning to add a full calendar display when the current date is pressed. This will resolve the problem of clicking the arrow buttons mulitiple times to get into a specific date (what if you wanted to go to a specific day 8 months ahead?).

# Bugs in Moment.Js
### * Moment.Js issue/ bug - dates between Jan. 10, 2020 to Feb. 29, 2020 for some reason the code states that it is less than the current date (Jan. 5, 2020). I ran some tests using console.log to test if the current date (Jan. 5, 2020) is greater than the future dates. All dates above Jan. 5, 2020 returned "TRUE", but not the dates between Jan. 10 - Feb. 29, 2020. 
# that is weird!.....
