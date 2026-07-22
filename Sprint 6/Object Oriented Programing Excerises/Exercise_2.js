//Here, you'll write a function called swap(), which will return a new object with its keys and values swapped.

function swap(obj) {
  const res = {};

  // Add properties with swapped keys
  const arr = Object.entries(obj);
  for (let i of arr) {
    res[i[1]] = i[0];
  }
  // and values to the res object.

  return res;
}

const myObj = {
  first: 1,
  second: 2,
  third: 3,
};

console.log(myObj); // { first: 1, second: 2, third: 3 }
console.log(swap(myObj)); // { 1: "first", 2: "second", 3: "third" }
