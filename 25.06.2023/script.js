//Regular Loop ( or for looping over an array or just looping)

const colors = ["Red", "Green", "Purple", "Yellow", "Black"];
// for (let i = 0; i < colors.length; i++) {
//   console.log(colors[i]);
// }

//Object Loop
let person = { fname: "John", lname: "Doe", age: 25 };

// for (let x in person) {
//   console.log(`${x} is ${person[x]}`);
//   console.log();
// }

//For OF array
// for (let x of colors) {
//   console.log(x);
// }

//While Loop
// let i = 0;
// while (i < 11) {
//   console.log(i);
//   i++;
// }

//Do While

// let i = 0;
// do {
//   console.log("The Number Is " + i);
//   i++;
// } while (i > 2);

//Break Statement
// for (let i = 0; i < 10; i++) {
//   if (i === 3) {
//     break;
//   }
//   console.log(`the number is ${i}`);
// }

//Continue statment
// for (let i = 0; i < 10; i++) {
//   if (i === 3) {
//     continue;
//   } else if (i === 4) {
//     continue;
//   }
//   console.log(`the number is ${i}`);
// }
let sum = 0;
function calculate(x, y) {
  //Local Scope it will only be relevant in that scope
  sum = x + y;
}
calculate(2, 2);
console.log(sum);

// let greeting = "Goodbye";

// function sayGoodbye() {
//   greeting = "Goodbyeeeeeeeeee";
//   console.log("inside function " + greeting);
// }

// sayGoodbye();
// console.log("outside function " + greeting);
