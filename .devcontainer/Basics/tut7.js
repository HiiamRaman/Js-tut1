// lets discuss  about Numbers and Scores in JS 
const score = 400;
console.log(score);
const balance = new Number(100);  //The new keyword is used in JavaScript to create a object from a constructor function
console.log(balance);
console.log(balance.toString().length);
console.log(balance.toFixed(2));   //toFixed() method  is used to format a number with a specified number of decimal places
const hundreds = 10000000000;
console.log(hundreds.toLocaleString());  // this is represented in English number system
console.log(hundreds.toLocaleString('en-IN'));    // this is in Nepali system

//MATH (this is an object)
 console.log(Math);
 console.log(Math.abs(-4));  //what it does is this math.abs() convert the any negative number into positive integer 
 console.log(Math.round(5.6))  //what it does round func. round off any value 
//  we also have function , Math.ceil() method rounds a number rounded UP to the nearest integer.
console.log(Math.ceil(3.12));
// we will use Math.Round off function more in our codes 
console.log(Math.max(3,5,7,8,1,0)); 
//The Math.max() method returns the number with the highest value. 
console.log(Math.min(3,5,7,8,1,0));
//The Math.min() method returns the number with the smallestvalue. 
console.log(Math.floor (Math.random()*10 + 1)); 
//The Math.random() method returns a random floating point number between 0 (Min.) and 1 (Max).
