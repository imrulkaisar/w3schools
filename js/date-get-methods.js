var d = new Date();
console.log(d._getMethod_())

/* Date Get Methords
 * //////////////////////
 *
 * getFullYear()
 * getMonth()		**Get month as number (0-11)
 * getDate()
 * getHours()
 * getMinutes()
 * getseconds()
 * getMilliseconds()
 * getTime()		**Get milliseconds since January 1, 1970
 * getDay()		**Get the weekday as a number (0-6)
 * Date.now()		**Get milliseconds of current time
 *
 * */


/* 
 * Get Month Names
 *
 * */

var d = new Date();
var months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
console.log( months[d.getMonth()] );


/* 
 * Get weekday name
 * */

var d = new Date();
var days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
console.log( days[d.getDay()] );


/* 
 * UTC Date methods
 * ///////////////////
 *
 * getUTCDate()
 * getUTCDay()
 * getUTCFullYear()
 * getUTCHours()
 * getUTCMinutes()
 * getUTCSeconds()
 * getUTCMilliseconds()
 *
 * */
