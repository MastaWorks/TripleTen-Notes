//CONCAT

//Create a solarSystem array made up of all the planets in the Solar System along with the star. 
// Print the solarSystem array to the console.

const terrestrialPlanets = ["Mercury", "Venus", "Earth", "Mars"];
const jovianPlanets = ["Jupiter", "Saturn", "Uranus", "Neptune"];
const star = "the Sun";

const solarSystem = terrestrialPlanets.concat(jovianPlanets, star);

console.log(solarSystem);

//JOIN

//Convert the narcissusAndEcho array into a string that reads "Narcissus-and-Echo"

const narcissusAndEcho = ["Narcissus", "and", "Echo"];

const narcissusAndEchoString = narcissusAndEcho.join("-");

console.log(narcissusAndEchoString);
