// lets talk about adding function 
  
const Raman = {
    name: "Billa" ,
    age: 12 ,
    email:"raman201223@gmail.com"
}
console.log(Raman.name);  // easy method 
console.log(Raman["age"]);

Raman.greeting = function() {      //Creating function just like we create other variables 
    console.log("Hello  Binay");
}
console.log(Raman.greeting);

