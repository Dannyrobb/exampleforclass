const age = 20;

// if (age > 20) {
//   console.log("You're a big boy");
// } else {
//   console.log("Else Block");
// }

// if (age < 20) {
//   console.log("Age is smaller than 20");
// } else if (age == 20) {
//   console.log("Age is equal to 20");
// } else {
//   console.log("Age is bigger than 20");
// }

// const fruit = "Melon";

// switch (fruit) {
//   case "Oranges":
//     console.log("oranges");
//     break;
//   case "Apples":
//     console.log("Apples");
//     break;
//   case "Papaya":
//     console.log("Papaya");
//     break;
//   default:
//     console.log("Sorry we are out of " + fruit);
// }

// if (fruit === "Oranges") {
//   console.log("oranges");
// } else if (fruit === "Apples") {
//   console.log("Apples");
// } else {
//   console.log("Sorry we dont have " + fruit);
// }

//Access Object Value
//user.name
//user.age
//user["age"]
//user["name"]
const user = {
  name: "Daniel",
  age: 26,
  country: "Israel",
};

// let sentance = `Hello, my name is ${user["name"]}, I am ${user["age"]} years old and I live in ${user["country"]}`;

// console.log(sentance);
// console.log(user);

//Redifining values

// user.age = 27;
// user.country = "Australia";
// console.log(user);

//Adding new values
// console.log(user);

// user.favoriteColor = "Black";
// console.log(user);

//Removing values
// delete user.country;
// console.log(user);

//LOOPS
// for (let i = 0; i < 10; i++) {
//   console.log(`The ${i + 1} loop current number is ${i}`);
// }

//Looping through an array:

// const myFavoriteColors = ["Red", "Black", "Blue", "Green", "Pink", "Purple"];

//Looping through an OBJECT "FOR IN LOOP"
// let person = { fname: "John", lname: "Doe", age: 25 };

// for (let x in person) {
//   console.log(person[x]);
// }

//FOR OF LOOP ( ARRAYS AND STRINGS )
// I is the actual element

// const myFavoriteColors = ["Red", "Black", "Blue", "Green", "Pink", "Purple"];

// for (let i = 0; i < myFavoriteColors.length; i++) {
//   console.log(myFavoriteColors[i]);
// }

// for (let i of myFavoriteColors) {
//   console.log(i);
// }
//While loop
let name;

while (name != "daniel") {
  name = prompt("what is your name?");
}
alert("Welcome Daniel!");
