
// let a = 10
// const b = 20
// var c = 30

// console.log(a);
// console.log(b);
// console.log(c);

// if (true){
//     let a = 10
//     const b = 20
//     var c = 30
// }
// console.log(c); //willprint 
// console.log(a);// will not print


let a = 300

if (true) {
    let a = 500
    const b = 20
    var c = 30
    console.log('inner :'+a);
}
console.log('outer :'+a);

function one(){
    const username = "feroz"

    function two(){
        const website = "youtube"
        console.log(username);
    }
    // console.log(website);  //this cannt be accesedbeause it isoutside scope
    two()
}
one()

if(true){
    const username = "feroz"
    if (username) {
        const website = " youtube"
        console.log(username +  website);
       }
 
}
  //    console.log(username); // willnot be accessed


  //**************************Intresting******************************** */
  addone(5) //can be defined before if  function defined like below

  function addone(num){
    return console.log(num+1);
  }

    // addtwo(8)   //cannot be defiend before

  const addtwo = function(num){
    return console.log(num+2);
  }

  addtwo(8)
