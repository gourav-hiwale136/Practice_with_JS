console.log("Start");

setTimeout(() => {
  console.log("Timeout 1");

  Promise.resolve().then(() => {
    console.log("Promise inside Timeout");
  });
}, 0);

async function test() {
  console.log("Async Start");

  await Promise.resolve();

  console.log("Async After Await");

  setTimeout(() => {
    console.log("Timeout inside Async");
  }, 0);
}

test();

Promise.resolve().then(() => {
  console.log("Promise 1");
});

console.log("End");