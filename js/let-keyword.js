/* 
 * JavaScript let keyword
 * -------------------------
 * Variable decleared with the ""let"" keyword can have Block Scope
 * Variable decleared inside a block {} can't be accessed from outside the block
 * Redeclaring a JavaScript variable with ""var"" is allowed anywhere in a program:
 * Redeclaring a ""var"" variable with ""let"", in the same scope, or in the same block, is not allowed
 * Redeclaring a ""let"" variable with ""let"", in the same scope, or in the same block, is not allowed
 * Redeclaring a ""let"" variable with ""var"", in the same scope, or in the same block, is not allowed:
 * Redeclaring a variable with ""let"", in another scope, or in another block, is allowed:
 * Variable defined with ""var"" are hoisted to the top, you can use variable before it is decleared. Variable define with ""let"" keyword are not hosted to the top, you can't use variable before it is decleared. It will produce a ReferenceError
 * */

{
    let x = 2; 
}

// x can't be used here


////////////////////////////

var x = 10;
var y = 12;
// Here x is 10, y is 12
{
  var x = 2;
  var y = 5;
  // Here x is 2, y is 5
}
// Here x is 2, y is 12
// y can't be redeclear here but x can be declear again

/////////////////////////////////

var i = 5;
for (var i = 0; i < 10; i++) {
  // some statements
}
// Here i is 10

//------------------------------------

let i = 5;
for (let i = 0; i < 10; i++) {
  // some statements
}
// Here i is 5

////////////////////////////////////

var carName = "Volvo";
// code here can use window.carName

//--------------------------

let carName = "Volvo";
// code here can not use window.carName

/////////////////////////////////////




