console.log("Start");

setTimeout(() => {
  console.log("Timeout 1");
}, 0);

async function async1() {
  console.log("Async1 Start");

  await async2();

  console.log("Async1 After Await");

  Promise.resolve().then(() => {
    console.log("Promise inside Async1");
  });
}

async function async2() {
  console.log("Async2");
}

async1();

Promise.resolve()
  .then(() => {
    console.log("Promise 1");
  })
  .then(() => {
    console.log("Promise 2");
  });

setTimeout(() => {
  console.log("Timeout 2");
}, 0);

console.log("End");