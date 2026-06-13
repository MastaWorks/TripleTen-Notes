//MAP
//The map() method creates a new array populated with the results of calling a provided function on every element in the calling array.

//Code the map() method so that it creates a new reduplications array, in which each word is written twice with a hyphen in between.
// For example, it should make "Baden-Baden" out of "Baden".

const words = [
  "Baden",
  "aye",
  "go",
  "agar"
];

const reduplications = words.map(function (element) {
  return element + "-" + element;
});// Continue the code here

console.log(reduplications);

//Call the map() method to create a new array from the original one, changing only one item: "Anakin Skywalker" to "Darth Vader".

const characters = [
  "Luke Skywalker",
  "Obi-Wan",
  "Chewbacca",
  "Anakin Skywalker",
  "Han Solo",
  "Palpatine"
];

const newCharacters = characters.map(function (character) {
  if (character === "Anakin Skywalker") {
    return "Darth Vader";
  }

  return character;
});

console.log(newCharacters);


//FOREACH
//The forEach() method executes a provided function once for each array element.

//Declare a new array called spielbergs and fill it with elements by following these instructions:
//-Call the forEach() method on the people array and pass a function through it as an argument.
//-Inside the body of the function, check each element of the people array to see whether it contains the string "Spielberg".
//-If it does, add this element to the new array.
//Print the resulting spielbergs array to the console.

const people = [
  "Steven Spielberg",
  "Michael Bay",
  "Robin Spielberg",
  "Sasha Rebecca Spielberg",
  "James Cameron"
];

// Create a new empty array in a variable spielbergs
const spielbergs = [];

people.forEach(function (element) {
  // Create the logic of adding Spielbergs to the array
  if(element.includes("Spielberg")){
    spielbergs.push(element);
  }
  
});

// Print the resulting spielbergs array to the console.
console.log(spielbergs);

//Use the forEach() method to print these to the console in the form of a numbered list. It should look like this:

//1. Gravitational interaction
//2. Electromagnetic interaction
//3. Strong interaction
//4. Weak interaction

const arr = [
  "Gravitational interaction",
  "Electromagnetic interaction",
  "Strong interaction",
  "Weak interaction"
];

arr.forEach(function (element, index) {
  console.log(index + 1 + ". " + element);
});