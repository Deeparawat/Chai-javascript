// if/else
//switch

// Truthy && falsy

// const userEmail = "Deepa@google.com"

// if(userEmail){
//     console.log("got user email");

// }
// else {
//     console.log("Do not found any email");
// }


//falsy values are:

// false, 0 , -0 , BigInt  ka 0n,"" , null, undefined, Nan
// all other than falsy are truthy :
//eg.  "0" , 'fasle' , " " , [],{}, function(){}


// how to check if array is empty or not

// if(userEmail.length === 0){
//     console.log("Array is Empty");
// }


// how to check if array is empty or not 

// const emptyObj ={}

// if(Object.keys(emptyObj).length === 0 ){
//     console.log("empty Object");
// }


// Object.keys(emptyObj) -> this is become an array now.



// Important 

// false == 0 -> true
// false == '' -> true
// 0 =='' -> true


// Nullish Coalescing Operator (??) :  used for null , undefined
// null value ayi toh safety checks karega

// let val1;
// val1 =5 ?? 10
// val1 = "an" ?? 20
// val1 = 15 ?? null
// val1 = undefined ?? 12 ?? 13 // jo phele value hogi vo assign hogi
// console.log(val1);
 

// .................................Ternery Operator .................................
//condition ? true : false

const ice =100
ice >= 90 ?console.log("to expensive"): console.log(" worth it");