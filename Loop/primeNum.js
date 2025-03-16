
function prime(num){
    if(num<=1 || isNaN(num)) return false
    else{
        for(let i=3; i<=Math.floor(Math.sqrt(num)); i+=2){
            if(num%i===0){
                return false;
            }
        }
        return true
    }
}

let n=3;
console.log(prime(n))

console.log(Math.sqrt(5))