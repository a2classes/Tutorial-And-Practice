// console.log("Hello World");

// var d = "this is d";
// console.log(d);

// var number = 67;
// console.log(number);

// Manupulating DOM using JavaScript
// inpug vatiable
// var age = prompt("Whait is your age?");

// document.getElementById("coolExample").innerHTML = age;

// alert('yo you');

// number
// var num1 = 5;
// num1++;
// num1++;
// num1++;
// num1 = num1 + num1;
// console.log(num1%5);
// console.log(5 * 4);
// console.log(50 / 5);
// num1 += 22;
// console.log(num1);
// num1 -= 10;
// console.log(num1);

// function

// function fun() {
//   console.log("this is a function");
// }

// fun();

// another function

/*
this function will take your name and then display your name with a Hello in front of it.
*/

// function greet() {
//   var name = prompt("What id your name");
//   var result = "Hello " + name; //string concatenation
//   console.log(result);
// }
// greet();

// function greet1(yourName) {
//   var result = "Hello " + yourName; //string concatenation
//   console.log(result);
// }
// var name1 = prompt("What is your name?");
// greet1(name1);

// function with arguments

// function add(num1, num2) {
//   var sum = num1 + num2;
//   console.log(sum);
// }

// add(5, 4);
// add("Damn", " you dam");

// while loops

// var number2 = 0;

// while (number2 < 100) {
//   number2 += 1;
//   console.log(number2);
// }

// for loops

// for (let num = 0; num < 200; num++) {
//   console.log(num);
// }

// data types

let yourAge = 22; //number
let yourName = "Abhishek Dam"; //string
let name = { first: "abhsihek", last: "dam" }; //object
let truth = false; //boolean
let groceries = ["Apple", "Potato", "Doritos"]; //array
let random; //undefined
let nothing = null; //value null

//stringts in javascript

// let fruit = "apple, banana, orange, berry";
// let veg = "tomato, potato";
// let newFruit = "banana\napple"; //new line
// console.log(fruit);
// console.log(newFruit);

// console.log(fruit.length);
// console.log(newFruit.indexOf(""));
// console.log(fruit.indexOf("pp"));
// console.log(veg.indexOf(","));
// console.log(veg.slice(0, 2));
// console.log(veg.replace("to", "po"));
// console.log(veg.replace("to", "po"));
// console.log(veg.toUpperCase());
// console.log(veg.toLowerCase());
// console.log(veg.charAt(2));
// console.log(veg[3]);
// console.log(fruit.split(','));  //split by coma and converts it into an array
// console.log(fruit.split(''));   //split by char and converts it into an array

// Arrays in javascript

let fruit = [
  "apple",
  "oranges",
  "pineapple",
  "dragon-fruit",
  "mango",
  "berry",
  "kiwi",
];

fruits = new Array(
  "banana",
  "chiku",
  "watermelon",
  "blueberry",
  "melon",
  "papaya",
  "sugarcane"
);

// console.log(fruit[5]);
// console.log(fruits[5]);

// fruit[5] = "pear";
// console.log(fruit[5]);

// for (let i = 0; i < fruit.length; i++) {
//   console.log(fruit[i]);
// }

// array common methods

// console.log("converts any array into string :-", fruit.toString());

// console.log(
//   "joins the array with anything in the parenthesis :-",
//   fruit.join(" - ")
// );

console.log(fruit.pop(), fruit); //delets last item
console.log(fruit.push("stop thinking"), fruit); //appends item in the last
console.log(fruit.shift()); //removes the first element
console.log(fruit);
console.log(fruit.unshift("get over it")); //adds item in the begining
console.log(fruit);

//adding two arrays togather
let shoppingList = fruit.concat(fruits);
console.log(shoppingList);

console.log(shoppingList.reverse());

let someNumber = [3, 2, 6, 7, 57, 323, 3, 78, 9, 9, 568, 4, 9];

console.log(someNumber.sort());
