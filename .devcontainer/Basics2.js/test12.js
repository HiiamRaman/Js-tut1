// Lets talk about the promises and callback in JS
// A Promise contains both the producing code and calls to the consuming code:

// Promise Syntax
// let myPromise = new Promise(function(myResolve, myReject) {n\
// // "Producing Code" (May take some time)

//   myResolve(); // when successful
//   myReject();  // when error
// });

// // "Consuming Code" (Must wait for a fulfilled Promise)
// myPromise.then(
//   function(value) { /* code if successful */ },
//   function(error) { /* code if some error */ }
// );
 const ticket =   new Promise(function(resolve,reject)
 {
const isBoarded = false;
if(isBoarded) {
    resolve("You are in the flight");
      
}else{
    reject("Your flight is cancelled ")
}

 });
 ticket
 .then((data) => {     //.then executes on resolve
    console.log("Your are verfied ", data);
 })
.catch((data)=> {       //.catch executes on catch
    console.log("you are not verified ", data);
}
)