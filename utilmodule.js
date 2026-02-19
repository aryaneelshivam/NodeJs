const util = require("util"); //we use require and not import in util
var name = "Aryaneel Shivam"
var age = 20;
var str = "Hello my name is %s and my age is %d";
var formatString = util.format(str, name, age);
console.log(formatString);

console.log(util.isArray([1,2,3,4,5]));
console.log(util.isArray({name:"Aryaneel", age:20})); //deprecated 
console.log(Array.isArray([1,2,3,4,5])); //new updated method

console.log(({errmsg:"error"} instanceof Error));
