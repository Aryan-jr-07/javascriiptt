// these are the way of making arrow functions in JavaScript

// 1. Regular function declaration
let test = function() {
    console.log("this is the test function")
}

// 2. Arrow function with curly braces
let test1 = ()=>{
    console.log("this is the test1 function")
}

// 3. Arrow function without curly braces
let test2 =() => console.log("this is the test2 function")

let cou =(a, b) => console.log(`${a} + ${b} = ${a+b}`)


test()
test1()
test2()
cou(5,10)