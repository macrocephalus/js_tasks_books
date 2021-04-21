//Рассмотрим следующий фрагмент кода не работает:
let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12]
for (i in arr) { if (i + 1 === 10) console.log(a[i]) }
//Заме-тим, что, как и во всех объектах JavaScript, ключи свойств являются строками.
Нужно

let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12]
for (i in arr) {
   // console.log(Number(i) + 1)
     if (Number(i) + 1 === 10) 
    {
        console.log(arr[Number(i)])
    } 
}