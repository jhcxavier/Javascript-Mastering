// Objective

// In this challenge, we learn about JavaScript Dates. Check out the attached tutorial for more details.

// Task

// Given a date string, dataString, in the format MM/DD/YYYY, find and return the day name for that date. Each day name must be one of the following strings: Sunday, Monday, Tuesday, Wednesday, Thursday, Friday, or Saturday. For example,
//  the day name for the date 12/07/2016 is Wednesday.

 function getDayName(dateString) {
    const day = new Date(dateString);
    const weekDays = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    return weekDays[day.getDay()];
}