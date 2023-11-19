//singleton

//Object.create

//object literals

const mySym = Symbol();

const jsUser = {
    name:'Feroz',
    "fullName":"Feroz Mohammad",
    [mySym]:"symbol",
    age:24,
    location:"hyderbad",
    email:"feroz@gmail.com",
    isLoggedIn: false,
    lastLoggedIn:["Monday","Saturday"]
}

// console.log(jsUser.email);
// console.log(jsUser.fullName);
// console.log(jsUser[mySym]);

// Object.freeze(jsUser)

// jsUser.email = "chat@gmail.com"
// console.log(jsUser.email);


//function in objects

jsUser.greeting = function(){
    console.log("Hello User");
    }
jsUser.greetingTwo = function(){
    console.log(`Hello Use ${this.name}`);
    }
console.log(jsUser.greeting());
console.log(jsUser.greetingTwo());

