// WHAT IS THIS EVEN DOING?

// For questions 1-3, each code block is syntactically and logically correct. Your job is to describe what is happening.
// They are in isolation -- variables in one question do not affect other questions.
// Describe the code as it would be run, and make sure you give us the console.log's value at the end.
// (Don't just say 'we console log the variable' -- instead say something like 'we console log 'yes'')


// 0. WRITE YOUR DESCRIPTION HERE
// //EXAMPLE. We make a variable called number and set it to 1 as a number.
// Then we increment the number variable. Number is now 2.
// We check if number is greater than or equal to 2. 2 is equal to 2, so
// we console.log 'yes'.

//CODE
/*
let number = 1;

number++;

if (number >= 2) {
  console.log('yes');
}

*/


// 1. WRITE YOUR DESCRIPTION HERE
// we make a string variable called name and set it to Dane
// next we check to see if the name is Mary, if so then we will console.log 'Hi Mary'
// in line 40 it states that if the name does not = Mary, then it will console.log 'How do you do?'
//Lastly, the name is set to Dane; therefore console.log('How do you do?') will be the output.

//CODE
/*
let name = 'Dane';

if (name === 'Mary') {
  console.log('Hi, Mary!');
} else {
  console.log('How do you do?');
}


*/

// 2. WRITE YOUR DESCRIPTION HERE
// we make a variable called secret
// we make a variable called code and set it equal to 123
// we check to see if code is equal to 123, it is so we set secret equal to super and code is now 246
// we check to see if code is greater than 250, it is not so console.log(super)

//CODE
/*
let secret;

let code = 123;

if(code === 123) {
  secret = 'super';
  code = code * 2;
}

if (code > 250) {
  secret = 'duper'
}

console.log(secret)

*/

// 3. WRITE YOUR DESCRIPTION HERE
// we make a variable and set it equal to true
// we create a variable called age and set it equal to 34 as a number
// we make a variable called zip and set it equal to 55407 as a number
// we ask if isStudent is true and if the zip is greater than 80000, if so console.log(You're a student..)
// if not it checks if you are not a student and if your age is less than 30, if so console.log('what are your hobbies?')
// if not it checks if youb are a student, if true console.log(Welcome to Prime!)
// if not then it will console.log('How about the weather')
// Finally, because isStudent is set to true and the zip is less than 80000 and the age is set greater than 30, it will console.log('Welcome to Prime')

//CODE
/*
let isStudent = true;
let age = 34;
let zip = 55407;

if (isStudent === true && zip > 80000 ) {
  console.log(`You're a student on the West Coast!`);
} else if (isStudent === false || age < 30) {
  console.log('What are your hobbies?');
} else if (isStudent === true) {
  console.log('Welcome to Prime!');
} else {
  console.log('How about the weather?')
}

*/




// REVERSE
// Now, for questions 4-6, we'll give you a description and some code.
// Some of the code will NOT match the description.
// Comment above the problem code, and describe a potential solution.
// Look closely -- things are logically incorrect or missing and wrong in the code!

// EXAMPLE
// 0. (DESCRIPTION OF CORRECT BEHAVIOR)
// We make a variable called number and set it to 1 as a number.
// Then we increment the number variable. Number is now 2.
// We check if number is greater than or equal to 2.
// -- it is, so we console.log 'yes'

//CODE
/*
let number = 1;

// FIX - number-- decrements number, but the instructions ask to increment.
// Should be number++.
number--;

if (number >= 2) {
  console.log('yes');
}

*/



//4. We start with three variables -- colorOne is set to 'blue' and
// colorTwo is set to 'red', and mix is set to true. We check if mix is true
// -- it is, so we set colorOne and colorTwo to 'purple'

/*
// FIX - colorOne is set to red and colorTwo is set to blue but in the discription they are it is the opposite.
let colorOne = 'red';
let colorTwo = 'blue';
let mix = true;

if (mix === true) {
  colorOne = 'purple';
// FIX - in the discription it says to set colorOne and colorTwo to purple, however the code just sets colorOne to purple
}
*/

//5. We start with two variables -- temp is set to 40 and time is set to 4.
// We check if temp is higher than 39 and if time is greater or equal to  4
// -- they are so we console.log 'throw away the food!'

/*
let temp = 40;
const time = 4;

// FIX - '||' means 'or' not 'and', it should still console.log('throw away the food') but to match with the discription, it should read if (temp > 39 && time >= 4) {
if (temp > 39 || time >= 4) {
  console.log('throw away the food!');
}
*/

//6. We start with two variables -- age is set to 21 and minAge is set to 21.
// We check if age is greater than or equal to minAge
// -- it is, so we console.log 'enter'.

/*
let age = 21;
FIX - Thank you for explaining what the const VARIABLE is used for. 
const minAge = 21;

//FIX - the discription does not match up with code, it should be expressed if(minAge >= age) { >greater than, <lessthan
if(minAge <= age) {
  console.log('no entry');
} else {
  console.log('enter');
}
*/
