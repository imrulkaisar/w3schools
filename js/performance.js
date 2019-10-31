/* 
 * JavaScript Performance
 * --------------------------
 * Don't create new variables if you don't plan to save values
 * Putting your script at the bottom of the page body lets the browser load the page first
 * An alternative is to use defer="true" in the script tag. The defer attribute specifies that the script should be executed after the page has finished parsing. It only works for external scripts. 
 * */


/* 
 * Reduce Activity in Loops
 * -----------------------------
 * Statements or assignments that can be placed outside the loop will make the loop run faster
 * */

for( let i =0; i < arr.length; i++ )  // Bad example

// ------------------------------------

let i; 
let l = arr.length;
for( i = 0; i < l; i++)  // Better code


/* 
 * Reduce DOM Access
 * ---------------------------------
 * Accessing the HTML DOM is very slow compared to other JavaScript statement
 * Access DOM element once, and use it as a local variable
 * */

let obj = document.getElementById("demo");
obj.innerHTML = "Hello";


