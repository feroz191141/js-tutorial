

const programming = ["c","c++","java","cpp"]

programming.forEach(function (value) {
    // console.log(value);
})

programming.forEach( (value)=> {
    //  console.log(value);
})

programming.forEach( (value,index,arr)=> {
      console.log(value,index,arr);
})



// [{},{},{}] scenario

const myCoding = [
    {
        languageName : "javascript",
        languageFileName : "javascript.file"
    },
    {
        languageName : "java",
        languageFileName : "java.file"
    },
    {
        languageName : "c",
        languageFileName : "c.file"
    }
]

myCoding.forEach((item)=>{
    console.log(item.languageName);
})
