/* 
 * JavaScript Function Scope
 * ----------------------------
 * There are two type of scope 1) Local scope 2) Global scope
 * Variables decleared within a function become a Local scope of that function
 * Local variable can't be access outsite of the function
 * Do NOT create global variables unless you intend to.
 * Function arguments (parameters) work as local variables inside functions.
 * */

//////////////////////////////////////////

// code here can NOT use carName

function myFunction() {
  var carName = "Volvo";

  // code here CAN use carName

}

/////////////////////////////////////////


myFunction();

// code here can use carName

function myFunction() {
  carName = "Volvo";     // carName automatically Global here, because of not using var/let/const keyword 
}


//////////////////////////////////////////



