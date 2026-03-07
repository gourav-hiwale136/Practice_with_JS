console.log("Start");

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
  console.log("Promise");
});

setTimeout(() => {
  console.log("Timeout");
}, 0);

console.log("End");