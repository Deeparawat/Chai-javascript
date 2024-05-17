 const myArr=[1,2,3,4]
 console.log( typeof myArr);
 console.log(myArr[2]);

 myArr.push(8);
 myArr.push(9);
 myArr.push(10);
 myArr.push(11);

myArr.pop();



// myArr.unshift(13); // USED TO ADD VALUE IN FRONT
// console.log(myArr);
// myArr.shift(); // USED TO REMOVE FROM FRONT
// console.log(myArr);
// myArr.shift(); // USED TO REMOVE FROM FRONT
// console.log(myArr);

console.log(myArr.includes(4));
console.log(myArr.indexOf(4));

const nArr = myArr.join();
console.log(nArr)
console.log(typeof nArr) // converted to string

// Interview question

//slice & splice

console.log("A :" , myArr)

const myn1 = myArr.slice(1,3);
console.log( typeof myn1)
console.log("B", myn1);
console.log("B", myArr);



const myn2 = myArr.splice(1,3); // last index 3 not included, in slice original doesn't array changes 
console.log( typeof myn2)
console.log("C", myn2);  //last index  included, in splice original array changes to ->  sliced up array 
console.log("C", myArr);  


