var d = new Date();
d.setFullYear(2020);
console.log(d) // return date in 2020

/* 
 * Set Date Methods
 * ////////////////////
 * 
 * setDate()
 * setFullYear()
 * setMonths()		**JavaScript counts month from 0 to 11
 * setHours()		**JavaScript counts Hours from 0 to 23
 * setMinutes()
 * setSeconds()
 * setMilliseconds()
 * setTime()
 *
 * */

/* 
 * The setFullYear() method can optionally set Month and Day
 *
 * */

var d = new Date();
d.setFullYear(2020, 0, 29);


/* 
 * The setDate() method can also be used to add days to a date
 *
 * */

var d = new Date();
d.setDate( d.getDate() + 50); 
console.log(d); 



