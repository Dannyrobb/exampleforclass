const people = ["Greg", "Mary", "Devon", "James"];

//1
// people.shift();
// console.log(people);

// //2
// people.splice(2, 1, "Jason");
// console.log(people);

// //3
// people.push("David");
// console.log(people);

// //4
// // console.log(people.indexOf("Mary"));

// //5

// const newArray = people.slice(1, 3);
// console.log(newArray);

// for (let name of people) {
//   console.log(name);
// }

// let userNumber;
// do {
//   userNumber = Number(prompt("please enter a number"));
// } while (userNumber < 10);

//Exercise 4: Building Managment
// const building = {
//   numberOfFloors: 4,
//   numberOfAptByFloor: {
//     firstFloor: 3,
//     secondFloor: 4,
//     thirdFloor: 9,
//     fourthFloor: 2,
//   },
//   nameOfTenants: ["Sarah", "Dan", "David"],
//   numberOfRoomsAndRent: {
//     sarah: [3, 990],
//     dan: [4, 1000],
//     david: [1, 500],
//   },
// };

// console.log(building.numberOfFloors);
// console.log(
//   `On floor 1 we have ${building.numberOfAptByFloor.firstFloor} and on floor 3 we have ${building.numberOfAptByFloor.thirdFloor}`
// );

// console.log(building.nameOfTenants[1], building.numberOfRoomsAndRent.dan[0]);

// if (building.numberOfRoomsAndRent.sarah[1] + building.numberOfRoomsAndRent.david[1] > building.numberOfRoomsAndRent.dan[1]) {
//   building.numberOfRoomsAndRent.dan[1] = 1200;
// }
// console.log(building.numberOfRoomsAndRent.dan[1]);

// function drinkCoffee() {
//   console.log("The user drinks coffe in the morning");
// }

// drinkCoffee();

// function userInfo(username, userAge) {
//   console.log(`My name is ${username} and my age is ${userAge}`);
// }
// userInfo("Daniel", "26");
// userInfo("David", "28");
// userInfo("Michelle", "24");
// userInfo("Shira", "26");

// function calc(x, y) {
//   console.log(x + y);
// }

// calc(6, 2);

// function userInfo(userName, userAge = 20) {
//   console.log("My name is " + userName + ", my age is " + userAge);
// }
// userInfo("Daniel",);

// console.log(eyeColor)

//GLOBAL SCOPE
// const outside = 2;

// function userMoreInfo() {
//   //LOCAL SCOPE
//   const fruit = "apple";

//   function innerFunction() {
//     console.log(fruit);
//   }
// }

// userMoreInfo();

//Calc Return Example
// function calc(x, y) {
//   let sum = x + y;
//   return sum;
// }
// let calcResult = calc(1, 5);
// console.log(calcResult);

//Userinfo Return Example
// function userInfo(userName, userAge) {
//   let result = "My name is " + userName + ", my age is " + userAge;
//   return result;
// }

// let funcResult = userInfo("Dani123", "26");
// console.log(funcResult);

// function userInfo(userName, userAge) {
//   let result = "My name is " + userName + " my age is " + userAge;
//   return "hey"; //exit the function after returning
//   console.log(result);
// }

// let girlInfo = userInfo("Sarah", 22);
// console.log(girlInfo); //hey

// function userInfo(userName, userAge) {
//   if (userName !== "Sarah") {
//     return;
//   }
//   alert("You are not the right person");
// }

// userInfo("Daniel");

// let person = {
//   firstName: "Sarah",
//   eyeColor: "blue",
//   eat: function () {
//     console.log("I love chocolate");
//   },
// };

// person.eat();

// let person = {
//   firstName: "Sarah",
//   eyeColor: "blue",
//   eat: function () {
//     console.log("My name is " + this.firstName + " I love chocolate and my eye color is " + this.eyeColor);
//   },
// };

// person.eat();
