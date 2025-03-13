/*
que 1
 const amount = 5880;
let payableAmount = 0;
if (amount > 9000) {
    payableAmount = amount - (20 * amount) / 100
}
else if (amount > 7000 && amount < 9000) {
    payableAmount = amount - (10 * amount) / 100
}
else if (amount > 5000 && amount < 7000) {
    payableAmount = amount - (5 * amount) / 100
}
else{
    payableAmount = amount;
}
console.log(payableAmount) */


const amount = -4747;
let dis =0;

if(amount<0) return console.log("negative value")

if (amount > 9000) {
    dis = 20
    console.log(amount-(dis*amount)/100)
}
else if (amount > 7000 && amount < 9000) {
    dis = 10
    console.log(amount-(dis*amount)/100)
}
else if (amount > 5000 && amount < 7000) {
    dis = 5
    console.log(amount-(dis*amount)/100)
}
else if (amount <= 5000) {
    console.log(amount)
}
else{
    console.log("invalid input");
    
} 

