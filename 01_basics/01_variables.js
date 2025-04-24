const accountId = 1144556
let accountEmail = "asad@gmail.com"
var accountPassword = "115577889"
accountCity = "Mumbai"

let accountState;

accountEmail = "hc@hc.com"
accountPassword = "21212121"
accountCity = "Bengaluru"

console.log(accountId);

/*
Prefer not to use var
because of issue in block scope and functional scope
*/

console.table([accountId, accountEmail, accountPassword, accountCity, accountState]);
