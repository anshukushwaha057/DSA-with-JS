// approach 1

const palindrome = (str) => {
    if (typeof str !== "string") return "enter string"
    let j = str.length - 1
    for (let i = 0; i < str.length / 2; i++) {
        if (str[i] != str[j]) {
            return false;
        }
        j--
    }
    return true;
}

// console.log(palindrome('nitin')) // true
// console.log(palindrome("jahajs")) // false

// approach 2

const palindromeStr = (str) => {
    let rev = "";
    for (let i = str.length - 1; i >= 0; i--) {
        rev += str.charAt(i)
    }

    if (rev == str) {
        return true

    } else {
        return false
    }
}

console.log(palindromeStr("nitin"))



