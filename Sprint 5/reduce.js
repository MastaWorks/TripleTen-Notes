//REDUCE
//The reduce() method executes a reducer function (that you provide) on each element of the array, resulting in a single output value.

//Call the reduce() method to return the hidden word in the children's acrostic poem. To do this, gather the first letters of each line into one word.

const acrostic = [
  "Stars up in the sky",  
  "They sparkle with love",  
  "All so glorious",  
  "Radiant above."
];
  
const cipherWord = acrostic.reduce(function (prevVal, item) {
  /* Write your code here */
  return prevVal + item[0];
}, "");
  
console.log(cipherWord);
  