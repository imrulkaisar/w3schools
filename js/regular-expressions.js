/* 
 * JavaScript Regular Expressions
 * -----------------------------------
 * @Syntax /pattern/modifiers
 * Regular expressions are often used with the two string method search() and replace()
 * *** in regular expressions use two forward slash (/) instead of using string sign ("); 
 * RegExp is an object
 * */


/* 
 * Modifiers 
 * i - 		case-insensitive
 * g - 		a global match (find all matches rather than stopping after the first match)
 * m -		multiline matching
 * @ Brackets are used to find a range of characters
 * [abc] -	Find any of the characters between the brackets
 * [0-9] -	Find any of the digits between the brackets
 * (x|y) -	Find any of the alternatives separated with |
 * \d - 	Find a digit
 * \s - 	Find a whitespace character
 * \b - 	Find a match at the beginning of a word like this: \bWORD, or at the end of a word like this: WORD\b
 * \uxxxx	Find the Unicode character specified by the hexadecimal number xxxx
 * n+ - 	Matches any string that contains at least one n
 * n* -		Matches any string that contains zero or more occurrences of n
 * n? - 	Matches any string that contains zero or one occurrences of n
 * */



/* 
 * Using test() method
 * ----------------------
 * The test() method search a string for a pattern and return true or false 
 * */

let patt = /e/;
patt.test("The best things in life are free!"); // true 
/e/.test("The best things in life are free!"); // true


/* 
 * Using exec() 
 * -------------------
 * It searches a string for a specified pattern, and returns the found text as an object.
 * */

var obj = /e/.exec("The best things in life are free!");
document.getElementById("demo").innerHTML =
"Found " + obj[0] + " in position " + obj.index + " in the text: " + obj.input;
// Found e in position 2 in the text: The best things in life are free!





