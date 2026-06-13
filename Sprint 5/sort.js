//SORT
//The sort() method sorts the elements of an array in place and returns the sorted array. 

//The elements of the chessChampions array are names of world chess champions. Sort the elements of the array by the champions' surnames in alphabetical order.

const chessChampions = [
	"Wilhelm Steinitz",
  "Emanuel Lasker",
  "Jose Capablanca",
  "Alexander Alekhine",
  "Machgielis Euwe",
  "Mikhail Botvinnik",
  "Vasily Smyslov",
  "Mikhail Tal",
  "Tigran Petrosian",
  "Boris Spassky",
  "Robert Fischer",
  "Anatoly Karpov",
  "Garry Kasparov",
  "Vladimir Kramnik",
  "Viswanathan Anand",
  "Magnus Carlsen"
];

chessChampions.sort(function (a, b) {
  /* Set the rules for sorting the elements here */
  const aSecondName = a.split(" ")[1].toLowerCase();
  const bSecondName = b.split(" ")[1].toLowerCase();

  if (aSecondName > bSecondName) return 1;
  if (aSecondName < bSecondName) return -1;

  return 0;
});

console.log(chessChampions);

//Sort the elements in chronological order.

const chessChampions = [
  ["Alexander Alekhine", 1927],
  ["Alexander Alekhine", 1937],
  ["Viswanathan Anand", 2007],
  ["Mikhail Botvinnik", 1948],
  ["Mikhail Botvinnik", 1958],
  ["Mikhail Botvinnik", 1961],
  ["Magnus Carlsen", 2013],
  ["Max Euwe", 1935],
  ["Robert Fischer", 1972],
	["Jose Raul Capablanca y Graupera", 1921],
  ["Anatoly Karpov", 1975],
  ["Garry Kasparov", 1985],
  ["Vladimir Kramnik", 2006],
  ["Emanuel Lasker", 1894],
  ["Tigran Petrosian", 1963],
  ["Vasily Smyslov", 1957],
  ["Boris Spassky", 1969],
  ["Wilhelm Steinitz", 1886],
  ["Mikhail Tal", 1960]
];

// Write your code here
chessChampions.sort(function (a, b) {
  const yearA = a[1];
  const yearB = b[1];

  return yearA - yearB;
});

console.log(chessChampions);
