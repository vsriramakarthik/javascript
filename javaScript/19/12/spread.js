// spread operator = allows an iterative such as an array or 
  //                  string to be expanded in
  //                places where 0 or more argumnets are expected 

  let mun=[1,2,34,4,5,6];
  let max=Math.max(...mun);
  console.log(max);

  let class1 = ["Spongebob", "Patrick", "Sandy"];
let class2 = ["Squidward", "Mr.Krabs", "Plankton"];
class1.push(...class2);
console.log(...class1);

console.log(class1)