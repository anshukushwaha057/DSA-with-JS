// while another example 

let num = 1234
let sum = 1;
while(num>0){
    let t = num%10;
    let fact = 1;
    for(let i=1; i<=t; i++){
       fact *= i
    }
    num = Math.floor(num/10)
}

console.log(sum)