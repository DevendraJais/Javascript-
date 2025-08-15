function name()
{
    console.log("hello from function");
}
name();


function ParameterFun(a)
{
    console.log("hello " + a);
}
ParameterFun("arjun");


function add(a,b,c)
{
    d = a+b+c;
    return d;
}
console.log( add(10,20,30));


// Anonomous functions - function not having names.

let fun = function()
{
  console.log("hello");
}
fun();


(function()
{
    console.log("hello self invoked function");
}) ();


