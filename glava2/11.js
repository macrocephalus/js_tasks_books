//Перепишите все циклы for из раздела 2.10 в виде циклов while.

// for (let i = 1; i <= 10; i++)
// console.log(i)

let i = 1
while (i <= 10) {
    console.log(i)
    i++
}
console.log("////////////")
let arr = [, 2, , 4]
arr[9] = 100
// for (const element of arr)
// console.log(element) // печатается undefined, 2, undefined, 4,
// // undefined (5 раз), 100
let k = 0;
while (k < arr.length)
{
    console.log(arr[k])
    k++;
}
console.log("////////////")


let greeting = 'Hello 🌐'
// for (const c of greeting)
// console.log(c) // печатается H e l l o, пробел и 🌐

let c = 0;

while (c<greeting.length)
{
    console.log(greeting[c])
    c++
}

console.log("////////////")
let obj = { name: 'Harry Smith', age: 42 }
// for (const key in obj)
// console.log(`${key}: ${obj[key]}`)
let arrObjKey = Object.keys(obj);
let indexK =0;
while (indexK<arrObjKey.length)
{
    console.log(arrObjKey[indexK])
    indexK++;
}

