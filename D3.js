const starWarsCharacters = [
  {
    name: "Luke Skywalker",
    height: 172,
    mass: 277,
    hair_color: "blond",
    skin_color: "fair",
    eye_color: "blue",
    birth_year: "19BBY",
    gender: "male"
  },
  {
    name: "C-3PO",
    height: 167,
    mass: 75,
    hair_color: "n/a",
    skin_color: "gold",
    eye_color: "yellow",
    birth_year: "112BBY",
    gender: "n/a"
  },
  {
    name: "R2-D2",
    height: 96,
    mass: 32,
    hair_color: "n/a",
    skin_color: "white, blue",
    eye_color: "red",
    birth_year: "33BBY",
    gender: "n/a"
  },
  {
    name: "Darth Vader",
    height: 202,
    mass: 136,
    hair_color: "none",
    skin_color: "white",
    eye_color: "yellow",
    birth_year: "41.9BBY",
    gender: "male"
  },
  {
    name: "Leia Organa",
    height: 150,
    mass: 49,
    hair_color: "brown",
    skin_color: "light",
    eye_color: "brown",
    birth_year: "19BBY",
    gender: "female"
  },
  {
    name: "Owen Lars",
    height: 178,
    mass: 120,
    hair_color: "brown, grey",
    skin_color: "light",
    eye_color: "blue",
    birth_year: "52BBY",
    gender: "male"
  },
  {
    name: "Beru Whitesun lars",
    height: 165,
    mass: 75,
    hair_color: "brown",
    skin_color: "light",
    eye_color: "blue",
    birth_year: "47BBY",
    gender: "female"
  },
  {
    name: "R5-D4",
    height: 97,
    mass: 32,
    hair_color: "n/a",
    skin_color: "white, red",
    eye_color: "red",
    birth_year: "unknown",
    gender: "n/a"
  },
  {
    name: "Biggs Darklighter",
    height: 183,
    mass: 84,
    hair_color: "black",
    skin_color: "light",
    eye_color: "brown",
    birth_year: "24BBY",
    gender: "male"
  },
  {
    name: "Obi-Wan Kenobi",
    height: 182,
    mass: 77,
    hair_color: "auburn, white",
    skin_color: "fair",
    eye_color: "blue-gray",
    birth_year: "57BBY",
    gender: "male"
  }
];

/* ESERCIZIO 1
  Crea una variabile chiamata "charactersNames" e assegnale un array vuoto
*/
const charactersNames = [];
/* ESERCIZIO 2
  Utilizzando un ciclo for, cicla l'array "starWarsCharacters".
  Dovrai accedere alla proprietà "name" di ogni oggetto in esso contenuto, e inserirla nell'array "charactersNames" creato precedentemente.
  Come risultato dovresti ottenere qualcosa di simile: ["Luke Skywalker", "C-3PO", "R2-D2", etc..]
*/
for (let i = 0; i < starWarsCharacters.length; i++) {
  charactersNames.push(starWarsCharacters[i].name);
}
console.log(charactersNames);

/* for (let i = 0; i < starWarsCharacters.length; i++) {
  const character = starWarsCharacters[i];
  // console.log(character.name);
  charactersNames.push(character.name);
}
console.log(charactersNames); */

/* ESERCIZIO 3
  Seguendo i passaggi precedenti crea un nuovo array chiamato "femaleCharacters" e inserisci al suo interno tutti gli oggetti femminili.
*/
const femaleCharacters = [];

for (let i = 0; i < starWarsCharacters.length; i++) {
  if (starWarsCharacters[i].gender === "female") {
    femaleCharacters.push(starWarsCharacters[i]);
  }
}

console.log(femaleCharacters);

/* for (let i = 0; i < starWarsCharacters.length; i++) {
  const character = starWarsCharacters[i];

  if (character.gender === "female") {
    femaleCharacters.push(character);
  }
}

console.log(femaleCharacters); */

/* ESERCIZIO 4
  Crea un oggetto "eyeColor" che abbia le seguenti proprietà: blue, yellow, brown, red, blue-gray.
  Ad ognuna di queste proprietà assegna come valore un array vuoto.
*/

const eyeColor = {
  blue: [],
  yellow: [],
  brown: [],
  red: [],
  "blue-gray": []
};

/* ESERCIZIO 5
Utilizza uno switch statement per inserire uno ad uno gli oggetti dei personaggi di "starWarsCharacters" negli array relativi al colore degli occhi precedentemente creati.
Ogni personaggio dovrà finire nell'array corrispondente al suo colore degli occhi (al valore della sua proprietà "eye_color").
*/
// switch dentro un for

for (let i = 0; i < starWarsCharacters.length; i++) {
  const character = starWarsCharacters[i];

  switch (character.eye_color) {
    case "blue":
      eyeColor.blue.push(character);
      break;
    case "yellow":
      eyeColor.yellow.push(character);
      break;
    case "brown":
      eyeColor.brown.push(character);
      break;
    case "red":
      eyeColor.red.push(character);
      break;
    case "blue-gray":
      eyeColor["blue-gray"].push(character);
      break;
  }
}
console.log(eyeColor);

/* for (let i = 0; i < starWarsCharacters.length; i++) {
  const character = starWarsCharacters[i];

  switch (character.eye_color) {
    case "blue":
     // console.log(`${character.name} ha gli occhi blue`);
        eyeColor.blue.push(character);
      break;
    case "yellow":
      eyeColor.yellow.push(character);
      break;
    case "brown":
      eyeColor.brown.push(character);
      break;
    case "red":
      eyeColor.red.push(character);
      break;
    case "blue-gray":
      eyeColor["blue-gray"].push(character);
      break;
  }
}
console.log(eyeColor); */

/* ESERCIZIO 6
  Usa un while loop per calcolare la massa totale dell'equipaggio. Salvala in una variabile chiamata "crewMass".
*/
// un while loop che si esegue come un for

let crewMass = 0;
let i = 0;

while (i < starWarsCharacters.length) {
  const character = starWarsCharacters[i];

  crewMass += character.mass;

  i++;
}
console.log(crewMass);

/* ESERCIZIO 7
  Crea uno if/else statement per rivelare la tipologia di carico, utilizzando la massa totale, di un'ipotetica astronave contenente i personaggi dell'array "starWarsCharacters".

  Se la massa è inferiore a 500 stampa in console: "Ship is under loaded"
  Se la massa è superiore a 500 e inferiore a 700 stampa in console: "Ship is half loaded"
  Se la massa è superiore a 700 e inferiore a 900 stampa in console: "Warning: Load is over 700"
  Se la massa è superiore a 900 e inferiore a 1000 stampa in console: "Critical Load: Over 900"
  Se la massa è superiore a 1000 stampa in console: "DANGER! OVERLOAD ALERT: escape from ship now!"

  Una volta fatto, modifica la massa di qualche elemento dell'equipaggio e vedi se riesci ad ottenere un messaggio diverso.
  */
// if crewmass < 500 console.log ship is under laoded...etc//

const spaceship = crewMass;

if (spaceship < 500) {
  console.log("Ship is under loaded");
} else if (spaceship >= 500 && spaceship < 700) {
  console.log("Ship is half loaded");
} else if (spaceship >= 700 && spaceship < 900) {
  console.log("Warning: Load is over 700");
} else if (spaceship >= 900 && spaceship < 1000) {
  console.log("Critical Load: Over 900");
} else {
  console.log("DANGER! OVERLOAD ALERT: escape from ship now!");
}

starWarsCharacters[7].mass = 100;

crewMass = 0;
i = 0;

while (i < starWarsCharacters.length) {
  crewMass += starWarsCharacters[i].mass;
  i++;
}

if (crewMass < 500) {
  console.log("Ship is under loaded");
} else if (crewMass >= 500 && crewMass <= 700) {
  console.log("Ship is half loaded");
} else if (crewMass > 700 && crewMass <= 900) {
  console.log("Warning: Load is over 700");
} else if (crewMass > 900 && crewMass <= 1000) {
  console.log("Critical Load: Over 900");
} else {
  console.log("DANGER! OVERLOAD ALERT: escape from ship now!");
}

// si potrebbe fare con lo switch

/* switch (true) {
  case crewMass < 500:
    console.log("Ship is under loaded");
    break;
  case crewMass >= 500 && crewMass <= 700:
    console.log("Ship is half loaded");
    break;
  case crewMass > 700 && crewMass <= 900:
    console.log("Warning: Load is over 700");
    break;
  case crewMass > 900 && crewMass <= 1000:
    console.log("Critical Load: Over 900");
    break;
  default:
    console.log("DANGER! OVERLOAD ALERT: escape from ship now!");
} */

/* ESERCIZIO 8
  Usa un for loop per cambiare il valore della proprietà "gender" di alcuni personaggi dal valore "n/a"a  "robot" (Tip: puoi effettuare la riassegnazione del valore corrispondente o creare un nuovo array)
*/

// se n/a bisogna cambiare in robot.

for (let i = 0; i < starWarsCharacters.length; i++) {
  const character = starWarsCharacters[i];

  if (character.gender === "n/a") {
    console.log(`${character.name} has gender n/a`); // to print who has the n/a gender
    character.gender = `robot`;
  }
}
console.log(starWarsCharacters);

/* --EXTRA-- ESERCIZIO 9
  Utilizzando gli elementi presenti nell'array "femaleCharacters" rimuovi dall'array "charactersNames" le stringhe corrispondenti a personaggi con lo stesso nome.
  Una volta fatto crea un console.log per controllare la proprietà length di "charactersNames" prima e dopo l'operazione.
*/

for (let i = 0; i < femaleCharacters.length; i++) {
  //1st array
  const femChar = femaleCharacters[i].name; // we get the 2 female characters
  console.log(femChar);

  for (let j = 0; j < charactersNames.length; j++) {
    // 2nd array
    const charName = charactersNames[j];
    //console.log(`${femChar} meets ${charName}`);      // double loop to confront 2 arrays

    if (femChar === charName) {
      // when leia and beru meet with charName, with splice we remove them from charactersNames
      console.log(`${femChar} is at index ${j} of the characterNames array`);

      charactersNames.splice(j, 1); // j dinamic value (position) , 1 (eliminate 1)
    }
  }
}

/* --EXTRA-- ESERCIZIO 10
  Crea una funzionalità che selezioni un elemento casuale dall'array "starWarsCharacters" e ne stampi in console le proprietà in modo discorsivo (a tuo piacimento).
*/

const randomCharIndex = Math.floor(Math.random() * starWarsCharacters.length); // Math.floor aggiusta per difetto numero intero
const charFound = starWarsCharacters[randomCharIndex]; // Math.random random float number between 0 and 0.99 i.e. 0.893438 etc
console.log(charFound);

console.log("The found character name is:", charFound.name);

if (charFound.gender === "female") {
  console.log("She is", charFound.height, "cm tall");
} else {
  console.log("He is", charFound.height, "cm tall");
}

if (charFound.hair_color !== "n/a" && charFound.hair_color !== "none") {
  console.log("and has", charFound.hair_color, "hair,");
} else {
  console.log("and bald,");
}

console.log("with", charFound.skin_color, "skin.");

// to check last line...need to give a random obj and not a random number
