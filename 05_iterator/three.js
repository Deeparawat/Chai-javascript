const coding = ["js" , "ruby " , "python" , "java"]

// for each higher order function

coding.forEach(function (val){
    // console.log(val);
})

// another method

// coding.forEach((item) => {
// console.log(item);
// })

// another method

// function printme(item){
//     console.log(item);
// }

// coding.forEach(printme)

//......................

// coding.forEach( (item , index ,arr) => {
//     console.log(item,index,arr);
// })

const myCoding = [
    {
        lang : "java",
        langFileName: "java."
    },
    {
        lang : "javaScript",
        langFileName: "js"
    },
    {
        lang : "C++",
        langFileName: "cpp"
    }
]

myCoding.forEach((item) => {
    console.log(item.lang);
})