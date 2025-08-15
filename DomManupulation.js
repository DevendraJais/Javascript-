//selecting elements--------



//getElementsByTagName()

var a = document.getElementsByTagName('ul');
console.log(a);


//getElementById()

var a = document.getElementById('hero');
console.log(a);


//getElementsByClassName()
var a = document.getElementsByClassName('first-list');
console.log(a[0].textContent);  // Logs "Arjun" (first element's text content)


var a = document.querySelector(".first-list")     //selects first class
console.log(a.textContent);

var elements = document.querySelectorAll(".first-list");
elements.forEach(el => console.log(el.textContent));

console.log(document.querySelector('.sibling').previousSibling.textContent)


//Append child--

// const ul = document.querySelector('ul');
// const newE = document.createElement('li');
// newE.textContent = "giga chand";

// ul.appendChild(newE)

//remove child--

// const ul = document.querySelector('.second-list');
// ul.remove();

// const ul = document.querySelector('#hero'); // Select the <ul> element with id "hero"
// const li = document.querySelector('.second-list'); // Select the <li> with class "second-list"

// ul.removeChild(li);

//replace child--

// const ul = document.querySelector("ul");
// const childToChange = ul.children[1];
// const newLi = document.createElement('li');
// newLi.textContent= "i am replace child";
// ul.replaceChild(newLi,childToChange);

//parent Node--

// const parentNode = document.querySelector('ul')
// const p = parentNode.parentElement;
// console.log(p); 

//previoussibling--

var a = document.querySelector('.second-list');
console.log(a.previousElementSibling);    //get 1st list

var a = document.querySelector('.second-list');
console.log(a.previousSibling);               //we will get Text

//FirstChild

