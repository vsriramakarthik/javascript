let user = {     // an object
    name: "John",  // by key "name" store value "John"
    age: 30 ,
    "likes birds": true  // multiword property name must be quoted       // by key "age" store value 30
}
console.log(user.name)

delete user["likes birds"];
// Prompt the user for input
let userName = prompt("What is your name?");
document.write("Hello, " + userName + "!");
