console.log("Start");

setTimeout(() => {
  console.log("Timeout 1");

  Promise.resolve().then(() => {
    console.log("Promise inside Timeout");
  });

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