//UNSHIFT

//Add the "pico" and "nano" strings to the beginning of the prefix array.

const prefix = ["micro", "milli", "kilo"];

prefix.unshift("pico", "nano");
console.log(prefix);

//SHIFT

//Delete the first element of the thumbsUp array and store the removed element in a new variable called thumbDown.

const thumbsUp = ["👎", "👍", "👍", "👍", "👍", "👍"];

const thumbDown = thumbsUp.shift();
console.log(thumbDown);

//PUSH & POP - Add and Remove Elements from an Array and returns its value.