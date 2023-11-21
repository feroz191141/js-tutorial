

const myArr = [1,2,3,4,5,6]

for (const arr of myArr) {
    // console.log(arr);
    }

const greetings = "Hello World"

for (const greet of greetings) {
    console.log(greet);    
}


//Maps


const map = new Map()
map.set("IN","India")
map.set("USA","United states of america")
map.set("Fr","France")

map.set("Frnc","France") //can insert duplicate value with different key
map.set("IN","Indias") // cannot insert duplicate key

console.log(map);

for (const [key,value] of map) {
    console.log(key ,`:-`, value);
}

//forobject

// const myObject={
//     'game1' : "NFS",
//     'game2' : "spiderman"
// }

// for (const obj of myObject) {
//     console.log(obj );                  // notiterable
// }


const myObject={
    "game1" : "NFS",
    "game2"   : "spiderman"
}

//**************************forin method used below ************************

for (const key in myObject) {
   console.log(`${key} code for ${myObject[key]}`) 
   // wehaventused here (.key) because object not accesible outside scope
   //so took valuefrom argumnets like this
}

const programming = ["c","c++","java","cpp"]

for (const key in programming) {
    console.log(programming[key]);
}
    
