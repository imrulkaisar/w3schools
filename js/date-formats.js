/*
 * JS Date formates
 * "2019-10-28"  	**ISO Date**
 * "10/28/2019"  	**Short Date**
 * "Octobar 28 2015" 	**Long Date**
 *
 * */

/*
 * ISO Dates
 *
 * */

var d = new Date("2019-10-28T20:52:23"); // Date and Time are separated by "T"

/*
 * Long Date
 * Normal syntax "MMM DD YYYY"
 * Month and day can be in any order "DD MMM YYYY"
 * Month can be written in full or short format "January 29 2020"
 * */

var msec = Date.parse("Octobar 28 2019"); //Convart date format to milliseconds

var d = new Date(msec); //Convert number to Date format 






