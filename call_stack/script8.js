console.log("Start");

setTimeout(() => {
  console.log("Timeout 1");

  Promise.resolve().then(() => {
    console.log("Promise inside Timeout 1");
  });
}, 0);

Promise.resolve().then(() => {
  console.log("Promise 1");

  setTimeout(() => {
    console.log("Timeout inside Promise");
  }, 0);
});

async function test() {
  console.log("Async Start");

  await Promise.resolve();

  console.log("Async After Await");

  Promise.resolve().then(() => {
    console.log("Promise inside Async");
  });
}

test();

Promise.resolve().then(() => {
  console.log("Promise 2");
});

console.log("End");