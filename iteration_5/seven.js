//reduce

const myNums = [1,2,1,2,5,7,6]

const intialValue = 0

// const newNums = myNums.reduce(function(acc,current){
//     console.log(`${acc} and current value ${current}`);
//     return acc+current    
// },intialValue)
// console.log(newNums);

// ***************we can directly give at intial value as zero also
// ************brlow with arrow function

const myTotal = myNums.reduce((acc,current) => acc+current,0) 

console.log(myTotal);


//********cart total below using reduce  */

const shoppingCart = [
    {
        itemName: "js course",
        price: 2999
    },
    {
        itemName: "py course",
        price: 999
    },
    {
        itemName: "mobile dev course",
        price: 5999
    },
    {
        itemName: "data science course",
        price: 12999
    },
]

const priceToPay = shoppingCart.reduce((acc, item) => acc + item.price, 0)

console.log(priceToPay);