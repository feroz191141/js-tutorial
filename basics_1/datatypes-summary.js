 
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