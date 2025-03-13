// que 2 electricity bill 

let unit = 140;
let payableAmount = 0;

if (unit > 400) {
    payableAmount += (unit - 400) * 13
    unit = 400
}
if (unit > 200 && unit <=400) {
    payableAmount += (unit - 200) * 8
    unit = 200
}
if (unit > 100 && unit <=200) {
    payableAmount += (unit - 100) * 5
    unit = 100
}
payableAmount += unit * 4.2
console.log(payableAmount)