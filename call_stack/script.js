

console.log("Start");

function test() {
  console.log("Inside test");

  setTimeout(() => {
    console.log("Timeout 1");
  }, 0);

  Promise.resolve().then(() => {
    console.log("Promise 1");
  });
}

async function asyncFunc() {
  console.log("Async Start");

  await Promise.resolve();

  console.log("Async After Await");

  setTimeout(() => {
    console.log("Timeout 2");
  }, 0);
}

test();
asyncFunc();

Promise.resolve().then(() => {
  console.log("Promise 2");
});

console.log("End");