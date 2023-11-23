 
 // primitive 

 // 7 types : String , Number , Boolean , null , undefined , BigInit
 
 
 const id = Symbol('123')
 const anotherId = Symbol('123')

 console.log(id == anotherId); // false becuse everthingis unique in itself becuse of symbol

 const bigNumber = 1564561684561n; // bigInit
 console.log(typeof bigNumber);

 // reference type or non-prmitive

 //Arrays , Objects ,Functions

 const heros = ["superman" , "ironman", "thor", " harrypotter"]; // array 

 let myObj = { // this  is a object stored in a varaible
    name: "Feroz",
    age: 24,
 }

 const myFunction = function() {
    console.log("hello world");
 }

 console.log(typeof myFunction);



 // **********************************************************************

// stack and heapmemory 

// stack (primitive) , heap (non primitive)


let myProject = "Javascript"  //stored in the stackmemory

 let mySecondproject=myProject  //this is the copy made of the variable original

 mySecondproject="ReactJs"

console.log(myProject); //original is still there

console.log(mySecondproject);


//nonprimitive (heap memory)

let userOne = {            
   email: "feroz@gmail.com",
   upi: "user@ybl"
};

let userTwo = userOne

userTwo.email = "fs@gmail.com";

console.log(userOne.email);
console.log(userTwo.email);
