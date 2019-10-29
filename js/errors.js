/* 
 * JavaScript Errors
 * ------------------------
 *  The ""try"" statement lets you test a block of code for errors.
 *  The ""catch"" statement lets you handle the error.
 *  The ""throw"" statement lets you create a custom errors.
 *  The ""finally"" statement lets you execute code, after try and catch, regardless of the result
 *  JavaScript will actually create an Error object with two properties: ""name"" and ""message"".
 * */


/*
 * @Syntax 
 *
 * */

try {
  // Block of code to try
}
catch(err) {
  // Block of code to handle errors
}
finally {
  Block of code to be executed regardless of the try / catch result
}

////////////////////////////////////////

try {
  adddlert("Welcome guest!");
}
catch(err) {
 console.log(err.message);  // adddlert is not defined
}

///////////////////////////////////////


<p>Please input a number between 5 and 10:</p>

<input id="demo" type="text">
<button type="button" onclick="myFunction()">Test Input</button>
<p id="p01"></p>

<script>
function myFunction() {
  var message, x;
  message = document.getElementById("p01");
  message.innerHTML = "";
  x = document.getElementById("demo").value;
  try { 
    if(x == "")  throw "empty";			// custom error 
    if(isNaN(x)) throw "not a number";		// custom error
    x = Number(x);
    if(x < 5)  throw "too low";			// custom error
    if(x > 10)   throw "too high"; 		// custom error
  }
  catch(err) {
    message.innerHTML = "Input is " + err; 	// please don't use "message" or "name" method when use throw
  }
}
</script>

/////////////////////////////////////



/* 
 * Error Name and Values
 * ----------------------------
 * JavaScript has a built in error object that provides error information when an error occurs.
 *
 * @ EvalError - 	An error has occurred in the eval() function (Newer version of javaScript do not throw EvalError, Use SyntaxError instead)
 * @ RangeError - 	A number "Out of range" has occurred
 * @ ReferenceError - 	An illegal reference has occurred
 * @ SyntaxError - 	A syntax error has occurred
 * @ TypeError - 	A type error has occurred 
 * @ URIError - 	An error in encodeURI() has occurred 
 *
 * */







