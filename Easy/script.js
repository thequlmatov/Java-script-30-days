//  #1 -2667-
//  Write a function createHelloWorld. It should return a new function that always returns "Hello World".
let createHelloWorld = function () {
  return function () {
    return "Hello World";
  };
};

// #2 - 2620. Counter
// Given an integer n, return a counter function. This counter function initially returns n and then returns 1 more than the previous value every subsequent time it is called (n, n + 1, n + 2, etc).
function createCounter(n) {
  return function () {
    return n++;
  };
}

const counter = createCounter(10);
console.log(counter());
console.log(counter());
console.log(counter());
