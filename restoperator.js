//rest operator

function sum(a,b,c, ...rest){

}
sum(10,20,30,40,50)

//reduce ;- otput in a single value

function sum1(...numbers){
    return numbers.reduce((total,num)=> total+num,0)
}

//sum1(10,20,30,40,50)
console.log(sum(10,20,30.40,50))


//spread Operator

const number = [1,2,3,4,5]
const number1 = ['a','b','c']

const finalSpread = [...number,...number1]
console.log(finalSpread);


//spread in object

const obj1 = {
    a:10,
    b:20
}

const obj2 = {
    c:30,
    d:40
}

const combinedobj = {
    ...obj1,
    ...obj2
}

console.log(combinedobj)