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
console.log(arr[3]); // new value