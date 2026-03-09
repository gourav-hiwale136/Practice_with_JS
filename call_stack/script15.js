console.log("Start");

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

setTimeout(() => {
  console.log("Timeout 1");
}, 0);

async1();

new Promise((resolve) => {
  console.log("Promise Constructor");
  resolve();
})
.then(() => {
  console.log("Promise 1");
  setTimeout(() => {
    console.log("Timeout inside Promise");
  }, 0);
})
.then(() => {
  console.log("Promise 2");
});

console.log("End");