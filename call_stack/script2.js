// console.log("Start");

// function first() {
//   console.log("First function");

//   setTimeout(() => {
//     console.log("setTimeout inside first");
//   }, 0);

//   Promise.resolve().then(() => {
//     console.log("Promise inside first");
//   });
// }

// function second() {
//   console.log("Second function");

//   Promise.resolve().then(() => {
//     console.log("Promise inside second");

//     setTimeout(() => {
//       console.log("setTimeout inside promise");
//     }, 0);
//   });
// }

// first();
// second();

// setTimeout(() => {
//   console.log("Global setTimeout");
// }, 0);

// Promise.resolve().then(() => {
//   console.log("Global Promise");
// });

// console.log("End");



console.log("Start");

setTimeout(() => {
  console.log("Timeout");
}, 0);

Promise.resolve().then(() => {
  console.log("Promise 1");
});

async function test() {
  console.log("Async Start");

  await Promise.resolve();

  console.log("Async After Await");
}

test();

console.log("End");
