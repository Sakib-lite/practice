//The promise constructor requires you to pass a function called the executor which takes two parameters, resolve and reject. Both are functions that you use to pass or reject a value that is usually the result of the async operation. Here's an example of a simple promise:
let promise = new Promise((resolve, reject) => setTimeout(resolve, 1000, "edabit"));
console.log(promise)