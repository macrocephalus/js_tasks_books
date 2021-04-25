// Рассмотрим задачу о  нахождении первой позиции, начиная с  которой
// массив b входит в массив a в виде подпоследовательности. Напишем два
// вложенных цикла:
// let result = undefined
// for (let i = 0; i < a.length - b.length; i++) {
// for (let j = 0; j < b.length; j++) {
// if (a[i + j] != b[j]) ...
// }
// ...
// }
// Завершите код, добавив предложения break и continue с метками. Затем
// перепишите его без использования break и continue.

let a = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20]
let b = [3,4,5]
let result = undefined
exitFor1:
for (let i = 0; i < a.length - b.length + 1; i++) {
    for (let j = 0; j < b.length; j++) {
        if (a[i + j] != b[j]) {
            continue exitFor1
        } else {
            result=i;
        }
    }
}
console.log(`result i = ${result}`);
///////////////////////////////////////////////////
console.log('////////////////////////////////////////////////////')
result = undefined
exitFor2:
for (let i = 0; i < a.length - b.length + 1; i++) {
    let exitBool = false;
    for (let j = 0; (j < b.length) && (exitBool === false); j++) {
        if (a[i + j] != b[j]) {
            exitBool = true;
        }else {
            result=i;
        }
        if (exitBool === false) {
        }
    }
}

console.log(`result i = ${result}`);
