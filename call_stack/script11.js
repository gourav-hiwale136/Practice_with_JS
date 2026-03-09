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

  setTimeout(() => {
    console.log("Timeout inside Async1");
  }, 0);

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

    setTimeout(() => {
      console.log("Timeout inside Promise2");
    }, 0);
  });

console.log("End");