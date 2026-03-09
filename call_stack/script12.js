console.log("Start");

setTimeout(() => {
  console.log("Timeout 1");

  Promise.resolve().then(() => {
    console.log("Promise inside Timeout1");
  });

}, 0);

async function async1() {
  console.log("Async1 Start");

  await async2();

  console.log("Async1 After Await");

  await Promise.resolve();

  console.log("Async1 Second Await");
}

async function async2() {
  console.log("Async2");

  Promise.resolve().then(() => {
    console.log("Promise inside Async2");
  });
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