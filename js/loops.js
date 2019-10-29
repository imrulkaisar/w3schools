/* 
 * JavaScript supports different kinds of loops:
 * @ for - 	loops through a block of code a number of times
 * @ for/in - 	loops through the properties of an object
 * @ for/of - 	loops through the values of an iterable object
 * @ while - 	loops through a block of code while a specified condition is true
 * @ do/while -	also loops through a block of code while a specified condition is true
 * */

/* 
 * The For Loop @Syntax
 * ---------------------
 * */

for( initialValue; conditions; increment/decrement ) {
	// code to be executed
}

for (i = 0; i < 5; i++) {
  text += "The number is " + i + "<br>";
}



/*
 * The For ... in Loop
 * ---------------------
 * The JavaScript for/in statement loops through the properties of an object:
 * For/in loop works with objects
 * */


let person = {
        fname: "Imrul",
        lname: "Kaisar",
        age: 24,
        fullName(){

        }

}

let text = "";

for( let x in person ){
        text +=person[x] + " ";
}

// Imrul Kaisar 24 fullName() {}




/* 
 * The For ..... of loop
 * ----------------------------
 * The JavaScript for/of statement loops through the values of an iterable objects
 * @ for/of lets you loop over data structures that are iterable such as Arrays, Strings, Maps, NodeLists, and more.
 *
 * */

let person = ['Imrul', 'Kaisar', 'Imran'];
let text = "";
for (let x of person){
  text += x + " ";
}

// Imrul Kaisar Imran



/*
 * The While Loop
 * ------------------
 * The while loop loops through a block of code as long as a specified condition is true.
 * */

////////////////////////////////

let i = 0, text = ""; 
while( 1 < 10 ){
	text += "the Number is " + i;
	i++; // if you forget to increate the variable used in the condition, the loop will never end.
}

////////////////////////////////



/* 
 * The Do....While Loop
 * ----------------------
 * This loop will execute the code block at least once (before checking the coditions) 
 * */

///////////////////////////////

let i = 0, text = "";
do {
    text += "The number is " + i;
    i++;
}while(i < 10)

///////////////////////////////




