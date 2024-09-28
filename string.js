// creating string

const name = "anshu";
const str2 = 'Anshukumar';
const str3 = new String("anshu");

const greeting = `hello ${name} how are you `;

// power of backtick (``)
function text(String) {
    console.log(String);
}

text(`hello this ${name} and full name is ${str2}`)

// length of string

const lenghtOfStr = str2.length;

// access character
const skyValaue = str2.charCodeAt(0) // sky vlaue of that character

const charAt = str2.charAt(0);

const strAtIndex = str2[2]

//making array of string
const strToArr = Array.from(str2)

for (let i = 0; i < strToArr.length; i++) {
    if (strToArr[i] == "k") {
        // console.log(strToArr[i].toLocaleUpperCase());
    }
}

const acceesElement = strToArr.forEach((Elements) => Elements)

const user = "Anshu kumar kushwaha";
console.log(user);


// serching index by character

let serchIndex = user.lastIndexOf("n") // its return index number
let lastIndexOfUser = user.lastIndexOf("n"); // its return index no .starting counting from (last) // 18

// modifying
const changeName = user.replace("anshu", "vaibhav");

const changeCharOfName = user.replace("a", "x") // its change only first char

// adding new string

const newStr = " Noida";
const addingNeqString = user.concat(newStr);

const anotherOne = user + " BCA ";

// trim string
let msg = "   heloo     ";

let msgTrim = msg.trim()

let msg2 = "             heloo        ji     ";

let removeWhiteSpace = msg2.trim().replace(/\s+/g, ' ')

// other 
const q1 = user.startsWith("a")// true
const q2 = user.endsWith("k")// false


// extracting sub string 

const subString = user.substring(0, 5); //anshu

const subStringBySlice = user.slice(0, 5) // anshu
const subStringBySlice2 = user.slice(-14, -1) // kumar kushwaha

// convert case
const myname = { name: "Anshu" };
const MynameInStr = String(myname);  // its return [Object Object] bcoz my name is object


const mynameByStringfy = JSON.stringify(myname); //{"name":"anshu"}

const uppserCase = user.toLocaleUpperCase();
// console.log(uppserCase);

// //  internal work of js

console.log("a" === "A"); // false because sky value are not same 

//compare
const a = "apple";
const b = "banana";
console.log(a.localeCompare(b))

// split and join 

const splitStr = user.split("") //() ['Anshu kumar kushwaha']
// join('')
console.log(splitStr);

const arr = ["apple", "banana"];
console.log(arr.join(" and "))

// question 1
/* write a function called truncate thats check the length of given string and if it surpases a specified maximum length, it replace the end of the string with the ellipsis character "..." so that the length matches the maximum length */
const greetingToAll = "hello everyone! how are you";
function truncate(str, maxlength) {
    if (str.length < maxlength - 2) return str;
    if (str.length > maxlength) {
        return str.slice(0, maxlength) + "..."
    }
}

console.log(truncate(greetingToAll, 5))

// question 2
/*A interge is a palindrome when it reads the same forwarnd and backward */

const int = 121;
const int2 = 20;

function palindrome(x) {
    const check = Number(x.toString().split("").reverse().join(""))
    if (x === check) return `palindrome ${x}`
    else return `not palindrome ${x}`
}

console.log(palindrome(12))

// console.log("anshui".split("").join(""))

//oneliner
function pd(x) {
    return x < 0 ? false : x == x.toString().split("").reverse().join("")
}
console.log(pd(121))

// question 3 
/* Give two string x and y, return the handling distance between them */

const x = "hello";
const y = "hrllw";

function distanceHandler(x, y) {
    if (x.length != y.length) return "string must be same length";
    let distance = 0;

    for (let i = 0; i < x.length; i++) {
        if (x[i] !== y[i]) {
            distance++;
        }
    }
    return distance;
}

console.log(distanceHandler(x, y))

// question 3
// valid anagram 
function anagram(str1, str2) {
    if (str1.length !== str2.length) return "word should be same lenth";

    let s1 = str1.split("").sort();
    let s2 = str2.split("").sort();

    for (let i = 0; i < s1.length; i++) {
        if (s1[i] !== s2[i]) {
            return "not anagram";
        }
    }

    return "anagram";
}


console.log(anagram("listen", "silent"))