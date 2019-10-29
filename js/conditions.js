/* 
 * JS Conditions 
 * @ if condition: Use if to specify a block of code to be executed, if a specified condition is true
 * @ Use else to specify a block of code to be executed, if the same condition is false
 * @ Use else if to specify a new condition to test, if the first condition is false
 * @ Use switch to specify many alternative blocks of code to be executed
 * */


/* 
 * if, else if, else @Syntax
 * -------------------------
 * */

if (condition1) {
  //  block of code to be executed if condition1 is true
} else if (condition2) {
  //  block of code to be executed if the condition1 is false and condition2 is true
} else {
  //  block of code to be executed if the condition1 is false and condition2 is false
}


/* 
 * JS switch @Syntax
 * ------------------
 * @ When JavaScript reaches a ""break"" keyword, it breaks out of the switch block.
 * @ The ""default"" keyword specifies the code to run if there is no case match:
 * @ The ""default"" case does not have to be the last case in a switch block:
 * @ If ""default"" is not the last case in the switch block, remember to end the default case with a break.
 * @ Switch cases use strict comparison (===). Value and type must be same
 *
 * */

switch(expression) {
  case x:
    // code block
    break;
  case y:
    // code block
    break;
  default:
    // code block
}


/* 
 * Common Code Blocks
 * --------------------
 * */

switch (new Date().getDay()) {
  case 4:
  case 5:
    text = "Soon it is Weekend"; // case 4 and 5 sharing the same output
    break;
  case 0:
  case 6:
    text = "It is Weekend"; // case 0 and 6 sharing the same output
    break;
  default:
    text = "Looking forward to the Weekend";
}




