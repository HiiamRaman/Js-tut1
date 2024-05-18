//lets talk about the Array 
// An array is a special variable, which can hold more than one value it can also  hold many datatype and array inside its own araay


const cars = ["Saab", "Volvo", 123];
const raman = [1 ,2 ,3 ,4, 5 ] 
console.log(raman[0]);  
const Arr = ["raman", "Binay", "aman" ]
console.log(Arr[1])
console.log(cars[2]);
// We can also add or push the value inside any array for example 
 cars.push(6)   // this isnthe syntax that is use to push data in the array
console.log(cars);
// In js we can also pop the data  from array and the syntax is 
cars.pop()
console.log(cars)


// lets talk about unshift in the JS
//The unshift() method is a built-in function in JavaScript that allows you 
//to add one or more elements to the beginning of an array
cars.unshift("Billa")
console.log(cars);

// cars.shift(cars)  
// The shift() method removes the first item of an array
console.log(cars);


console.log(cars.includes("Billa"));   
//The includes() method returns true if same string is present in array
// Otherwise it returns false.



console.log(cars.indexOf(20))   
// index of is use to determine the position (index) of entered data
console.log(cars.indexOf("Billa"));


// join() Method is used to join the elements of an array into a string.
const Surkhet = cars.join();
console.log(cars);
console.log(Surkhet);   // now the elements of cars are changed into strings
// lets talk about slice and splice 


console.log( "A" ,cars);
const Raman = cars.slice(1,4)   // The slice() method extracts(remove) a part of a string in aedge 
console.log( "B" ,Raman);
const aman = cars.splice(1,4)
console.log(Raman);
console.log( "C" ,Raman);
  