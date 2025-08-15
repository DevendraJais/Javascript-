 let greet = () => "hello world";
 console.log(greet());  

 
  //single parameters

  let square = x => x*x;
  console.log(square(5));


  
 // Multiple parameters
 
 let val = (a,b) => {
    return a+b;
 }
  console.log(val(2,4));

 
 
  //Multiple parameters without return

 let a = (a,b) => console.log(a+b);
  a(2,3);
 
 
 