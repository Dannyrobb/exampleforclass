//Loops

// for (let i = 0; i < 10; i++) {
//   console.log(i);
// }

// for (let i = 10; i > 0; i--) {
//   console.log(i);
// }

//Exercise
// for (let i = 0; i <= 15; i++) {
//   if (i % 2 == 0) {
//     console.log(`${i} is an even number`);
//   } else {
//     console.log(`${i} is an odd number`);
//   }
// }

//For in loop = OBJECTS
// let person = { fname: "John", lname: "Doe", age: 25 };
// console.log(person["fname"]);
// console.log(person.fname);
// for (let x in person) {
//   console.log(person[x]);
// }

//For of loop = ARRAYS
// let colors = ["blue", "yellow", "red"];
// for (let x of colors) {
//   console.log(x);
// }

// for (let i = 0; i < colors.length; i++) {
//   console.log(colors[i]);
// }

//While Loop
// let data = prompt("Welcome user, please enter a password");
// let data = "supersecretpassword";

// while (data != "supersecretpassword") {
//   data = prompt("Wrong password, try again");
// }

// alert("welcome user..");

//Do While Loop
// let data = "supersecretpassword";
// do {
//   data = prompt("Please enter a correct password");
// } while (data != "supersecretpassword");

//Functions

// function drinkCoffee() {
//   console.log("I drink coffee in the morning, also afternoon");
// }

// drinkCoffee();

//Function parameters

// function userInfo(username, userAge) {
//   console.log(`My name is ${username} and I am ${userAge} years old`);
// }
// userInfo("bob", 26);
// userInfo("sam", 55);
// userInfo("Delilah", 60);

// function calculate(x, y) {
//   console.log(x + y);
// }
// calculate(5, 3);

//Default parameter
// function userInfo(username, userAge = 26) {
//   console.log(`My name is ${username} and I am ${userAge} years old`);
// }

// userInfo("bob");

//Local / Global variables

// function userInfo(username, userAge) {

//    function moreInfo(){
//     let myName = "sam";

//    }
//    console.log()
// }

//RETURN
// function add(x, y) {
//   console.log("before return");

//   return x + y;
// }

// let result1 = add(1, 2);
// console.log(result1);

// let result2 = add(2, 2);
// console.log(result2);

//Object methods
// let person = {
//   firstName: "Sarah",
//   eyeColor: "blue",
//   eat: function () {
//     console.log("sarah eats sushi");
//   },
// };

// person.eat();

let person = {
  firstName: "Sarah",
  eyeColor: "blue",
  favoriteFood: "sushi",
  eat: function () {
    console.log(`${this.firstName} eats ${this.favoriteFood}`);
  },
};

let person1 = {
  firstName: "bob",
  eyeColor: "green",
  favoriteFood: "burger",
  eat: function () {
    console.log(`${this.firstName} eats ${this.favoriteFood}`);
  },
};
person.eat();
person.eat();
person.eat();
person.eat();
person.eat();
person1.eat();
