let n = "nd";

if (isNaN(n)) {
    console.log("enter number")
} else {
    if (n > 0) {
        let ans = 0;
        for (let i = 0; i <= n; i++) {
            ans += i;
        }
        console.log(ans)
    } else {
        console.log("enter positive number")
    }
}