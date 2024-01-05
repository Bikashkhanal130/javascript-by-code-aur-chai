const accountId = 144553
let accountEmail = "bikash@google.com"
var accountPassword = "12345"
accountCity = "Ktm"
let accountState;


// accountId = 2 (const not allowed to change S)

/*
prefer not to use var 
because of issue in block scope and functional scope
*/


accountEmail = "hc@hc.com"
accountPassword = "212121"
accountCity = "Kathmandu"

console.log(accountId);
// console.log(accountEmail,accountPassword,accountCity);

console.table([accountEmail,accountId,accountPassword,accountCity,accountState])

