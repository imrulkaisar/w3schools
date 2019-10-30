/* 
 * Arrow Function
 * -------------------------------
 * Arrow function allow us to write shorter function syntax
 * In regular functions the ""this"" keyword represented the object that called the function, which could be the window, the document, a button or whatever. but with arrow function the ""this"" keyword always represents the object that defined the arrow function. 
 * */



function hello(name){
    return `Hello ${name}`; 
}

// ------------------------------

var hello = (name) => {
   return `Hello ${name}`;
}

// ------------------------------

var hello = (name) => return `Hello ${name}`;

// ------------------------------

var hello = name => return `Hello ${name}`;


