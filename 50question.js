// 1. Write a JavaScript program to find the maximum number in an array. 
const arr = [3, 9, 5, 6, 2, 4, 34, 3, 3]
minNumber = (arr) => {
    const min = Math.min(...arr) //here I am parsing arr with rest operator
    console.log(min)
}
// minNumber(arr)

// 2. Write a JavaScript function that takes an array of numbers and returns a new array with only the even numbers.
function even(arr) {
    let evenNum = []
    for (let i = 0; i <= arr.length; i++) {
        if (arr[i] % 2 === 0) {
            evenNum.push(arr[i])
        }
    }
    // return evenNum;
    return arr.filter((num) => num % 2 === 0) // second option in using filter method 
}

// console.log(even(arr))

// question 3 Write a JavaScript program to calculate the factorial of a given number.
function factorial(number) {

    // if (number === 0 || number === 1) {
    //     return 1;
    // } else {
    //     return number * factorial(number - 1);
    // }

    let factorial = 1;
    for(let i=number; i>=1; i--){
        factorial*=i;
    }
    return factorial

}
// console.log(factorial(5))

// que 4  Write a JavaScript function to check if a given number is prime. 
function primeNum(num){
    if(num===0 || num<2) return "najak nhi";
    for(let i=2; i<=num-1; i++){
        if(num%i===0){
            return 'Not Prime';
        }
    }
    return "prime"
}
// console.log(primeNum(6))

// question 5 Write a JavaScript program to find the largest element in a nested array. 
const largetElement=(nestedArray)=>{
    let flateArr=nestedArray.flat(Infinity)
    return Math.max(...flateArr);
}

const nestArr = [12,3,3,2,[2,6,9,9],[38,73,99,[74,2,8,84]]]
console.log(nestArr.flat(Infinity))
console.log(largetElement(nestArr))
