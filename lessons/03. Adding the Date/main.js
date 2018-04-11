//set up variables for the date
var date = new Date(); 
var month = date.getMonth();
var weekday = date.getDay();
var day = date.getDate();
var year = date.getFullYear();
var orInd = "th";

//declare month names
var monthNames = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
            
//declare weekday names
var dayNames = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

//calculate the ordinal indicator 
if(day % 10 == 1 && day!=11){
    orInd = "st";
}
else if(day % 10 == 2 && day!=12){
    orInd = "nd";
}
else if(day % 10 == 3 && day!=13){
    orInd = "rd";
}

//set the date heading text
document.getElementById("date").innerHTML = dayNames[weekday] + " " + monthNames[month] + " " + day + "<sup>" + orInd + "</sup>" + ", " + year;