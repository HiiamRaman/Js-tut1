function one () {
    const username ="Raman";
    function two() {
        const website ="Youtube";
        
        // console.log(username);
    }
    two()
}
one()


if (true) 
{
    const name ="Raman Singh chauhan"
    if(name ==="Raman Singh chauhan")
        {
        const website = "WWW.Chrome.com"
        // console.log(name);
        // console.log(website);
    }
}


//lets talk about the for loop with break statement
   

for (let i = 0; i < 10; i++) {
    const element = i;
    // console.log(i);
    
}

let myArray = ["flash","batman","superman"]
// console.log(myArray.length);
for (let i = 0; i < 3; i++) {
    const element =myArray[i];
    // console.log(element);
    
}   

// lets talk about the break and continue statement
// break statement can also be used to jump out of a loop

for (let i = 0; i < 20; i++) {
    const element = [i];
    if(i==5) {
        console.log(`detected 5`);
        continue
    }
    console.log(element);
    
}


for (let i = 1; i < 20; i++) {
    const element = [i];
    if(i==10){
        // console.log(`the fav number is here ${i}`);
        continue
    }
    // console.log(`value of i is ${element}`);
    
}
for (let i = 0; i < 10; i++) {
    console.log(`outer loop value ${i}`);
    for (let j = 0; j < 10; j++) {
        // const element = [j];
        console.log(i ,'*',j ,'=', i*j );
        
    }
 
    
    
}