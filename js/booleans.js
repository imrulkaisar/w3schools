/* 
 * JavaScript Booleans
 * 
 * @ Boolean() is used to find if an expression is true
 * @ Everything with a value is true
 * @ Everything without value is false. 
 * @ 0 and -0 returns false
 * @ undefined is false
 * @ NaN returns false
 * */

Boolean(100)  		// true 
Boolean(3.14) 		// true
Boolean(-15)		// true
Boolean("Hello")	// true
Boolean("false")	// true

Boolean(0) 		// false
Boolean(-0)		// false
Boolean("")		// false

var x; Boolean(x) 	// false
var x=null; Boolean(x) 	// false
var x=10/"H"; Boolean(x)	// NaN return false







