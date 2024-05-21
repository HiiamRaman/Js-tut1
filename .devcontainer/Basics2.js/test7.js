// const pubguser = {}     // const pubguser === new object
// pubguser.id ="123xyz";
// pubguser.name ="Raman"
//  pubguser.isloggedin = true;
//     console.log(pubguser)
    
    

//     const Regularuser = {
//         email :  " raman@gmail.com" ,
//         fullname : {
//          userfullname : {
//             firstname :  "Raman Singh" ,
//             lastname : "Chauhan",
//          }
//         }
//     }

//     console.log(Regularuser.fullname);
//     console.log(Regularuser.email);
//     console.log(Regularuser.Regularuser);


// lets talk about adding objects and function 
const obj1 = {1:"a", 2:"b"}
const obj2 ={3:"c",4:"d"}
// const obj3 = Object.assign({},obj1,obj2);   // this assign is use to add two or more objects in same object
// console.log( obj3);

//But we will use the spread format
const obj3 = { ...obj1, ...obj2} 
console.log(obj3);