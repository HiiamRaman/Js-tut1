// Lets talk about the functions in Javascript
// JavaScript, functions are first-class objects, because they can be passed to other functions, returned from function

function name() {                       // here the name is the name of function its variable 
    console.log("Raman");
    console.log("Raman");
    console.log("Raman");
    console.log("Raman");
    console.log("Raman");

}
// name()
function sum (number1,number2) {                                //
    console.log(number1+number2);

} sum(2,13)                                                    //Basics 
   function sum(a,b) {
    let result = a+b;
    console.log(result);
    return result
   }
//    const result = sum(2,3)
  
function sum(a,b){
    return a+b 
}
const result = sum(4,5)
console.log("Result:",result);