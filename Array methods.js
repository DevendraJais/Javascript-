//For each method 
//we can not store in new variable.


let fruit = ["apple","mango","bannana","kiwi","graps"];

// fruit.forEach((val,index,array)=>{
//     console.log(array)
// })


// //Map method
// //we can make changes in new array

// let a = fruit.map((val,ind)=>{
//    return ind;                               //we can return value
// })
// console.log(a);                              //0,1,2,3,4
// console.log(fruit)                           //'apple', 'mango', 'bannana', 'kiwi', 'graps'


//filter method

let b = fruit.filter(function get(value,index,array)
{
  console.log(value);
})


