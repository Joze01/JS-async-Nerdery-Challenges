/*
INSTRUCTIONS

1. create an array that contains 5 names, include 1 or more of the allowed usernames located in validate-user.js
2. iterate the array, keep an eye on performance, and validate every username with the function exported in validate-user.js
3. process and format every result, so that the program console.log the success results in a group, and the failure results in a group

Example:

Success

id:1
name: John

id:2
name: Mary

Failure

User Michael not allowed
User Benjamin not allowed

4. if you want to challenge yourself, add the needed logic so the program can read the array of names from the terminal
** check about node.js process.argv **

Example:

node solution.js name1,name2,name3, or
node solution.js name1 name2 name3

5. another challenge is: after you solve the challenge using callback style, in another file promisify the callback and solve it again
** give a look to node.js util.promisify, avoid to alter the validate-user.file **
*/
const usernames = ['John', 'Mary', 'Michael', 'Benjamin', 'Jane'];
const validateUser = require('./validate-user');

const successResults = [];
const failureResults = [];

function solution() {
    usernames.forEach(name => {
        validateUser(name, (err, result) => {
          if (err) {
            failureResults.push(err.message);
          } else {
            successResults.push(`id: ${result.id}\nname: ${result.name}\n`);
          }
      
          if (successResults.length + failureResults.length === usernames.length) {
            console.log("Success Results:");
            successResults.forEach(result => console.log(result));
      
            console.log("\nFailure Results:");
            failureResults.forEach(result => console.log(result));
          }
        });
      });
}

solution()


