"use strict";

console.log("Hello from external javascript.");

alert("Welcome to my Website!");

let favColor = prompt("What is your favorite color?");
alert(favColor + ", is my favorite color too!");

let dailyRental = Number(prompt("What is the cost to rent a movie for a day?"));
let littleMermaid = Number(prompt("How many days did you rent Little Mermaid?"));
let brotherBear = Number(prompt("How many days did you rent Brother Bear?"));
let hercules = Number(prompt("How many days did you rent Hercules?"));
alert("Your rental cost is a total of $" + (littleMermaid + brotherBear + hercules) * dailyRental);

let googlePay = Number(prompt("How much does Google pay you per hour?"));
let amazonPay = Number(prompt("How much does Amazon pay you per hour?"));
let facebookPay = Number(prompt("How much does Facebook pay you per hour?"));
let googleHours = Number(prompt("How many hours did you work at Google?"));
let amazonHours = Number(prompt("How many hours did you work at Amazon?"));
let facebookHours = Number(prompt("How many hours did you work at Facebook?"));
alert("Your total check should be $" + ((googlePay * googleHours) + (amazonPay * amazonHours) + (facebookPay * facebookHours)));

let classStatus = confirm("Select 'OK' if the class is open");
let scheduleStatus = confirm("Select 'OK' if the your schedule is open");
let canEnroll = classStatus && scheduleStatus;
alert("You are able to enroll into a new class: " + canEnroll);

let items = confirm("Select 'OK' if 2 or more items are being purchased");
let offer = confirm("Select 'OK' if the offer has not expired");
let membership =confirm("Select 'OK' if the customer is a Premium Member");
let offerAvailability = membership || (items && offer);
alert("Offer availability: " + offerAvailability);



