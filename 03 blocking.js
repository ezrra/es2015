// Before
console.log(x) // undefined
x = 5;
console.log(x) // 5
if (true) {
  var x = 1;
}

console.log(x); // 1

// Now
console.log(x); // x is in temporal dead zone
// Uncaught ReferenceError x is not defined
let x = 1;
console.log(x); // 1

// Blocking scoping
if (true) {
  let x = 1;
  console.log(x); // 1
}

console.log(x)
// Uncaught ReferenceError: x is not defined
