/*
 * JavaScript this keyword
 * ---------------------------
 * The javaScript ""this"" keyword refers to the object it belongs to.
 * In a method, ""this"" refers to the owner object.
 * Alone, ""this"" refers to the global object.
 * In a function, ""this"" refers to the global object.
 * In a function, in strict mode, ""this"" is undefined
 * In an event, ""this"" refers to the element that received the event.
 * Methods like call(), and apply() can refer ""this"" to any object.
 * */


///////////////////////////////////////

let person = {
    firstName   : "Imrul",
    lastName    : "Kaisar",
    id          : 180170059,
    fullName    : function(){
        return this.firstName + " " + this.lastName; // this refers to person object
    }

};

let x = this // [object Window]  // this keyword refers to the Global object


function myFunction(){
    return this; // [object Window]  // refers to the Global object
}

// in "strict mode"

function strictModeFunction(){
    "use strict"
    return this; // undefined
}


///////////////////////////////////////


<button onclick="this.style.display='none'">Click to Remove me</button>  // refers the HTML element


//////////////////////////////////////////


var person1 = {
  fullName: function() {
    return this.firstName + " " + this.lastName;
  }
}
var person2 = {
  firstName:"John",
  lastName: "Doe",
}
person1.fullName.call(person2);  // Will return "John Doe"

// ""this"" refers to the person2, even if it is a method of person1;




