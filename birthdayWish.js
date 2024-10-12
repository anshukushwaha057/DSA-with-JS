// const dob = new Date(2024,9,2).toLocaleDateString('en-IN')
// const date =new Date().toLocaleDateString('en-IN')
// console.log(dob)
// console.log(date)

// if(dob===date){
//     console.log("Happy Birthday ")
// }

const myDdate="2"
const myDmonth = "10"

const dayToday = new Date().getDate();
const dayMonth = new Date().getMonth()+1;

console.log(dayMonth)
console.log(dayToday)

if(dayMonth==myDmonth && myDdate==dayToday){
    console.log("HBD")
}