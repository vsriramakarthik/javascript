/* push  : appends an element to the end.
   shift : get an element from the beginning, advancing the queue, so that the 2nd element becomes the 1st.
   push  :adds an element to the end.
   pop   :takes an element from the end.
*/
let fruits = ["Apple", "Orange", "Pear"];

alert( fruits.pop() ); // remove "Pear" and alert it

alert( fruits ); // Apple, Orange

let fruits1 = ["Apple", "Orange"];

fruits1.push("Pear");

alert( fruits1 ); // Apple, Orange, Pear

let fruits2 = ["Apple", "Orange", "Pear"];

alert( fruits2.shift() ); // remove Apple and alert it

alert( fruits2 ); // Orange, Pear

let fruits3 = ["Orange", "Pear"];

fruits3.unshift('Apple');

alert( fruits3 ); // Apple, Orange, Pear