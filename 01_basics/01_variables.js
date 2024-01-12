const accountId = 144456
let accountEmail = "abc@gmail.com"
var accountPassword ="12345"
accountCity = "Pune"


// accountId = 2 //not allowed
accountEmail = "vs@hc.com"
accountPassword = "234213"
accountCity = "Benglure"
let accountState;

console.log(accountId);

/*
Prefer not to use var
because of issue of block scope and functional scope
*/

console.table([accountId,accountEmail,accountPassword,accountCity,accountState])