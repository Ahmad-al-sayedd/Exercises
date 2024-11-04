/* -------------------------------------------------------------------------- */
/*                                   Task 1                                   */
/* -------------------------------------------------------------------------- */

// Create a function which returns the number of true values there are in an array.

// Examples
// countTrue([true, false, false, true, false]) ➞ 2

// countTrue([false, false, false, false]) ➞ 0

// countTrue([]) ➞ 0
// Notes
// Return 0 if given an empty array.
// All array items are of the type bool (true or false).

const countTrue = (arr) => {
  const newArr = [];

  return arr.filter((e) => e === true).length;
};
const outputvaluwCountTrue = countTrue([false, false, false]);
console.log(outputvaluwCountTrue);

console.clear();

/* -------------------------------------------------------------------------- */
/*                                    Task2                                   */
/* -------------------------------------------------------------------------- */

//  Write a function redundant that takes in a string str and returns a function that returns str.

// Examples
// const f1 = redundant("apple")
// f1() ➞ "apple"

// const f2 = redundant("pear")
// f2() ➞ "pear"

// const f3 = redundant("")
// f3() ➞ ""

const redundant = (str) => {
  return () => str;
};
const f1 = redundant("apple");
console.log(f1());

console.clear();

/* -------------------------------------------------------------------------- */
/*                                    Task3                                   */
/* -------------------------------------------------------------------------- */
// In a board game, a piece may advance 1-6 tiles forward depending on the number rolled on a six-sided die. If you advance your piece onto the same tile as another player's piece, both of you earn a bonus.

// Can you reach your friend's tile number in the next roll? Create a function that takes your position a and your friend's position b and returns a boolean representation of whether it's possible to earn a bonus on any die roll.

// Examples
// possibleBonus(3, 7) ➞ true

// possibleBonus(1, 9) ➞ false

// possibleBonus(5, 3) ➞ false

function possibleBonus(a, b) {
  if (a === b) {
    return false;
  }
  return b > a && b - a <= 6;
}

console.log(possibleBonus(3, 7));

console.clear();
/* -------------------------------------------------------------------------- */
/*                                    Task4                                   */
/* -------------------------------------------------------------------------- */

//     Write a function that takes a number and returns the perimeter of either a circle or a square. The input will be in the form (letter l, number num) where the letter will be either "s" for square, or "c" for circle, and the number will be the side of the square or the radius of the circle.

// Use the following formulas:

// Perimeter of a square: 4 * side.
// Perimeter of a circle: 6.28 * radius.
// The catch is you can only use arithmetic or comparison operators, which means:

// No if... else statements.
// No objects.
// No arrays.
// No formatting methods, etc.
// The goal is to write a short, branch-free piece of code.

// Examples
// perimeter("s", 7) ➞ 28

// perimeter("c", 4) ➞ 25.12

// perimeter("c", 9) ➞ 56.52

function perimeter(l, num) {
  return l === "s" ? num * 4 : num * 6.28;
}
console.log(perimeter("c", 4));

/* -------------------------------------------------------------------------- */
/*                                    Task5                                   */
/* -------------------------------------------------------------------------- */
// Create a function that will return an integer number corresponding to the amount of digits in the given integer num.

// Examples
// num_of_digits(1000) ➞ 4

// num_of_digits(12) ➞ 2

// num_of_digits(1305981031) ➞ 10

// num_of_digits(0) ➞ 1
// Notes
// Try to solve this challenge without using strings!

function num_of_digits(num) {
  const numToArr = String(num).split("");
  console.log(numToArr);
  return Number(numToArr.length);
}
console.log(num_of_digits(12));
console.clear();

/* -------------------------------------------------------------------------- */
/*                                    Task6                                   */
/* -------------------------------------------------------------------------- */

// Given three arguments ⁠— an object obj of the stolen items, the pet's name and a value ⁠— return an object with that name and value in it (as key-value pairs).

// Examples
// addName({}, "Brutus", 300) ➞ { Brutus: 300 }

// addName({ piano: 500 }, "Brutus", 400) ➞ { piano: 500, Brutus: 400 }

// addName({ piano: 500, stereo: 300 }, "Caligula", 440) ➞ { piano: 500, stereo: 300, Caligula: 440 }

function addName(obj, name, value) {
  const object = { ...obj };
  object[name] = value;
  return object;
}
console.log(addName({ piano: 500 }, "Brutus", 400));

/* -------------------------------------------------------------------------- */
/*                                    Task7                                   */
/* -------------------------------------------------------------------------- */
// A tetrahedron is a pyramid with a triangular base and three sides. A tetrahedral number is a number of items within a tetrahedron.

// Create a function that takes an integer n and returns the nth tetrahedral number.

// Alternative Text

// Examples
// tetra(2) ➞ 4

// tetra(5) ➞ 35

// tetra(6) ➞ 56
// Notes
// There is a formula for the nth tetrahedral number.

function tetra(n) {
  return (n * (n + 1) * (n + 2)) / 6;
}
console.log(tetra(5));
console.clear();

/* -------------------------------------------------------------------------- */
/*                                    Task8                                   */
/* -------------------------------------------------------------------------- */

// According to the lodash documentation, _.compact creates an array with all falsey values removed.
// The values false, null, 0, "", undefined, and NaN are falsey.

// Your task is to build this helper function
// without using lodash. You will write a function that receives an array and removes all falsey values.

// Examples
// compact([0, 1, false, 2, "", 3]);   // => [1, 2, 3]
// Notes
// Do not attempt to import lodash; you are simply writing your own version.
// This entire series of challenges can be found here.

function compact(arr) {
  return arr.filter((e) => Boolean(e));
}
console.log(compact([0, 1, false, 2, NaN, null, undefined, "", 3]));

console.clear();
/* -------------------------------------------------------------------------- */
/*                                    Task9                                   */
/* -------------------------------------------------------------------------- */

// Create a function that takes a "base number" as an argument. This function should return another function which takes a new argument, and returns the sum of the "base number" and the new argument.

// Please check the examples below for a clearer representation of the behavior expected.

// Examples
// // Calling makePlusFunction(5) returns a new function that takes an input,
// // and returns the result when adding 5 to it.

// const plusFive = makePlusFunction(5)

// plusFive(2) ➞ 7

// plusFive(-8) ➞ -3

// // Calling makePlusFunction(10) returns a new function that takes an input,
// // and returns the result when adding 10 to it.

// const plusTen = makePlusFunction(10)

// plusTen(0) ➞ 10

// plusTen(188) ➞ 198

// plusFive(plusTen(0)) ➞ 15

function makePlusFunction(baseNum) {
  return function (secondNum) {
    return baseNum + secondNum;
  };
}
const plus = makePlusFunction(5);
console.log(plus(-8));
console.clear();

/* -------------------------------------------------------------------------- */
/*                                   Task10                                   */
/* -------------------------------------------------------------------------- */
// Given a number, n, return a function which adds n to the number passed to it.

// Examples
// add(10)(20) ➞ 30

// add(0)(20) ➞ 20

// add(-30)(80) ➞ 50
// Notes
// All numbers used in the tests will be integers (whole numbers).
// Returning a function from a function is a key part of understanding higher
// order functions (functions which operate on and return functions).

function add(x) {
  return function (y) {
    return x + y;
  };
}

console.log(add(4)(5)); // ➞ 9
console.clear();

/* -------------------------------------------------------------------------- */
/*                                   Task11                                   */
/* -------------------------------------------------------------------------- */

// Write a function that returns an anonymous function, which transforms its input by adding a particular suffix at the end.

// Examples
// add_ly = add_suffix("ly")

// add_ly("hopeless") ➞ "hopelessly"
// add_ly("total") ➞ "totally"

// add_less = add_suffix("less")

// add_less("fear") ➞ "fearless"
// add_less("ruth") ➞ "ruthless"

function add_suffix(suffix) {
  return function (str) {
    return str + suffix;
  };
}
const add_ly = add_suffix("ly");

console.log(add_ly("hopeless"));

const add_less = add_suffix("less");
console.log(add_less("hope"));

/* -------------------------------------------------------------------------- */
/*                                   Task12                                   */
/* -------------------------------------------------------------------------- */
// Write a function that takes an integer minutes and converts it to seconds.

// Examples
// convert(5) ➞ 300

// convert(3) ➞ 180

// convert(2) ➞ 120
// Notes
// Don't forget to return the result.
// If you get stuck on a challenge, find help in the Resources tab.
// If you're really stuck, unlock solutions in the Solutions tab.

function convert(minutes) {
  return minutes * 60;
}
console.log(convert(2));

console.clear();

/* -------------------------------------------------------------------------- */
/*                                   task12                                   */
/* -------------------------------------------------------------------------- */
// Create a function that takes a number as an argument, increments the number by +1 and returns the result.

// Examples
// addition(0) ➞ 1

// addition(9) ➞ 10

// addition(-3) ➞ -2
// Notes
// Don't forget to return the result.
// If you get stuck on a challenge, find help in the Resources tab.
// If you're really stuck, unlock solutions in the Solutions tab.

function addition(num) {
  return (num += 1);
}
console.log(addition(9));
console.clear();

/* -------------------------------------------------------------------------- */
/*                                   task13                                  */
/* -------------------------------------------------------------------------- */

// Create a function that takes two numbers as arguments (num, length) and returns an array of multiples of num until the array length reaches length.

// Examples
// arrayOfMultiples(7, 5) ➞ [7, 14, 21, 28, 35]

// arrayOfMultiples(12, 10) ➞ [12, 24, 36, 48, 60, 72, 84, 96, 108, 120]

// arrayOfMultiples(17, 6) ➞ [17, 34, 51, 68, 85, 102]
// Notes
// Notice that num is also included in the returned array.

function arrayOfMultiples(num, length) {
  let arr = [];
  for (let i = 1; i <= length; i++) {
    console.log(i);

    arr.push(num * i);
  }
  return arr;
}
console.log(arrayOfMultiples(7, 5));

/* -------------------------------------------------------------------------- */
/*                                   Task14                                   */
/* -------------------------------------------------------------------------- */
/* -------------------------------------------------------------------------- */
// Write a function that converts an object into an array, where each element represents a key-value pair in the form of an array.

// Examples
// toArray({ a: 1, b: 2 }) ➞ [["a", 1], ["b", 2]]

// toArray({ shrimp: 15, tots: 12 }) ➞ [["shrimp", 15], ["tots", 12]]

// toArray({}) ➞ []
// Notes
// Return an empty array if the object is empty.

function toArray(obj) {
  return Object.entries(obj);
}
console.log(toArray({ a: 1, b: 2 }));

/* -------------------------------------------------------------------------- */
/*                                   Task15                                   */
/* -------------------------------------------------------------------------- */

// Create a function that takes an object and returns the keys and values as separate arrays. Return the keys sorted alphabetically, and their corresponding values in the same order.

// Examples
// keysAndValues({ a: 1, b: 2, c: 3 })
// ➞ [["a", "b", "c"], [1, 2, 3]]

// keysAndValues({ a: "Apple", b: "Microsoft", c: "Google" })
// ➞ [["a", "b", "c"], ["Apple", "Microsoft", "Google"]]

// keysAndValues({ key1: true, key2: false, key3: undefined })
// ➞ [["key1", "key2", "key3"], [true, false, undefined]]
// Notes
// Remember to sort the keys.

function keysAndValues(obj) {
  const arr = [];
  const obValues = Object.values(obj);
  const obKey = Object.keys(obj);

  arr.push(obKey, obValues);
  return arr;
}

console.log(keysAndValues({ a: 1, b: 2, c: 3 }));
