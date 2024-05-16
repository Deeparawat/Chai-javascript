// Two datatypes

// 1. primitive 

// 7 types => String , Number, Boolean, Symbol -> make values unique , null , undefined , Bigint

const score =100.2
const isLogedIn = false;
const temp = null;
let userEmail ;

const id = Symbol('134')
const id2 = Symbol('134')

console.log(id === id2);


const bigNumber = 234544444444444444423n
// adding n at the end make it bigNumber 



// Non-primitive
// Array , Object , Functions

const heros = ["batman" , "shaktiman " ," doga" , "naagraj"]

for (const  hero in heros) {
   
    console.log( heros [hero])    

}

const MyObj = {
    name : "deepa",
    age : 22,
}

const myFunction = function() {
    console.log("hello");
}

myFunction()

console.log(typeof bigNumber)
console.log(typeof temp);

// +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

// Stack (Primitive ) , Heap ( Non-Primitive)
let a =10
let b = a
 b = 8
console.log(a)
console.log(b)


let userOne = {
    email: "user@gmail.com",
    upi : "user@rbl" ,
}

console.log(userOne.email)


userTwo = userOne
userTwo.email = "deepa08@gmail.com"

console.log(userOne.email)
console.log(userTwo.email)



