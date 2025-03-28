// INSERTING - insert a new value
let arr = [1,2,3,4,5,6,7,8,9,10]

arr.push(100) //  add a value at the last
arr.unshift() // add a value at the start

arr.splice(2,0,25) 
// startIndex → The position where elements will be added/removed.
// deleteCount → The number of elements to remove (0 means no deletion).
// item1, item2, ... → Elements to insert at startIndex. 


arr[1]=200; // ✅

arr[arr.length]=200;

console.log(arr)