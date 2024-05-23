const myNums =[1,2,3,4,5,6]

// const newNums = myNums.map((num) => {return num+10})
// console.log(newNums);


const newNums = myNums.map((num) => num*10)
                      .map((num) => num + 1)
                      .filter((num)=> num >= 40)
// console.log(newNums);
/////////   Reducer function

const myTotal = myNums.reduce((acc , curr ) => {
    // console.log(`acc: ${acc} and current val : ${curr}`);
    return acc+ curr 

}, 0) 

// console.log(myTotal);

const shoppingCart = [{
    itme : "js Course",
    price : 2999
},
{
    itme : "java Course",
    price : 12999
},
{
    itme : "react Course",
    price : 2999
}
]

const total = shoppingCart.reduce((acc,curr) => {
    return acc + curr.price
 },0) 

 console.log(total);
