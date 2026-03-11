console.log("Start");

function A() {
  console.log("A start");

  setTimeout(() => {
    console.log("Timeout 1");
  }, 0);

  B();

  console.log("A end");
}

async function B() {
  console.log("B start");

  await C();

  console.log("B end");
}

function C() {
  return new Promise((resolve) => {
    console.log("C start");

    setTimeout(() => {
      console.log("Timeout 2");
      resolve();
    }, 0); 

    resolve();
  });
}

A();

Promise.resolve().then(() => {
  console.log("Promise 1");
});

console.log("Finish");