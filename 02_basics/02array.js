const marvel = ["thor" ,"batman" ,"spiderman"]
const dc_heros = ["superhero" ,"flash" ,"batman"]

//marvel.push(dc_heros) // array inside array

//console.log(marvel)

// const allHeroes = marvel.concat(dc_heros)
// console.log(allHeroes)

// // // method 2
// // const allHeroes2 = [...dc_heros,...marvel] // spread & combine tool --latest
// // console.log(allHeroes2)

const another_array= [1,2,3,4,[5,6,7],8,9,[10,[11,12,13]] ]
// const rArray =  another_array.flat(Infinity) // infinity because we don't know the depth of brackets
// console.log(rArray) // flat -> flattens the array to basic array



console.log(Array.isArray([1,2,3]))  // Array.isArray() method in JavaScript is used to determine whether the passed value is an Array. It returns true if the passed value is an Array, otherwise false.
console.log(Array.from("Hitesh")) // creates shallow copy - means reference & seperates each word

console.log(Array.from({name: "hitesh"})); //  method can be used to create an array from any iterable object, including strings, maps, and sets. This makes it a very versatile method for creating arrays.

let score1 = 100
let score2 = 200
let score3 = 300
console.log(Array.of(score1,score2,score3));

