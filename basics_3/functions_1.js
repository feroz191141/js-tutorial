
function sayName() {
    
    console.log('f');
    console.log('e');
    console.log('r');
    console.log('o');
    console.log('z');
}

//console.log(sayName());

// function addNumbers(number1 , number2){
//     console.log(number1+number2);
// }

// addNumbers(2,5)

// function addTwoNumbers(number1 ,number2){
//     let resultGot = number1+number2
//     return resultGot;
// }

// const result = addTwoNumbers(5,9)
// console.log(result);

// function loginuserMessage(username){
//     if(!username){
//         return console.log("username  is not entered");
//     }
//     return `${username} just logged in`
//     }


function loginuserMessage(username = 'fer'){
    if(!username){
        return console.log("username  is not entered");
    }
    return `${username} just logged in`
    }

// console.log(loginuserMessage("feroz"));

 function prices(...num){
    return num
 }

 console.log(prices(100,500,456,478));

 // 

 const username ={
    fisrtname:"Feroz",
    pno: 8374315619
 }

 function printdetails(objectName){
    return console.log(`${objectName.fisrtname} phone number is ${username.pno}`);
 }

 printdetails(username);