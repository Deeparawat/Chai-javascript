const myObj = {
    js : "javascript",
    cpp : "C++",
    eb : "ruby",
    swift : "swift"
}

// for in loop used

for (const key in myObj) {
    // console.log(`${key} stands for ${myObj[key]}`);
    
    }


    // for in for array -> but it gives keys only , unlike for of which gives values

    const programming = ["js","html" , "css"]

    for (const key in programming) {
       console.log(key);
       console.log(programming[key]);

            
        }
    

// for in loop doesn't work for map as maps are not iteratable
