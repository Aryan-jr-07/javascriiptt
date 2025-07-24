// objects
// since array are always ordered but the objects are unordered collection of data  

var person={
    name:"aryan",
    age:21,
    student:true,
    hobbies:["football","swimming","coding"],
    address:{
        city:"delhi",
        road_no:12,
        pincode:24010
    }
    
}
// console.log(person.hobbies[2])
// console.log(person.address)
// console.log(person.name) 
// console.log(person.age)
// console.log(person.address.city)
/* another ways to do the same*/
// console.log(`Name: ${person.name}, Age: ${person.age}, Pincode: ${person.address.pincode}`)

// you can also change the value of an object property
person.name="ronaldo";
person.address.city="patna";
person.student=false;
// console.log(person.name) // ronaldo
// console.log(person) // patna

// you can also delete a property from an object
delete person.address.road_no
delete person.hobbies[0]
console.log(person) 

console.log(person.hobbies) 