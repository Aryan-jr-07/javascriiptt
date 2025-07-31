var a =35
// console.log(a);
if(true){
    var a = 20;
    // console.log(a); // 20
}
console.log(a); // 20

// here what happens is that the variable 'a' is hoisted to the top of its scope, which is why it can be accessed outside the block where it was declared.
// but if we are doing console.log(a) inside the if block will print 20, because the variable 'a' is reassigned to 20 within the block.
// but if we do console.log(a) outside the if block it will print 20 as well, because That inner assignment (a = 20) overwrites the previous value (35).
// and variable declared with var keyword are not block scoped, they are function scoped. it means agar variable function k andar declare hua h to wo function k andar hi accessible hoga,
// lekin agar variable global scope mtlb function k bahar declare hua h to wo function k bahar bhi accessible hoga.

// but if we use let or const instead of var, the behavior changes:
// we will see in next snippet (file)



// function test() {
//     let c = 10;
//     console.log(c); // 10
// }
// test();
// // let c = 90;
// console.log(c); // ReferenceError: c is not defined