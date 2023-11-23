

const marvel_heros = ["thor","ironman","spiderman"]
const dc = ["superman" ,"flash","batman"]

// marvel_heros.push(dc)

// console.log(marvel_heros[3][0]);

const allHeros = marvel_heros.concat(dc)
console.log(allHeros);

const allNewHeros = [...marvel_heros,...dc]
console.log(allNewHeros);

const anoterArray = [1,2,3,[4,5,6],7,[8,[9,8],7]]

const newanotherArray = anoterArray.flat(Infinity)
console.log(newanotherArray);

console.log(Array.isArray("Feroz"));
console.log(Array.from("Feroz"));

console.log(Array.from(({name : 'feroz'})));  // will not return anything
console.log(Array.from(Object.keys({name : 'feroz'})));
 // will return keys beacuse when  object should should specify array of keys or values

 console.log(Array.from(Object.entries({name : 'feroz'}))); //key value pair both

let score1=100
let score2 = 200
let score3 = 300
console.log(Array.of(score1,score2,score3))