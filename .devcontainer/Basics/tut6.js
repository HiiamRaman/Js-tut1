//lets talk about Stack and Heap Memory 
// The stack is used for static memory allocation, while the heap is used for dynamic memory allocation
//  we need to know about the Strings in javascript
let text = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
let length = text.length;
console.log(length)
const name = "Raman" 
 const repocount = 50  //repocount is nothing but the number of repository in git /
 console.log(name + repocount + "Binay");
 // modern ways 
 console.log (  `hello my name is ${name} and my repo count is ${repocount} `) ;   // what i did here is  we used back (`) so it works not ""

const discord_name = new String ('iRaman') ; // this is string object 


console.log(discord_name[0]);
console.log(discord_name.length);
console.log(discord_name.toUpperCase());   //touppercase is use to convert data into uppercase
console.log(discord_name.charAt('5'));    // this charat is use to find the character prestent in any psoition
console.log(discord_name.indexOf('m'));        // in this we can find character present in any position 
const newString = discord_name.substring(0,5)
console.log(newString);
const anotherString = discord_name.slice(-8,4) //  The slice() method extracts a part of a string. 
console.log(anotherString);
const Newstringone = "   Raman    "
console.log(Newstringone);
console.log(Newstringone.trim());   
// The trim() function in JavaScript is used to remove whitespace 
// (spaces, tabs, and newlines) from both the beginning and the end of a string. 


// SOMETIMES WE NEED TO REMOVE OR SWAP VALUE IN THE URL FOR EXAMPLE
const url = "https://ramansinghchauhan787@gmail.com"
console.log(url.replace('raman','binay'));  // this replace is use to swap any value or strings