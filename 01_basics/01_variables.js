const accountId = 144543
let accountEmail = "rupa@gmail.com"
var accountPassword = "1234"
accountCity = "Dhanbad"
let accountState;

//accountId = 2 -> NOT ALLOWED

accountEmail = "ru@google.com"
accountPassword = "428"
accountCity = "Bengaluru"

console.log(accountId)
console.log(accountPassword)
/*
Prefer not to use var
bcoz of issue in block space and functional scope
*/

console.table([accountId,accountEmail,accountPassword,accountCity])