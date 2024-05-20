//lets talk about Objects in JS
//   object literals
const Raman =  {
    name: "Billa",
    age: 12, 
    email: "ramansinghchauhan787@gmail.com"
}
console.log(Raman["age"]);
console.log(Raman["name"]);
console.log(Raman["email"]);



//you can also change the email 




Raman.email = "Criminal123@gmail.com" ;
console.log(Raman['email']);
// If you want to freeze the object you can directly freeze the object by
Object.freeze(Raman)     //Freezed 

Raman.age = 123;
console.log(["age"]);



