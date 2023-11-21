// const tinderUser  = new Object()

const  tinderUser = {}

tinderUser.id = "123abc"
tinderUser.name = "feroz"
tinderUser.isLoggedIn = false

// console.log(tinderUser)

const regularUser = {
    email : "feroz@gmail.com",
    userFullName:{
        firstName: "Feroz",
        lastName: "Mohammad"
    }
}

// console.log(regularUser.email);
// console.log(regularUser.userFullName.firstName);
// console.log(regularUser.userFullName.lastName);

const obj1 = {1:"a",2:"b"}
const obj2 = {3:"a",4:"b"}

// const obj3= {obj1 , obj2}
// console.log(obj3);

// const obj3 = Object.assign({},obj1,obj2)

// console.log(obj3);

const obj3 = {...obj1,...obj2}
// console.log(obj3);

// console.log(Object.keys(tinderUser));
// console.log(Object.values(tinderUser));
// console.log(Object.entries(tinderUser));


// console.log(tinderUser.hasOwnProperty('isLoggedIn'));

//*****************************object part 3**************



const {
    
} = tinderUser // to pull the value from object (destructuring)
console.log(
    
);
