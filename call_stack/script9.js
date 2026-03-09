// console.log("Start");

// async function async1() {
//   console.log("Async1 Start");

//   await async2();

//   console.log("Async1 After Await");
// }

// async function async2() {
//   console.log("Async2");
// }

// setTimeout(() => {
//   console.log("Timeout");
// }, 0);

// async1();

// new Promise((resolve) => {
//   console.log("Promise Constructor");
//   resolve();
// }).then(() => {
//   console.log("Promise Then");
// });

// console.log("End");


console.log("Start");

setTimeout(() => {
  console.log("Timeout1");
}, 0);

Promise.resolve().then(() => {
  console.log("Promise1");
  setTimeout(() => {
    console.log("Timeout2");
  }, 0);
});

async function test() {
  console.log("Async Start");

  await Promise.resolve();

  console.log("Async After Await");
}

test();

console.log("End");