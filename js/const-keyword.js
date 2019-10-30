/* 
 * JavaScript const keyword
 * ------------------------------
 * Variables defined with const behave like let variables, except they cannot be reassigned
 * JavaScript const variables must be assigned a value when they are declared
 * You can change the properties of a constant object but you can't reassign a constant object
 * You can change the elements of a constant array but can't reassign a constant array
 * Redeclaring or reassigning an existing ""var"" or ""let"" variable to ""const"", in the same scope, or in the same block, is not allowed:
 * Redeclaring a variable with ""const"", in another scope, or in another block, is allowed:
 * Variable defined with ""var"" are hosted to the top. That mean you can use the variable before declear that variable. But variable defined with ""const"" are not hosted to the top. A ""const"" variable cannot be used before it is decleared
 * */



const PI;
PI = 3.14159265359; // incorrect

const PI = 3.14159265359; // correct 


/////////////////////////////////////////////


// You can create a const object:
const car = {type:"Fiat", model:"500", color:"white"};

// You can change a property:
car.color = "red";

// You can add a property:
car.owner = "Johnson";

car = {type:"Volvo", model:"EX60", color:"red"};    // ERROR

////////////////////////////////////////////////

// You can create a constant array:
const cars = ["Saab", "Volvo", "BMW"];

// You can change an element:
cars[0] = "Toyota";

// You can add an element:
cars.push("Audi");

cars = ["Toyota", "Volvo", "Audi"];    // ERROR

///////////////////////////////////////////////


const x = 2;       // Allowed

{
  const x = 3;   // Allowed
}

{
  const x = 4;   // Allowed
}



