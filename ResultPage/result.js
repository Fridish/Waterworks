import { chart1 } from "./chart1.js";

const now = new Date();
const currentDateTime = now.toLocaleString();

//chart1(1,2); 

function convertDate(date) {
    // Get the year, month, and day from the date object
    var year = date.getFullYear();
    var month = ('0' + (date.getMonth() + 1)).slice(-2); // Months are zero-indexed
    var day = ('0' + date.getDate()).slice(-2);
    
    // Concatenate the year, month, and day with hyphens to form the desired format
    var formattedDate = year + '-' + month + '-' + day;
    
    return formattedDate;
}

document.getElementById('dateTime').textContent = currentDateTime;
const startDatePicker = document.getElementById('startDatePicker');
const endDatePicker = document.getElementById('endDatePicker');