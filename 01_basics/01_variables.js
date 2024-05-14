const accountId = 1234
let accountEmail = "rawatdeepa@gmail.com"
var name = "Deepa"
accountType = "Saving Account"
let accountState

//const canot be modified

accountEmail = "rd@gmail.com"
accountType ="Current Account"
name = " Deepa Rawat"

// print method 1 

console.log (name)
// method 2 

console.table([name , accountId, accountEmail, accountType, accountState])

// prefer not  to use var  beacuse of block & functional scope.