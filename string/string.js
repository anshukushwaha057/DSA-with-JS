// strings are immutable in JavaScript. This means that once a string is created, it cannot be changed.

const str = "A question on JavaScript String";

//lenght
const length = str.length

//case
let charCapital = str[12].toLocaleUpperCase()

// char At
let index = 12
let char = str.charAt(index)

// index
let index1 = str[12]

//If the index is out of bounds:
//str.charAt(12) // returns an empty string ("").
//str[12] //returns undefined.

//at
let str1 = "Hello, World!"; 
// console.log(str1.at(-1)) // reverse se le leta hai 
// console.log(str1[-1]) // undefined
// console.log(str1.charAt(-1)) // "" 

// substring
let subString = str.substring(1,22) 

// slice
let strSlice = str.slice(1,22)
// console.log(subString);
console.log(strSlice);

// concat 
let str3 = "Hello";
let str2 = " Ustad!";
let result = str3.concat(str2);
console.log(result); // Output: "Hello Ustad!"



// console.log(str1.substring(-5, 5)); // Output: "Hello" (Negative converted to 0)
// console.log(str1.slice(-1, 5));     // Output: "" (Start is after end)

// console.log("substring",str1.substring(10,5)) 
// console.log("slice "+str1.slice(10,5)) / // Output: "" (empty string)

for (let index = 0; index < str.length; index++) {
    const char = str[index];
    // console.log(index , char)
    
}





