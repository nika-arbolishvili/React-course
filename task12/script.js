const myPromise = new Promise((resolve, reject) => {
  const success = true;

  if (success) {
    resolve("operation completed successfully");
  } else {
    reject("There was an error");
  }
});

myPromise
  .then((result) => console.log(result)) // fulfiled ოპერაცია წარმატებით დასრულდა
  .catch((error) => console.error(error)); // rejected // შეცდომა მოხდა

// async/ await

function getNumbersAfter2Sec() {
  return new Promise((resolve) => {
    setTimeout(() => resolve(42), 2000);
  });
}

async function myFunctions() {
  console.log("the function is starting ...");
  const numer = await getNumbersAfter2Sec();
  console.log("after 2 seconds we got number:", numer);
}

myFunctions();

// try Catch
async function fethData() {
  try {
    const response = await fetch("https://api.example.com");
    const json = await response.json();
    console.log(json);
  } catch (error) {
    console.log(error);
  }
}

fethData();

// Promise.all

const p1 = Promise.resolve(10);
const p2 = Promise.resolve(20);
const p3 = Promise.resolve(30);

Promise.all([p1, p2, p3]).then((values) => console.log(values));

// Promise.race

const g1 = new Promise((r) => setTimeout(() => r("first"), 1000));

const g2 = new Promise((r) => setTimeout(() => r("second"), 500));

Promise.race([g1, g2]).then((result) => console.log(result));

/// davalebebi

console.log("1");

async function test() {
  console.log("2");
  await Promise.resolve();
  console.log("3");
}

test();

console.log("4");

// next Task ///////
console.log("A");

setTimeout(() => {
  console.log("B");
  Promise.resolve().then(() => console.log("C"));
  setTimeout(() => console.log("D"), 0);
}, 0);

Promise.resolve().then(() => {
  console.log("E");
  setTimeout(() => console.log("F"), 0);
});

console.log("G");

/// A, G , E , B , C , F , D

//////////
async function foo() {
  console.log("1");
  setTimeout(() => console.log("2"), 0);
  await Promise.resolve();
  console.log("3");
  setTimeout(() => console.log("4"), 0);
}

console.log("0");
foo();
console.log("5");

// 0 , 1 , 5 , 3 , 2 , 4

//////////

async function demo() {
  console.log("X1");
  await Promise.resolve();
  console.log("X2");
  setTimeout(() => {
    console.log("X3");
    Promise.resolve().then(() => console.log("X4"));
  }, 0);
  await Promise.resolve();
  console.log("X5");
}

console.log("S1");
setTimeout(() => console.log("T0"), 0);
Promise.resolve().then(() => console.log("P0"));
demo();
console.log("S2");

// S1, X1, S2, P0, X2, X5, T0, X3 , X4
