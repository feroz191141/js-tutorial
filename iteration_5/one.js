//for

for (let i = 0; i < 10; i++) {
    const element = i;
    if (element == 5) {
        // console.log(`we got nuber 5`);
    }
    // console.log(element);    
}



for (let i = 0; i < 10; i++) {
    // console.log(`outer loop :${i}`);

    for (let j = 0; j <=10; j++) {
        // console.log(`inner loop :${j}  // and outer loop${i}`);
        
    }        
}

//tables from 1 to 10

for (let i = 0; i <=10; i++) {
    //  console.log(`table number :${i}`);
    //  console.log(`below is the table`);

    for (let j = 0; j <=10; j++) {
        
        // console.log(i +`*`+j+`=`+ i*j);
    }        
}

//Arrays style

let myArray = ["batman","superman","ironman"]
for (let i = 0; i < myArray.length; i++) {
    const element = myArray[i];
    // console.log(element);
    
}

//break and continue

for (let i = 1; i <=20; i++) {
    if (i==5) {
        console.log("detected 5");
        break;
    }
    // console.log(`value is ${i}`);
    
}

//continue


for (let i = 1; i <=20; i++) {
    if (i==5) {
        console.log("detected 5");
        continue;
    }
     console.log(`value is ${i}`);
    
}