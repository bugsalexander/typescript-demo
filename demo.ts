// type annotations on variables
// - “type” keyword
// - enums
// - unions
// - interfaces
// - objects

/* –––––––––––––––––––––––––--- type definitions –––––––––––––––––––*/

// represents types of beetles
enum Beetle {
  June = "june",
  Hercules = "hercules",
  Ladybug = "ladybug"
}

// represents a colony of some number of ants
type AntColony = number;

// represents a butterfly, with wings of some color
type Spider = {
  numLegs: number;
}

// an insect is either a beetle, ant colony, spider
type Insect = Beetle | AntColony | Spider;

// examples
let juneBeetle: Beetle = Beetle.June;
let tenAnts: AntColony = 10;
let missingHalf: Spider = { numLegs: 8 / 2 };
let myBugs: Array<Insect> = [juneBeetle, tenAnts, missingHalf];

/* –––––––––––––––––––––––––--- type narrowing funcs –––––––––––––––––––*/

function isInsect(maybe: any): maybe is Insect {
  return isBeetle(maybe) || isAntColony(maybe) || isSpider(maybe);
}

function isBeetle(maybeBeetle: any): maybeBeetle is Beetle {
  return maybeBeetle === Beetle.June
  || maybeBeetle === Beetle.Hercules 
  || maybeBeetle === Beetle.Ladybug;
}

function isAntColony(maybeAntColony: any): maybeAntColony is AntColony {
  return typeof maybeAntColony === "number";
}

function isSpider(maybeSpider: any): maybeSpider is Spider {
  return typeof maybeSpider === "object" 
  && "numLegs" in maybeSpider
  && typeof maybeSpider.numLegs === "number";
}

/* –––––––––––––––––––––––––--- funcs –––––––––––––––––––––––––––––––––––*/

// counts the number of legs an insect has
function countLegs(insect: Insect): number {
  if (isBeetle(insect)) {
    return 6;
  } else if (isAntColony(insect)) {
    return insect * 6;
  } else {
    return insect.numLegs;
  }
}

console.log(`juneBeetle: ${countLegs(juneBeetle)} should have 6 legs`);
console.log(`tenAnts: ${countLegs(tenAnts)} should have 6 * 10 = 60 legs`);
console.log(`missingTwo: ${countLegs(missingHalf)} should have 8 / 2 = 4 legs`);

/* ––––––––––––––––––––––––––––– applications ––––––––––––––––––––––––––––– */

// type inference
const maybeBeetle = { numLegs: 10 };
countLegs(maybeBeetle);