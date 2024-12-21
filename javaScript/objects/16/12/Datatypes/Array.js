let arr = new Array();
let arr1 = [];

let fruits = ["Apple", "Orange", "Plum"];

alert( fruits[0] ); // Apple
alert( fruits[1] ); // Orange
alert( fruits[2] ); // Plum

// same as fruits[fruits.length-1]
alert( fruits.at(-1) ); // Plum

// mix of values
let arr3= [ 'Apple', { name: 'John' }, true, function() { alert('hello'); } ];

// get the object at index 1 and then show its name
alert( arr3[1].name ); // John

// get the function at index 3 and run it
arr3[3](); // hello