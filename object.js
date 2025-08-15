let obj = {
    name : "arjun",
    age : 21,
    city : "indore"
};

console.log(obj.city);

// dot access of object
var person = {
    name: "John",
    age: 30
};

console.log(person.name); // Output: "John"
console.log(person.age);  // Output: 30

//bracket [] access of object
const person = {
    "full name": "John Doe",
    age: 30
};

console.log(person["full name"]); // Output: "John Doe"
console.log(person["age"]);       // Output: 30


console.log(Object.keys(user));   // Output: ["name", "age", "city"]
console.log(Object.values(user)); // Output: ["Alice", 25, "New York"]
console.log(Object.entries(user));// Output: [["name", "Alice"], ["age", 25], ["city", "New York"]]