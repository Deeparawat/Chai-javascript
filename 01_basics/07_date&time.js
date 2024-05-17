let myDate = new Date()
// console.log(myDate);
// console.log(myDate.toString())
// console.log(myDate.toDateString())
// console.log(myDate.toISOString())
// console.log(myDate.toJSON())
// console.log(myDate.toLocaleDateString())
// console.log(myDate.toLocaleString())
// console.log(myDate.toLocaleTimeString())
// console.log(myDate.getTimezoneOffset())

// console.log(typeof myDate)

// let myCreatedDate = new Date(2023,0  ,23)
// console.log(myCreatedDate.toDateString())

let myCreatedDate1 = new Date("2-15-2023")
// console.log(myCreatedDate1.toDateString()
// )
 

let myTime = Date.now()

console.log(myTime)
console.log(myCreatedDate1.getTime()) ;

// NOte: do comparision always in milisec

//convert it into sec
console.log(Math.floor(myTime/1000))


let newDate = new  Date();
console.log(newDate.getDate());
console.log(newDate.getMonth()+1);

newDate.toLocaleString('default' , {
    weekday:"long"
})

