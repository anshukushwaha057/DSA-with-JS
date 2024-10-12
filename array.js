
let arr1 = [];
let arr2 = [3, 5, 5, 2, 2, 4, 2];
let arr3 = ["anshu", 5, true, null, undefined, BigInt(383)] // in js array are hactegeneous(that can store all type of data)
let x = Array.from("anshu") // conver string into array
let arr4 = Array.of(2, 4, 4, 2, 1)
let arr5 = Array.from([3, 5, 3, 2, 2, 4])
let arr6 = new Array(1, 2, 9, 4, 3, 6, 6)


// accessing individual data
const name = "Anshu";
const name1 = Array.from(name)
const a = name1.find(n => n == 's')
// console.log(a)

for (let i = 0; i < name.length; i++) {
    if (name[i] === 'hu') {
        console.log(name[i])
    }
}

// que1 

const digits = [0, 1, 0, 1, 1, 1, 0, 0, 1, 0, 1];

function zeroOne(arr) {
    let countZero = 0;
    let countOne = 0;
    
    let zeros=[];
    let ones=[];
    for (let i = 0; i < arr.length; i++) { 
        if (arr[i] === 0) {
            zeros.push(arr[i])
            countZero += 1;  // Count zeros
        } else {
            ones.push(arr[i])
            countOne += 1;   // Count ones
        }
    }
    
    return { countZero,zeros, countOne,ones };  // Return both counts
}

// Example usage:
const result = zeroOne(digits);
console.log(result);  // Output: { countZero: 5, countOne: 6 }






