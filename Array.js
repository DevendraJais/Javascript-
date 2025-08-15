let a = [10,20,30,40,50];
console.log(a);

console.log(a[0]); 
console.log(a[1])
console.log(a[2]);
console.log(a[3]);
console.log(a[4]);

for(i=0;i<5;i++)
{
    console.log(a[i]);
}

let fruit = ["apple","mango","bannana","kiwi","graps"];

fruit.push("dragon fruit");             //push dragon fruit from back
console.log(fruit);

fruit.unshift("orange");                //add orange from front
console.log(fruit);

console.log(fruit.length)                //7

fruit.splice(6,1)                        
console.log(fruit);                      //At position 6 remove 1 element

fruit.splice(6,1,"dragon fruit","coconut")
console.log(fruit);                      //At index-6 we remove 1element and add dragon fruit,coconut

let newFruit = fruit.slice(0,2);
console.log(newFruit);                   //Start from 0 index 0,1 index element sliced.
