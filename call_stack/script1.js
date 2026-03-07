console.log("Start");

setTimeout(() => {
  console.log("Timeout 1");

  Promise.resolve().then(() => {
    console.log("Promise inside Timeout");
  });

}, 0);

Promise.resolve().then(() => {
  console.log("Promise 1");

  setTimeout(() => {
    console.log("Timeout inside Promise");
  }, 0);
});

async function asyncFunc() {
  console.log("Async Start");

  await Promise.resolve();

  console.log("Async After Await");

  Promise.resolve().then(() => {
    console.log("Promise inside Async");
  });
}

asyncFunc();

console.log("End");