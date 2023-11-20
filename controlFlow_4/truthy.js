
// const userEmail = "feroz@gmail.com"
const userEmail = "feroz"

if (userEmail) {
    console.log(`yes email`);
}
else{
    console.log(`no email`);
}

// Nulish coalesing operator (??)

let val1;

// val1 = 5??10
// console.log(val1); // 5 is assigned

// val1 = null ?? 10
// console.log(val1); //10 assigned ,if no value in place of 10 null assigned

// val1 = undefined??10
// console.log(val1);

const teaPrice = 100;       //terinary operator
teaPrice <= 80? console.log(`less than 80`):console.log(`more than 80`);;
