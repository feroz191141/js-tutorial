const name = "Feroz"
const repoCount = 50

// console.log(name + repoCount + " value"); // not good practice 

console.log(`my name is ${name} myrepo count is ${repoCount} value`);


const newName = new String ("Feroz")

console.log(newName[0]);
console.log(newName.__proto__);
console.log(newName.toUpperCase());
console.log(newName.charAt(3));
console.log(newName.indexOf("z"));
//
let newString = newName.substring(0,3)
console.log(newString);
//
let newSliceString = newName.slice(-4 , 3)
console.log(newSliceString);
//

const newStringOne = "  Feroz"
console.log(newStringOne);
console.log(newStringOne.trim())

//

let url = 'www.google.com/history%20feroz'
console.log(url.replace('%20','-'))

//toarray split based on -

const comName = new String ("Feroz-hc-com")
console.log(comName.split('-'))

