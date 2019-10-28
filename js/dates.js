// creating Date object
let d = new Date(year, month, date, hours, minutes, seconds, milliseconds);

// javaScript count month from 0 to 11 
/*
 * 6 numbers specify year, month, day, hours, minutes, seconds:
 * 5 numbers specify year, month, day, hours, minutes
 * 4 numbers specify year, month, day, hours
 * 3 numbers specify year, month, day
 * 2 numbers specify year, month
 * 1 number specify year
 * */

new Date(99) // 1999
new Date(9) // 1909

// zero time
new Date(0) // Zero time is January 01, 1970 00:00:00 UTC.

/*
 * The toUTCString() method converts a date to a UTC string
 *
 * */

var d = new Date();
console.log( d.toUTCString() ); // current time in UTC format

/*
 * the toDateString() method conver date to more readable string
 *
 * */

var d = new Date();
console.log(d.toDateString()); // "Mon Oct 28 2019"



