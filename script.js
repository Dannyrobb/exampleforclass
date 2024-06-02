//Properties

// let x = "this is a string";

// console.log(x.length);

//Methods

// console.log(x.toUpperCase());

// console.log(x.substring(0, 10));

//Numbers
// let yourAge = prompt("Enter your age");
// console.log(typeof yourAge);
// let yourAgeToNumber = Number(yourAge);
// let myAge = 27;
// console.log("Together our ages are " + (myAge + yourAgeToNumber));

//NAN
// let result = "hello" * 5;
// console.log(result);

//Arrays
// let colors = ["red", "green", "blue"];
// colors.splice(2, 0, "yellow", "purple");
// console.log(colors);

// let animals = ["cat", "dog", "fish", "rabbit", "cow"];
// animals.splice(3, 1, "horse");
// console.log(animals);

//Comparison
// let x = 5;
// let y = "5";
// console.log(x == y);
// console.log(x === y);

// let x = 1;

// let y = 5;

// let z = 10;
// //and
// console.log(1 < 5 && 5 > 10);
// //or
// console.log(1 < 5 || 5 > 10);

//Conditionals IF STATEMENTS

// let age = 18;
// if (age > 18) {
//   console.log("you are over 18!");
// } else if (age < 18) {
//   console.log("you are under 18");
// } else {
//   console.log("you are 18");
// }

//Exercise

// let age = prompt("What is your age?");
// let numberAge = Number(age);
// console.log(typeof numberAge);

// if (numberAge < 18) {
//   console.log("You are too young.");
// } else if (numberAge == 18) {
//   console.log("congratz on your first year of driving");
// } else {
//   console.log("Powering on ,You are old enough to drive");
// }

//Switch Case
// let favoriteFruit = "hamburger";

// switch (favoriteFruit) {
//   case "Apple":
//     console.log("I like the fruit apples");
//     break;
//   case "Banana":
//     console.log("I like the fruit bananas");
//     break;
//   case "Orange":
//     console.log("I like the fruit oranges");
//     break;
//   default:
//     console.log("I like " + favoriteFruit);
// }

//Objects

let person = {
  fname: "Daniel",
  lname: "Smith",
  age: 27,
};
console.log(person);

person.age = 28;

console.log(person);

person.country = "USA";
console.log(person);

delete person.fname;
console.log(person);
