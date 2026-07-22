//We’ve updated the tallestBuildings object to store objects containing the height (in meters) and location of the buildings.
// Now, update the printBuildingAndCity() function so that it logs a statement in the following format for each building:

//"Burj Khalifa (828m) is located in Dubai."

const tallestBuildings = {
  "Burj Khalifa": { height: 828, city: "Dubai" },
  "Merdeka 118": { height: 679, city: "Kuala Lumpur" },
  "Shanghai Tower": { height: 632, city: "Shangai" },
  "Abraj Al-Bait Clock Tower": { height: 601, city: "Mecca" },
  "Ping An International Finance Center": { height: 599, city: "Shenzen" },
};

function printBuildingAndCity(obj) {
  // Write your code here
  for (let key in obj) {
    const height = obj[key].height;
    const city = obj[key].city;

    console.log(`${key} (${height}m) is located in ${city}.`);
  }
}

printBuildingAndCity(tallestBuildings);
