//FILTER
//The filter() method creates a new array with all elements that pass the test implemented by the provided function.

//In this task, you have a string containing the names of Nobel Prize winners in Physics and their country of affiliation at the time of the award. Convert this string into an array called nobelArr. Be sure to take into account the space character following the semicolon for each element when specifying the separator.

//Once you've done that, create a new array called filtNobel that contains only scientists from the USA and Germany.

const nobel = "Wilhelm Conrad Röntgen, Germany; Pieter Zeeman, Netherlands; Hendrik Antoon Lorentz, Netherlands; Antoine Henri Becquerel, France; Pierre Curie, France; Marie Curie, née Sklodowska, France; Lord Rayleigh (John William Strutt), United Kingdom; Philipp Eduard Anton von Lenard, Germany; Joseph John Thomson, United Kingdom; Albert Abraham Michelson, USA; Gabriel Lippmann, France; Guglielmo Marconi, Italy; Karl Ferdinand Braun, Germany; Johannes Diderik van der Waals, Netherlands; Wilhelm Wien, Germany; Nils Gustaf Dalén, Sweden; Heike Kamerlingh Onnes, Netherlands; Max von Laue, Germany; Sir William Henry Bragg, United Kingdom; Sir William Lawrence Bragg, United Kingdom; Charles Glover Barkla, United Kingdom; Max Karl Ernst Ludwig Planck, Germany; Johannes Stark, Germany; Charles Edouard Guillaume, Switzerland; Albert Einstein, Germany; Niels Henrik David Bohr, Denmark; Robert Andrews Millikan, USA; Karl Manne Georg Siegbahn, Sweden; Gustav Ludwig Hertz, Germany; James Franck, Germany; Jean Baptiste Perrin, France; Charles Thomson Rees Wilson, United Kingdom; Arthur Holly Compton, USA; Owen Willans Richardson, United Kingdom; Louis de Broglie, France; Sir Chandrasekhara Venkata Raman, India; Werner Karl Heisenberg, Germany; Paul Adrien Maurice Dirac, United Kingdom; Erwin Schrödinger, Austria";

const nobelArr = nobel.split("; ");

const filtNobel = nobelArr.filter(function (scientist) {
  return scientist.includes("USA") || scientist.includes("Germany");
});

console.log(filtNobel);

//Here's an array of 36 playing cards. Select only red cards with a value of ten or lower from the deck using the filter() method, and log them to the console.

const cards = [
  "6 of Hearts", "7 of Hearts", "8 of Hearts", 
  "9 of Hearts", "10 of Hearts",  "Jack of Hearts", 
  "Queen of Hearts", "King of Hearts", 
  "Ace of Hearts", "6 of Spades", "7 of Spades", 
  "8 of Spades", "9 of Spades", "10 of Spades",  
  "Jack of Spades", "Queen of Spades", 
  "King of Spades", "Ace of Spades", "6 of Clubs", 
  "7 of Clubs", "8 of Clubs", "9 of Clubs", 
  "10 of Clubs",  "Jack of Clubs", "Queen of Clubs", 
  "King of Clubs", "Ace of Clubs", "6 of Diamonds", 
  "7 of Diamonds", "8 of Diamonds", "9 of Diamonds", 
  "10 of Diamonds", "Jack of Diamonds", 
  "Queen of Diamonds", "King of Diamonds", 
  "Ace of Diamonds"
];
  
  const cardsFiltered = cards.filter(function (card) {
  return parseInt(card, 10) <= 10
    && (card.includes("of Hearts") 
    || card.includes("of Diamonds"));
});
  
  console.log(cardsFiltered);
  
//Filter the movies array using the filter() method so that only movies from 2018 remain, and assign the new array to a constant variable called moviesFiltered.

  const movies = [
	"Titanic (1997)",
	"Black Panther (2018)",
	"Isle of Dogs (2018)",
	"The Hateful Eight (2015)"
];

const moviesFiltered = movies.filter(function (item) {
	if(item.includes("2018")){
      return item;
    }
});

console.log(moviesFiltered);

