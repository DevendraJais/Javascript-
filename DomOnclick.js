//  let arr = ["red","yellow","green","purple"];
//  let currentIndex = 0;
// function changecolor()
//     {
//        let box = document.getElementById("box");

//          box.style.backgroundColor = arr[currentIndex];
//          currentIndex = (currentIndex + 1)%arr.length;
         
//     }

let box = document.getElementById('btn').addEventListener('click',changeColor)

function changeColor()
{
    document.getElementById('box')
    .style.backgroundColor = "yellow"
}