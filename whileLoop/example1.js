// while jb tk condtion true hai bs ye btao rokna kb hai

let n = 10
while (n > 0) {
    console.log("hello")
    n--
    if (n === 5) break;
}

// if condtion is false still iteration will run one time
do {
    console.log(`run atleast once`)
} while (false)

//nested while 

let i = 1;
while (i <= 5) {
    let j = 0
    console.log('iteration no -', i);
    while (j < 5) {
        console.log(" * ")
        j++
    }
    i++
}

