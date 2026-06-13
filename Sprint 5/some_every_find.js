//FIND
//The find() method returns the value of the first element in an array that satisfies the provided testing function. Otherwise, it returns undefined.

//One of the elements in the seasons array  starts with the letter "A". Find it by calling the find() method.

const seasons = ["Spring", "Summer", "Autumn", "Winter"];

const autumn = seasons.find(function (item) {
	return item.includes("A");
});

console.log(autumn);

//EVERY
//The every() method tests whether all elements in the array pass the test implemented by the provided function. It returns a Boolean value.

//Call the every() method to check if all the integers in the integersToCheck array are prime numbers.

const integersToCheck = [1, 2, 3, 193, 79, 7, 29];

function isPrime(num) {
  if (num <= 1) return false;
  for (let i = 2; i < num; i += 1) {
    if (num % i === 0) {
      return false;
    }
  }
  return true;
}

integersToCheck.every(isPrime);