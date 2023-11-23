// Dates

let myDate = new Date()
console.log(myDate);
console.log(myDate.toString());
console.log(myDate.toDateString());
console.log(myDate.toLocaleString());

console.log(typeof myDate);

let myNewDate = new Date(2023 , 0 , 23,5,3); // if zero takes jan
console.log(myNewDate.toDateString());
console.log(myNewDate.toLocaleString());

let myTimeStamp = Date.now()

console.log(myTimeStamp);
console.log(myNewDate.getTime())

console.log(Math.floor(Date.now()/1000));  // can compare easily now


let newDate = new Date()                // month starts from the zero date
// console.log(newDate);
// console.log(newDate.getMonth() + 1);
// console.log(newDate.getDay());

console.log(newDate.toLocaleString('default',{     //this way we can customize localString 
                                                    // complete name or short name
    weekday:"short"
}));
