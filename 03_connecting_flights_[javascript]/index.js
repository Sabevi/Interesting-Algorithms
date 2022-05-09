// Étape 1 - Parsing

function createATrip(string) {
  let tripObject = {};
  let stringSplitted = string.split(" ");
  tripObject.client = stringSplitted[0];
  tripObject.start = parseInt(stringSplitted[1]);
  tripObject.duration = parseInt(stringSplitted[2]);
  tripObject.price = parseInt(stringSplitted[3]);
  return tripObject;
}

let tripOne = createATrip("Roger 0 5 10");
let tripTwo = createATrip("Pongo 3 7 14");
let tripThree = createATrip("Perdita 8 10 8");
let tripFour = createATrip("Anita 16 3 7");

let allTheTrips = [];

function createAllTheTrips(object) {
  allTheTrips.push(object);
  return allTheTrips;
}

createAllTheTrips(tripOne);
createAllTheTrips(tripTwo);
createAllTheTrips(tripThree);
console.log(createAllTheTrips(tripFour));

//Étape 2 - Prix

function totalPrices(arrayOfObjects) {
  let sum = 0;
  for (let k in arrayOfObjects) {
    sum += arrayOfObjects[k].price;
  }
  return sum;
}

console.log(totalPrices(allTheTrips));

//Étape 3 - Compatibilité

function compatibleOrNot(firstTrip, secondTrip) {
  let startTripOne = firstTrip.start;
  let endTripOne = startTripOne + firstTrip.duration;
  let startTripTwo = secondTrip.start;
  let endTripTwo = startTripTwo + secondTrip.duration;

  if (
    (startTripOne <= startTripTwo && startTripTwo <= endTripOne) ||
    (startTripTwo <= startTripOne && startTripOne <= endTripTwo)
  ) {
    console.log(false + " " + firstTrip.client + " & " + secondTrip.client);
    return false;
  }
  console.log(true + " " + firstTrip.client + " & " + secondTrip.client);
  return true;
}

compatibleOrNot(tripOne, tripTwo);
compatibleOrNot(tripOne, tripThree);
compatibleOrNot(tripOne, tripFour);
compatibleOrNot(tripTwo, tripThree);
compatibleOrNot(tripTwo, tripFour);
compatibleOrNot(tripThree, tripFour);

//Étape 4 - Lister les possibilités

function listPossibilities(newArrayOfTrips) {
  let allCompatible = [];

  for (let i = 0; i < newArrayOfTrips.length; i++) {
    for (let j = 0; j < newArrayOfTrips.length; j++) {
      if (i > j) {
        let compatible = [];
        if (compatibleOrNot(newArrayOfTrips[i], newArrayOfTrips[j]) === true) {
          compatible.push(newArrayOfTrips[i]);
          compatible.push(newArrayOfTrips[j]);
          allCompatible.push(compatible);
        }
      }
    }
  }
  return allCompatible;
}

console.log(listPossibilities(allTheTrips));
