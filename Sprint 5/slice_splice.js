//SPLICE
//The splice() method changes the contents of an array by removing or replacing existing elements and/or adding new elements in place.

//Call the splice() method to add the NE element between the N and E elements.
//Then, call this method again to remove the NE element so that the array goes back to its original form.

const compass = ["N", "E", "S", "W"];

compass.splice(1,0, "NE");
console.log(compass);
compass.splice(1,1);
console.log(compass);

//SLICE
//The slice() method returns a shallow copy of a portion of an array into a new array object selected from start to end (end not included). 
//The original array will not be modified.

//Call the slice() method to create: 
//an array called theOldWorld made up of the first three elements of partsOfWorld
//an array called theWholeWorld, which is a copy of partsOfWorld

const partsOfWorld = [
  "Europe",
  "Asia",
  "Africa",
  "North America",
  "South America",
  "Antarctica",
  "Oceania"
];

const theOldWorld = partsOfWorld.slice(0, 3);
const theWholeWorld = partsOfWorld.slice();
