
function calculateCartPrice(val1, val2 , ...val3)
{
    return val3
}
// console.log(calculateCartPrice(200,300,500,400,1000))
// console.log(calculateCartPrice(200,300))

// how to pass objects in function

function handleObject (anyobject) {
    console.log(`Username is ${anyobject.username} and the age is ${anyobject.age}`)
}

// handleObject({
//     username: "Sam Altman",
//     age : 32
// })

user = {
    username: "Sam Altman",
    age : 32
}
handleObject(user)


const myNewArray =[100,200,300]
function returnValue (getArray){
    console.log(getArray[1]) ;
}
returnValue(myNewArray)