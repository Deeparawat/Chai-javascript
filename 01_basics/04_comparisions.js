console.log("2" >1)
console.log("02" > 1);

console.log(null > 0);
console.log(null == 0);
console.log(null >= 0 );

console.log(undefined == 0);
console.log(undefined > 0 );
console.log(undefined < 0);
console.log(undefined >= 0);

// note
// null >= got converted into number in other case like > , < & == it got converted into NaN
// for undefined all are false
// in js == or === & > , < are treated differently.


// ===

console.log(2 === "2");