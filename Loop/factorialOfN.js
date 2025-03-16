let n = 5;

if(isNaN(n) || n<=1 ){
    console.log("value shoud be positive Number")
}else{
    let ans = 1;
    for(let i=1; i<=n; i++){
        ans *=i;
    }
    console.log(ans)
}


