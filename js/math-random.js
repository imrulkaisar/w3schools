/* 
 * JavaScript Random
 * 
 * */

/* 
 * Math.random() returns a random number between 0 and 1
 * Math.random() always return number lower than 1
 * Math.floor() can be used with Math.random() to return random integers
 * */

Math.floor( Math.random() * 10 ) // return a random number between 0 to 9 but not 10
Math.floor( Math.random() * 10 ) + 1 ; // return a random number between 0 to 10 

/* 
 * Proper Random Function
 *
 * */

function getRndInt(min, max){
	return Math.floor( Math.random() * (max - min) ) + min;  // min included and max excluded
}

function getRandomInteger(min, max){
	return Math.floor( Math.random() * (max - min + 1) ) + min; // min and max both are included
}



