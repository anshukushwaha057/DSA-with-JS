let array1 = new Array() //❌
let array3 = [] //✅
let array2 = new Array(4) // fixed zise //NOTE - create empty array of length 4
let array4 = new Array(1,2,4,4,5,6,6) 
let array5= [2,3434,4,2,34,4]

for (let i = 0; i < array2.length; i++) {
    // array2[i] = prompt("enter number");
    array2[i] = i+10
    
}
// console.log(array2)


let i=0;
while(i<10){
    array3[i] = i+20
    i++
}

console.log(array3)