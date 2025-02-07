

/*
const things = ["Boats", "Broccoli", "Truths"];
const [a, b, c] = things;

// console.log(c);

find(...things);


const signs = { health: "red", happiness: "yellow", Feet: "Thorny" };
const {health} = signs;

realize(signs);
console.log(health);


const stuff = ["Fish", "Steel"];
const moreObjects = [...things, ...stuff];

console.log(moreObjects);

function find (x, y, z){
    console.log(x, y, z);
}

function realize ({health}){
    console.log(health);
}
*/


// filter
// map
// reduce


const kits = ["Skeeing", "Mountaineering", "Climbing"];
const filteredKits = kits.filter((kit) => kit.length > 8);

const mappedKits = kits.map((kit) => (kit + " kit"));

const numbers = [34, 209, 74];
const reducedKits = numbers.reduce((accumulated, item) => accumulated + item, 0);

console.log(reducedKits);
console.log(filteredKits);
console.log(mappedKits);