console.log("hello everyone ");

// lets merge or combine  the array   it can be done by using push too 

// we dont prefer this method 
const Raman =[0,2,3,4,4,6]
const Binay =["raman","binay" ,"aman"]
// Binay.push( Raman);
// console.log("A",Binay);


// but we prefer "concat" as it combines all elements in one array
// const Aman = Raman.concat(Binay)
// console.log("B",Aman);
//  Nowdays people use to prefer the Spread as it is easy to implement but ist function is very similar to concat
  const Allperson = [...Raman,...Binay]  
  console.log("C",Allperson);

   // Easy peasy right????

//    lets take a look if we make visual studio to create array
console.log(Array.isArray (Binay));  // yes we do have array named BInay 
console.log(Array.isArray ("Rohan"));
console.log(Array.from ("SCIENCE"))   
// Here this helps us to create an array directly 

let student_roll = 6 
let student_class = 1
console.log(Array.of(student_class,student_roll));
