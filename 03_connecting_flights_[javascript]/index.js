// Étape 1 - Parsing

function createATrip(string) {
  var tripObject = {};
  var stringSplitted = string.split(" ");
  tripObject.client = stringSplitted[0];
  tripObject.start = parseInt(stringSplitted[1]);
  tripObject.duration = parseInt(stringSplitted[2]);
  tripObject.price = parseInt(stringSplitted[3]);
  return tripObject;
}

var tripOne = createATrip("Roger 0 5 10");
var tripTwo = createATrip("Pongo 3 7 14");
var tripThree = createATrip("Perdita 8 10 8");
var tripFour = createATrip("Anita 16 3 7");

var allTheTrips = [];

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
  var sum = 0;
  for (var k in arrayOfObjects) {
    sum += arrayOfObjects[k].price;
  }
  return sum;
}

console.log(totalPrices(allTheTrips));

//Étape 3 - Compatibilité

function compatibleOrNot(firstTrip, secondTrip) {
  var startTripOne = firstTrip.start;
  var endTripOne = startTripOne + firstTrip.duration;
  var startTripTwo = secondTrip.start;
  var endTripTwo = startTripTwo + secondTrip.duration;

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
  var allCompatible = [];

  for (let i = 0; i < newArrayOfTrips.length; i++) {
    for (let j = 0; j < newArrayOfTrips.length; j++) {
      if (i > j) {
        var compatible = [];
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
