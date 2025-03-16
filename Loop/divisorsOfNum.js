let n = 0;

if(isNaN(n) || n<=1 ){
    console.log("number shoud be positive and more than 1")
}else{
        for(let i=2; i<=Math.floor(n/2); i++){
            if(n%i===0){
                console.log(i)
            }
        } 
        console.log(n)  
 }
