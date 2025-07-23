/* 
// array -- array are use to store multiple values in a single variable

// array provides you an ordered  collection of data
var arr =[12, "bmw", true, null, undefined]
console.log(arr);

// you can access the elements of an array using their index
console.log(arr[3]); // null
// index starts from 0
var a = arr[1]; // accessing the second element
console.log(a); // bmw

// you can also change the value of an element in an array
arr[3] = "siuuu";  // changing the value at index 3 null to "siuuu"
console.log(arr[3]); // siuuu

// you can also add new elements to an array
arr[5] = "new element"; // adding a new element at index 5
console.log(arr[5]); // new element

// you can also find the length of an array
console.log('the length of the array:', arr.length); // 6


// inbuilt js array methods
var arr2 = [1, 2, 3, 4, 5];
console.log(arr2)

// pop method -- removes the last element from an array
var c = arr2.pop();
console.log(c) // 5
console.log("popped array:", arr2); // [1, 2, 3, 4]

// push method -- adds a new element to the end of an array
var d = arr2.push(100);
console.log("pushed array:", arr2); // [1, 2, 3, 4, 100] 
console.log(d); // this will return the new length of the array, the output will be 5 cuz the updated array length is 5
*/


/*
// shift method -- remove the first element from an array
var arr3 = [1, 2, 3, 4, 5];
var e = arr3.shift(); // this will remove the first element (1) from the array
console.log(e); // 1
console.log(arr3); // [2, 3, 4, 5]
var k = arr3.push(); // this will add 100 to the end of the array
console.log(k); // 4 (this will give the new length of the array)
console.log(arr3); // [2, 3, 4, 5]
*/

// unshift method -- adds a new element to the beginning of an array
var arr3 = [1, 2, 3, 4, 5];
var f = arr3.unshift(69); // this will add 69 to the beginning of the array
console.log(arr3); // [69, 1, 2, 3, 4, 5]
console.log(f); //6 // this will give the length of thr array after adding new element