
const user={
    username:"Feroz",
    price:"999",

    welcomeMessage: function(){
        console.log(`${this.username} welcome to website`);
        console.log(this);
    }
}
// user.welcomeMessage()

// console.log(this);
// user.welcomeMessage()

// function chai(){
//     let username = "feroz"
//     console.log(this.username);  // prints undefined b/c not works inside the fucntion
// }

// type todeclare a function by arrow 

// const chai = function (){
//     let username = "feroz"
    
// }

const chai = () =>{
    let username = "feroz"
    console.log(this.username);  // prints empty b/c not works inside the fucntion
}
// chai()


// const addtwo = (num1,num2) =>{
//     return num1+num2
// }
const addtwo = (num1,num2) => num1+num2

console.log(addtwo(7,1));

