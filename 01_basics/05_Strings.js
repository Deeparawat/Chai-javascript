const name = "Deepa"
const Age = 24
// string interposition
console.log(`Hello my name is ${name} and I am ${Age} years old. `)


const gameName = new String('hello-deepa-rawat')
// console.log(gameName[0]);
// console.log(gameName[2]);

// console.log(gameName.__proto__);

// console.log(gameName.length);
// console.log(gameName.toUpperCase());


// console.log(gameName.charAt(2));
// console.log(gameName.indexOf('o'));



const newString = gameName.substring(0,4)
console.log(newString);

const anotherString = gameName.slice(-8 ,4)
console.log(anotherString);

const trimstring  = " deepa    "
console.log(trimstring)
console.log(trimstring.trim());


const url = "https://deepa.com/deepa@30rawat"
console.log(url.replace('@30' ,'-'));

console.log(url);
console.log(url.includes('deepa'));
console.log(url.includes('perry'));

// split
// conversion to array

console.log(gameName.split('-'));

