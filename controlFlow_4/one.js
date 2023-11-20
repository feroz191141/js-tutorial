// if

if(true){
    //code executed
}
//< , > ,<= ,>=,==,!= , ===

const temparature=41;

if (temparature === "41") {
    console.log(`yes temparature is less than 50`);
}
else{
    console.log("value entered is not correct or more than 50");
}

const score =100;
if (score > 50) {   
    const power = 'fly'
    console.log(`${power}`);    
}
// console.log(`cannot  use power here`);

const balance=800

// if (balance > 500) console.log("test")  //implicit //scope without {} notgood to use like this

// if (balance < 500) {
//     console.log(`balance less than 500`);    
// }
// else if (balance < 750) {
//     console.log(`balance less than 750`);
// }
// else if(balance < 900){
//     console.log(`balance less than 900`);
// }


const userLoggedIn = true
const debitCard = true

if(userLoggedIn && debitCard ){
    console.log(`allowed to shop`);
}


