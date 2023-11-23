const promiseOne = new Promise(function(resolve,reject){
    //do any async task
    //db calls , crypto, network
    setTimeout(function(){
        console.log('Async fucnniton called');  
        resolve()      
    },1000)
})

promiseOne.then(function(){
    console.log("promise Resolved");
})

//promise two ****************************************************

new Promise(function(resolve,reject){
    //do any async task
    //db calls , crypto, network
    setTimeout(function(){
        console.log('Async task two ');  
        resolve()      
    },1000)
})

.then(function(){
    console.log("promise 2 Resolved");
})


// promise three****************************************

const promiseThree = new Promise(function(resolve, reject){
    setTimeout(function(){
        resolve({username: "feroz123", email: "feroz@example.com"})
    }, 1000)
})

promiseThree.then(function(user){
    console.log(user);
})

//promise four **********************************************

const promiseFour = new Promise(function(resolve, reject){
    setTimeout(function(){
        let error = false
        if(!error){
            resolve({userName: "feroz",password : "123"})
        }else{
            reject("something went wrong")
        }
    }, 1000)
})

promiseFour.then(function(user){
    console.log(user.userName);
    return user.userName
})
.then(function(userName){
    console.log(userName);
})
.catch(function(error){
    console.log(error);
}).finally(function(){
    console.log("promisefinally completed");
})

//promsie five

const promiseFive = new Promise(function(resolve, reject){
    setTimeout(function(){
        let error = true
        if(!error){
            resolve({userName: "javascript",password : "123"})
        }else{
            reject("js went wrong")
        }
    }, 1000)
})

async function consumePromiseFive(){
   try {
    const response = await promiseFive
    console.log(response);
   } catch (error) {
    console.log(error);
   }
}
consumePromiseFive()

// making datafrom git api

// async function consumeGitApi(){

//        try {
//         let data = await fetch('https://api.github.com/users/feroz191141') 
//        const jsonData = await data.json()
//        console.log(jsonData);
//        } catch (error) {
//         console.log(error);
//        }
//     }
//     consumeGitApi()


// now print the data using then and catch


fetch("https://api.github.com/users/feroz191141")
.then(function(response){
    return response.json()
})
.then(function(data){
    console.log(data);
})
.catch(function(error){
    console.log(error);
})
