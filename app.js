/* Data Types - 7
Primitive - String, Number, Null, Undefinied, Boolean, Symbol
Object - Arrays, functions and objects
Typeof Operator - Used to used the type of a variable or value
const string ="Saikumar Alet";
const number = 23;
const nullExample=null;
const undefinedExample;
const booleanExample1=true;
const booleanExample2=false;
console.log(typeof string);
console.log(typeof "saikumar Aleti");
console.log(typeof number);
console.log(typeof nullExample);
console.log(typeof undefinedExample);
console.log(typeof booleanExample1);
console.log(typeof booleanExample2);
 */

/* Arrays, Functions and Objects
Arrays -[], 0 index based
const friends = [
  "Saikumar1",
  "Saikumar2",
  "Saikumar3",
  45,
  null,
  undefined,
  true,
];
console.log(typeof friends);
console.log(friends[3]);
friends[3] = 3;
console.log(friends[3]);
friends[7] = "Saikumar4";
console.log(friends);
 */

/* Functions are used to reduce the redundancy is your code. You can declare them once and you them any number of times
Functions - declare and invoke

function hello() {
  console.log("Hello Saikumar1");
  console.log("Hello Saikumar2");
}

//some code here

hello();

// some code here

hello();

// some code here */

/* //Parameters are placeholders or local variables when we declare a function. They become arguments when we call invoke or run the function

function greet(name1, name2) {
  console.log("Hello there " + name1);
  console.log("Hello there " + name2);
}
greet("Saikumar1", "Saikumar2");
greet("Pravalika Aleti1", "Pravalika Aleti2");
const name2 = "saikumar2";
greet(name2, "Saikumar Aleti3"); */

//Functions returning values
//For example if we wish to convert to widht and height of a wall into centimeters we can use a function for that
/* const widthInch = 100;
const heightInch = 200;
function WidthHeightConverter(value) {
  return value * 2.54;
}
const widthCentimeter = WidthHeightConverter(widthInch);
const heightCentimeter = WidthHeightConverter(heightInch);

const widthHeight = [widthCentimeter, heightCentimeter];
console.log(widthHeight);
//Whatever is written after return will be ignored */

//function expression is a different way of writing a function where we create a variable assin a functin and use the variable going forward
/* function addValues(num1, num2) {
  return num1 + num2;
}
const firstValue = addValues(2, 3);
const secondValue = addValues(3, 4);

const add = (num1, num2) => num1 + num2; // This is same as const add = function (num1, num2){ return num1+num2;}

const allValues = [firstValue, secondValue, add(5, 6)];
console.log(allValues); */

//Objects in JS are collections of properties. Properties are also refrerred to as Keys. Keys have values. If the value of a key is a function then it is called a method. You access the values we will be using Dot Notation
/* const employee = {
  name: "Saikumar Aleti",
  age: 24,
  maritalStatus: false,
  education: true,
  degrees: ["Bachelor's", "Master's"],
  sayHello() {
    console.log("Hey, this is Saikumar Aleti");
  },
};
console.log(employee.name);
console.log(employee.age);
console.log(employee.degrees);
employee.sayHello(); */

//Conditional Statements - The way conditional statements work is if a statement is true, a block of will be executed but if it is fase, block of code will be skipped
//Comaparision Operators >, <, >=, <=, ==, ===, !=, !==
// == checks only the values
//=== checks the values and also the data type of the values
//!= checks only the values
//!== checks the values and also the data type of the values

//Logical Operators (|| - OR and && - AND)

/* const num1 = 2;
const num2 = 3;
if (num1 === 2 || num2 === 4) {
  console.log("Atleast one value match");
} else {
  console.log("None of the values match");
} */
//Multiple if statements or else if statements or switch statement
//Rolling a dice 1-6
/* // const dice = 20;
// if (dice === 1) {
//   console.log("You got one");
// }
// if (dice === 2) {
//   console.log("You got two");
// }
// if (dice === 3) {
//   console.log("You got three");
// }
// if (dice === 4) {
//   console.log("You got four");
// }
// if (dice === 5) {
//   console.log("You got five");
// }
// if (dice === 6) {
//   console.log("You got six");
// }
// if (dice < 1 || dice > 6) {
//   console.log("You didn't role the dice properly");
// }

// Don't use else with mutiple if statements, it only considers last if statementfor else condition. */
// const dice = 20;
// if (dice === 1) {
//   console.log("You got one");
// } else if (dice === 2) {
//   console.log("You got two");
// } else if (dice === 3) {
//   console.log("You got three");
// } else if (dice === 4) {
//   console.log("You got four");
// } else if (dice === 5) {
//   console.log("You got five");
// } else if (dice === 6) {
//   console.log("You got six");
// } else {
//   console.log("You didn't role the dice properly");
// }
/* // const dice = 2;
// switch (dice) {
//   case 1:
//     console.log("You got one");
//     break;
//   case 2:
//     console.log("You got two");
//     break;
//   case 3:
//     console.log("You got three");
//     break;
//   case 4:
//     console.log("You got four");
//     break;
//   case 5:
//     console.log("You got five");
//     break;
//   case 6:
//     console.log("You got six");
//     break;
//   default:
//     console.log("You didn't role the dice properly");
// } */

//Loops - Loops allow you to repeat a block of code as long as a condition is true
// While Loop, Do While Loop, For Loop
// You need to use let for loops because we will be incremeting or decrementing the values
/* let num1 = 10;
while (num1 > 0) {
  console.log("I have " + num1 + " rupees!");
  num1--;
}
 */
//Do while is different because we run the code block first and then the condition because of which the code gets executed atleast once even if the condition fails
// let num1 = 0;
// do {
//   console.log("I have " + num1 + " rupees!");
//   num1--;
// } while (num1 > 0);
// let money = 0;
// do {
//   console.log("I have " + money + " dollars!");
//   money++;
// } while (money < 10);

//For loop
// for (let i = 10; i > 0; i--) {
//   console.log("Value of i is: " + i);
// }

//string properties and methods
//We have properties and methods for strings because of wrapper string obejct
/* let fullName = "Saikumar Aleti";
console.log(fullName.length);
console.log(fullName.toLowerCase());
console.log(fullName.toUpperCase());
console.log(fullName.trim());
console.log(fullName.charAt(0));
console.log(fullName.charAt(fullName.length - 1));
console.log(fullName.indexOf("S"));
console.log(fullName.indexOf("A"));
console.log(fullName.startsWith("Sa"));
console.log(fullName.endsWith("ti"));
console.log(fullName.includes("ai"));
console.log(fullName.toLowerCase().includes("saik"));
console.log(fullName.slice(0, 8));
console.log(fullName.slice(-5)); */

//Template Literals (ES6+)
//Backtick characters - Above Tab Key and to the left of 1
// You can use ${} to insert an expression into a string, this is called interpolation

/* const fullName = "Saikumar Aleti";
const age = 24;
console.log("Hey this is " + fullName + " and I'm " + age + " years old!");
console.log(`Hey this is ${fullName} and I'm ${age} years old!!!`); */

//Array properties and methods
/* let names = ["Saikumar1", "Saikumar2", "Saikumar3", "Saikumar4"];
//length - length of an array
console.log(names.length);
console.log(names[names.length - 1]);
//concat - combine two arrays
let lastNames = ["Aleti1", "Aleti2", "Aleti3", "Aleti4"];
const allNames = names.concat(lastNames);
console.log(allNames);
// Reverse array - reversing an array
console.log(allNames.reverse());
//unshift - inserting at the beginging of an array
allNames.unshift("Saikumar0");
console.log(allNames);
//shift - Removing an item from the begining of an array
allNames.shift();
console.log(allNames);
//push - inserting at the end of an array
allNames.push("Saikumar0");
console.log(allNames);
//pop - removing an element from the end of an array
allNames.pop();
console.log(allNames);
//splice - cuts elements form an array, mutates the original array (Make changes to the original array)
const splice = allNames.splice(0, 1);
console.log(splice);
console.log(allNames);
 */

/* //Practice
let firstNames = ["Saikumar1", "Saikumar2", "Saikumar3"];
let lastName = "Aleti";
console.log(firstNames);
let fullNames = [];
for (let i = 0; i < firstNames.length; i++) {
  fullNames.push(`${firstNames[i]} ${lastName}`);
}
console.log(fullNames);
 */

//functions, return, if, arrays, for loop
// let foodExpense = [100, 200, 300, 100];
// let rentExpense = [2000, 2000, 2000, 2000];

// function totalExpense(array) {
//   let total = 0;
//   for (let i = 0; i < array.length; i++) {
//     total += array[i];
//   }
//   if (total > 1000) {
//     console.log(`You're spending too much!`);
//     return total;
//   }
//   console.log(`You're spending is in the limit!`);
//   return total;
// }

// let foodExpenseTotal = totalExpense(foodExpense);
// let rentExpenseTotal = totalExpense(rentExpense);
// let otherExpenseTotal = totalExpense([200, 100, 50, 30, 20]);
// let allExpenses = {
//   food: foodExpenseTotal,
//   rent: rentExpenseTotal,
//   other: otherExpenseTotal,
// };
// console.log(allExpenses);

//NUll and Undefined data types both represent no value
//Undefined - Javascript could not find a value for this (Examples inlude, variables without values, missing fuction parameters, missing object properties)
//Null - In case of Null, developer sets the value.
/* let number1 = 20 + null; //20+0;
let number2 = 20 + undefined; //20+0;
console.log(number1);
console.log(number2); */

//Truthy and Falsy
//In javascript all the values are either Truthy or Falsy. Even though the value is not a boolean javascript can evaluate the values to either Truthy or Falsy. It's easier to remember the Falsy values as there are only few, apart from that pretty much everything is true.
//Falsy values - "", '', ``, 0, -0, NaN, false, null, undefined
/* const bool1 = true;
const bool2 = 2 > 1;
const text1 = "";
const text2 = "Saikumar";
if (bool1) {
  console.log("This value is a Truthy");
} else {
  console.log("This value is a Falsy");
}
if (bool2) {
  console.log("This value is a Truthy");
} else {
  console.log("This value is a Falsy");
}
if (text1) {
  console.log("This value is a Truthy");
} else {
  console.log("This value is a Falsy");
}
if (text2) {
  console.log("This value is a Truthy");
} else {
  console.log("This value is a Falsy");
}
 */

/* //unary operator - only one operand - example, typeof
let name1 = "Saikumar Aleti";
console.log(typeof name1);
//binary operator - two operands - declaration of a varibale and assignment
let name2 = "Saikumar Aleti";
//ternary operators - three operands
//syntax - condition ?  (runs if true) : (runs if flase)
name2
  ? console.log("This value is a Truthy")
  : console.log("This value is a Flasy"); */

//Global Scope Vs Local Scope
//Any variable outside of the code block {} is said to be in the global scope. Can be accessed anywhere in the program.
//Gotchas: Name collisions (you cannot use an already declared name, it throws an Identifier already taken exception), modify by mistake in fuctions
//you can also modify the values from an inner function

/* let firstName = "Saikumar1";
firstName = "Saikumar2";

console.log("This is before calling the fuction : " + firstName);

function calculalate() {
  //some code here
  firstName = "Saikumar3";
  console.log("This is from function : " + firstName);
  function inner() {
    //some code here
    firstName = "Saikumar4";
    console.log("This is from inner function : " + firstName);
  }
  inner();
}

calculalate();

if (true) {
  firstName = "Saikumar5";
  console.log("This is from IF statement : " + firstName);
} */

//Local scope - cannot be accessed outside the code blocks {}
//if you don't use a keyword (let or const) while creating a variable within a code block, it becomes global variable

/* let name1 = "Saikumar1";
function calculalate() {
  let name2 = "Saikumar2";
  name3 = "Saikumar 3";
  console.log("This is from code block : " + name2);
  console.log("This is from code block : " + name3);
}
calculalate();
console.log("This is from outside the code block : " + name1);
console.log("This is from outside the code block : " + name3);
console.log("This is from outside the code block : " + name2); */

//variable lookup
//The way JS looks up for a variable is, it first looks for the variable in the current scope, if there is no variable with the same name in the current scope, it looks one level above the current scope. It'll continue this process till it reaches global scope.

// let number1 = 10;
// let sum = 0;
// function add(num2, num3) {
//   let number1 = 20;
//   function inneradd(num4, num5) {
//     //let number1 = 30;
//     let sum = number1 + num4 + num5;
//     return sum;
//   }
//   let total = inneradd(num2, num3);
//   return total;
// }
// sum = add(1, 2);
// console.log(sum);

//Note - Even though a fuction is enclosed in a fuction, values declared in the second level fuction won't be accessible for use in the level one function.

//Callback Fuctions, High Order Functions, Functions as First Class Objects / Citizens
//Functions are first class objects can be stored in a variable (expression), passed as an argument to another function, can can be returned from a function
//Higher Order Function is a function that accepts a functions as an argument or that returns a function as result
//Callback function is a function that is passed to another function as an argument and get executed inside that function.
/* function greetings(name) {
  return `Good morning ${name.toUpperCase()}`;
}
function greet(name, callback) {
  let myName = "Saikumar Aleti";
  console.log(`${callback(name)}, my name is ${myName.toUpperCase()}!`);
}
greet("Pravalika", greetings); */

//Powerful Array Methods
//forEach
//ForEach method iterates over an array without the need for a for loop.
//forEach does not return a new array
/* const people = [
  { name: "Saikumar1", age: 24, Job: "software Engineer" },
  { name: "Saikumar2", age: 26, Job: "Web Developer" },
  { name: "Saikumar3", age: 28, Job: "RBI Grade B officer" },
];
 */
/* function showPeople(peopleArray) {
  console.log(peopleArray);
  console.log(peopleArray.name.toUpperCase());
}
people.forEach(showPeople); */
/* people.forEach(function (item) { //setting up anonymous functions
  console.log(item.Job.toUpperCase());
}); */

//map
//map method does return a new array
//does not change the size of the original array
//uses values from original array when making new ones

//all the time we will not able to use methods to traverse the DOM tree. Sometimes we need use DOM properties to traverse the DOM tree.
//February 20, 2022
//childNodes retruns all childNodes including whitespace which is treated as a text node

// const result1 = document.querySelector("#list");
// const allChildNodes = result1.childNodes;
// console.log(allChildNodes);
// //Better to get the children would be to use a children property

// const result2 = document.querySelector("#list");
// const allChildren = result2.children;
// console.log(allChildren);

// //You can use firstChild and lastChild to get the first and last nodes but the problem but the first and last nodes might be text nodes (Whitespace).

// console.log(result2.firstChild);
// console.log(result2.lastChild);

/* const firstListElement = document.querySelector(".firstElement");
const parentElement = firstListElement.parentElement;
parentElement.style.backgroundColor = "grey";
parentElement.style.color = "blue"; */

//next sibling and previous sibling can also be traverse the DOM tree. But be careful when using these because also return whitespace. To traverse the whitespace, you can use the nextSibling or previousSibling twice
//if the element doesn't exist, for example nextSibling on last element, you'll get a null.

/* const firstListItem = document.querySelector(".firstElement");
const secondListItem = firstListItem.nextSibling.nextSibling;
console.log(secondListItem);
const thirdListItem = secondListItem.nextSibling.nextSibling;
console.log(thirdListItem);

const lastListItem = document.querySelector("#lastElement");
const secondLastItem = lastListItem.previousSibling.previousSibling;
console.log(secondLastItem);

const testingNull = lastListItem.nextSibling.nextSibling;
console.log(testingNull); */

//You can right away grab the next or previous element by using nextElementSibling and previousElementSibling. Here also you may encounter null if you're traversing in the wrong direction.

/* const firstListItem = document.querySelector(".firstElement");
const secondListItem = firstListItem.nextElementSibling;
console.log(secondListItem);

const lastListItem = document.querySelector("#lastElement");
secondLastListItem = lastListItem.previousElementSibling;
console.log(secondLastListItem);
 */

//textValue can be used to get the text content of the node.
/* const heading = document.getElementsByClassName("special");
console.log(heading);
const text = heading[0].textContent;
console.log(text);
 */

//getAttribute() and setAttribute can be used to get attributes and set the attributes dynamically.

/* const heading = document.querySelector(".special");
console.log(heading.getAttribute("id"));

const link = document.querySelector("a");
console.log(link.getAttribute("href"));

link.setAttribute("href", "www.facebook.com");
console.log(link.getAttribute("href"));

link.setAttribute("class", "special");

console.log(document.querySelectorAll(".special"));
 */

//className and classList
//className will overwrite the existing class value
//Using classList add or remove multiple class at once

/* const first = document.getElementById("first");
const second = document.getElementById("second");
const third = document.getElementById("third");
//first.className = "colors";
//first.className = "text";
first.className = "colors text";
console.log(first.className);
second.classList.add("colors", "text");
console.log(second.classList);
second.classList.remove("text", "colors");
second.classList.add("colors");
let result1 = third.classList.contains("colors");
let result2 = third.classList.contains("text");
if (!result1) {
  third.classList.add("colors");
}
if (!result2) {
  third.classList.add("text");
}
console.log(third.classList);
 */
//Creating elements dynamically
//using createElement("Element Type") you can create an element dynamically
//using createTextNode("Enter your text") you can create text for your element
//using appendChild(Element Name) you can first append your text to your newly created element and then append the newly created element to a DOM object.

/* const newElement = document.createElement("h1");
const elementText = document.createTextNode("I'm fourth heading!");
newElement.appendChild(elementText);
const mainDiv = document.querySelector(".main");
mainDiv.appendChild(newElement);
if (!mainDiv.classList.contains("colors")) {
  mainDiv.classList.add("colors");
}
const lastElement = document.createElement("h1");
const lastElementText = document.createTextNode("I'm the last heading!");
lastElement.appendChild(lastElementText);
document.body.appendChild(lastElement); // This will add element at the end of the body
lastElement.classList.add("colors"); */

//You can also a different method (insertBefore('element', 'location)) to appendChild to append newly created element to an element in the DOM. Remember, you still need to use createElement() to create the element and createTextNode to create the text node and use appendChild() to append textNode to the newly created element. syntax is object.inserBefore(Element,location in the object)
/* const newElement = document.createElement("h1");
const elementText = document.createTextNode("I'm the zeroth heading!");
newElement.appendChild(elementText);
const mainDiv = document.querySelector(".main");
document.body.insertBefore(newElement, mainDiv);
if (!mainDiv.classList.contains("colors")) {
  mainDiv.classList.add("colors");
}
const secondLastElement = document.createElement("h1");
const secondLastElementText = document.createTextNode(
  "I'm the second last heading!"
);
secondLastElement.appendChild(secondLastElementText);
// This will add element at the end of the body
secondLastElement.classList.add("colors");
mainDiv.insertBefore(secondLastElement, third); */

//replaceChild("new", "old") can be used to replace a child with a new one

/* const newElement = document.createElement("h1");
const elementText = document.createTextNode("I'm the zeroth heading!");
newElement.appendChild(elementText);
const mainDiv = document.querySelector(".main");
document.body.insertBefore(newElement, mainDiv);
if (!mainDiv.classList.contains("colors")) {
  mainDiv.classList.add("colors");
}
const secondLastElement = document.createElement("h1");
const secondLastElementText = document.createTextNode(
  "I'm the second last heading!"
);
secondLastElement.appendChild(secondLastElementText);
// This will add element at the end of the body
secondLastElement.classList.add("colors");
mainDiv.insertBefore(secondLastElement, third);

const mainHeading = document.createElement("h1");
const mainHeadingText = document.createTextNode(`Dynamically created heading`);
mainHeading.classList.add("colors");
mainHeading.appendChild(mainHeadingText);
document.body.replaceChild(mainHeading, newElement); */

//prepend method - prepend(element) is used to insert element at the begining of the body element
//innerHTML property - Using innerHTML property you can text with out creating a text node
/* const heading = document.createElement("h1");
heading.innerHTML = `I'm the dynamically created heading!`;
document.body.prepend(heading); */

//removing elements from the DOM
//remove method - remove () can be used to remove an entire object
//removeChild method - removeChild("Element to be removed") can be used to remove a child element from an object syntax is parent.removeChild(Child);

/* const element = document.querySelector("#result");
element.remove(); */
/* const element = document.querySelector("#result");
const heading = element.querySelector("h1"); //running query selector on the nodes we are getting back
element.removeChild(heading); */

//Differences between innerHTTML property and textContent property
//innerHTML gives the text content of the element including HTML structure
//textContent only gives the textContent of the element
/* const heading = document.querySelector("#mainHeading");
const mainDiv = document.querySelector("#mainDiv");
const list = document.querySelector("#list");
console.log(heading.textContent);
console.log(mainDiv.innerHTML);
console.log(list.textContent);
console.log(list.innerHTML);

const randomVariable = "random value";

//Using innerHTML you can easily create HTML elements

const newElement = document.createElement("h1");
newElement.innerHTML = "I'm last heading";
document.body.appendChild(newElement);

const newUl = document.createElement("ul");
newUl.innerHTML = `<li id="first">I'm the first list item! ${randomVariable}</li>
      <li>I'm the second list item</li>
      <li>I'm the third list item</li>`;
document.body.appendChild(newUl); */

//innerHTML can be used as textContent by textContent cannot be used as innerHTML

//It is better not to use CSS properties in JavaScript. Write your HTML in HTML, CSS in CSS and JavaScript in JavaScript
//If you go about setting CSS properties in JavaScript, you need to add property by property instead you can set all your properties in CSS class and add the class to element using classList or className.
/* const title = document.querySelector("#mainHeading");
title.classList.add("title"); */

//events in JavaScript make things happen dynamically
//Core principles of all the events remain the same. First we need to select an element, listen for events on the element by addEventListener(). addEventListener() is a higher order fuction, it required two parameters, event type and what to do upon event.
//Most basic JS event is click event
/* const btn = document.querySelector(".btn");
const mainHeading = document.querySelector("#mainHeading");
btn.addEventListener("click", function () {
  mainHeading.classList.add("blue");
});
 */

//Let's pass the function as a reference and use if statement the heading already has the class
/* const btn = document.querySelector(".btn");
const mainHeading = document.querySelector("#mainHeading");
function styleProperties() {
  if (mainHeading.classList.contains("blue")) {
    mainHeading.classList.remove("blue");
  } else {
    mainHeading.classList.add("blue");
  }
}
btn.addEventListener("click", styleProperties);
 */

//click event fires after full action occurs i.e., after mousedown event and mouseup event
//mouseenter and moseleave can be used give an hover effect. Applies properties when the mouse enters and removes the properties when the mouse leaves the elements
/* const btn = document.querySelector(".btn");
const mainHeading = document.querySelector("#mainHeading");
btn.addEventListener("click", function () {
  console.log("click");
});
btn.addEventListener("mousedown", function () {
  console.log("mouse down");
});
btn.addEventListener("mouseup", function () {
  console.log("mouse up");
});
mainHeading.addEventListener("mouseenter", function () {
  mainHeading.classList.add("red");
});
mainHeading.addEventListener("mouseleave", function () {
  mainHeading.classList.remove("red");
}); */

//Key events - keypress, keydown, keyup
//Key events are basically input event. You setup form and collect the values from the user.
//keypress- when key is pressed
//keydown - when a key is down
//keyup - when a key is released
/* const input = document.querySelector("#name");

input.addEventListener("keypress", function () {
  console.log(`You pressed a key!`);
});
input.addEventListener("keydown", function () {
  console.log(`Key is down!`);
});
input.addEventListener("keyup", function () {
  console.log(`${input.value}`);
});
 */

//You can pass the event as an argument to our callback function. You can event object properties to get the info about the event. event.type can be used to get the type of the event. event.currentTarget property can be used to select the document object on which the event is called upon. preventDefault () can be used to prevent the default behaviour of an object in the document when you submit a form, page refreshes and when you click on a link, the default behaviour is to scroll to the top of the page.
/* const h1 = document.getElementById("heading");
const btn = document.getElementById("btn");
const link = document.getElementById("link");
btn.addEventListener("click", function (event) {
  console.log(event.type);
  console.log(event.currentTarget);
});
function h1Fuction(event) {
  console.log(event.currentTarget.parentElement);
  event.currentTarget.classList.add("blue");
}
h1.addEventListener("click", h1Fuction);

function linkFunction(event) {
  console.log("You clicked the link");
  event.preventDefault();
}
link.addEventListener("click", linkFunction); */

//this keyword can be used in place event.currentTarget() but it is better to avoid this keyword as it doesn't work with arrow fuctions.

//Difference between target and currentTarget properties.
// currentTarget always refers to the element on which the event handler is called up on.
//target identifies the element on which event occured.

const btns = c;
