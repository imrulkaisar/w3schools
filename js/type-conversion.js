/*
 * JavaScript Type Conversion
 * -------------------------------
 * @ the ""typeof"" operator return the data type of JavaScript variable
 * */


typeof "Kaisar" 	// 'string'
typeof 3.14 		// 'number'
typeof NaN		// 'number' ********
typeof false 		// 'boolean'
typeof []		// 'object'
typeof {}		// 'object'
typeof new Date()	// 'object'
typeof function(){} 	// 'function'
typeof variable 	// 'undefined'
typeof null		// 'object' *******
typeof doesntExist	// 'undefined' *******


/*
 * The Constructior Property
 * -------------------------
 * the ""constructor"" property return the constructor function for all JavaScript variables
 * */

"Kaisar".constructor 		// String() { [native code] }
(3.14).constructor		// Number() { [native code] }
false.constructor		// Boolean() { [native code] }
[].constructor			// Array() { [native code] }
{}.constructor 			// Object() { [native code] }
new Date().constructor		// Date() { [native code] }
function() {}.constructor	// Function() { [native code] }


/*
 * Type checker functions
 *
 * */

///////////////////////////////////////

function isArray(arr){
    return arr.constructor === Array;
}

let myArr = ['kaisar', 'imran'];
isArray(myArr); // true 

////////////////////////////////////////

function isFunction(fnc){
  return fnc.constructor === Function;
}

function func(){}
isFunction(func) // true

////////////////////////////////////////

function isDate(date){
    return date.constructor === Date;
}

let d = new Date();
isDate(d)  // true

///////////////////////////////////////



/** 
 * Convert to String
 * --------------------
 * Number Methods ToExponential(), toFixed(), toPrecision() convert number to string
 * Date methords convert date to string
 */
 

(123).toString()   	// '123'
String(123)		// '123'
(123.56).toFixed() 	// '123'
true.toString() 	// 'true'
Date().toString()	// 'Tue Oct 29 2019 15:08:06 GMT+0600 (Bangladesh Standard Time)'
[1,2,3].toString()	// '1,2,3'
{}.toString()		// '[object Object]'



/**
 * Convert to Number
 * ----------------------
 * @ Number Method parseFloat() and parseInt() convert string to Number
 *
 * */

Number("123") 		// 123
Number("")		// 0
Number(" ")		// 0
Number("12 3")		// NaN

let x = "12" 	// x is string
let y += x; 	// y is number

Number(true)		// 1
Number(false)		// 0

let d = new Date();
Number(d); 	// 1572340610725



