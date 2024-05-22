function calculatedprice(...num1) {
    return num1
} 
console.log(calculatedprice(5,200,400, 100000))

// whats the intresting part is what will happen when i will add val1 and val2 in the parameters


function calculatedsum (val1,val2,...sum){


    return sum;
}
console.log (calculatedsum(23,34,5,6,7))

let sum = {                              // these are the objects
    username : "Raman",
    price : 20000
}

function handleobject(anyobject)          // THese are the functions
{
    console.log(`username is ${anyobject.username} and price is ${anyobject.price}`);

}
handleobject(sum)


// ths can be also done by 
let xyz= {
   Fullname : "Raman Singh chauhan" ,
   myage : 22

}
function Raman (object) {
    console.log(`User name is ${object.Fullname} , and Age is ${object.myage }`)

}
Raman(xyz)


function handleobject (Raman)  {
console.log(`My name is ${Raman.username} and he studies ${Raman.program}`);
}
handleobject  ({username : "Raman Singh Chauhan",program : "BECE"})

