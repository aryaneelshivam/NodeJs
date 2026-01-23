//console.log("Hello World");
var a = 10; //var scope is global
var b = 20;
{
    var a = 30;
    let b = 60; //let scope is local
    
}
console.log(a);
console.log(b);


//normal functions
function add(a, b){
    return a+b;
}
console.log(add(10, 20));

//arrow functions, short functions
var addition = (a, b) => a+b;
console.log("the value is: ",addition(10, 50));
console.log(`the value is: ${addition(10, 50)}`);

// var greet = () => "Hello World";
// console.log(greet());

//creating objects
var obj = {
    name: "John",
    age: 30,
    city: "New York",
    greet: ()=> "Hello World" //arrow function inside object
}

console.log(obj);
// console.log(obj.name);
// console.log(obj.age);
// console.log(obj.city);
console.log(obj.greet());
console.log(`the name is ${obj.name} and age is ${obj.age} and city ${obj.city}`);
