// Перепишите пример break с  меткой из раздела 2.11 с  использованием
// двух вложенных циклов for.

// let i = 0
// let j = 0
// outer:
// while (i < arr.length) {
// while (j < arr[i].length) {
// if (arr[i][j] < 0) break outer
// j++
// }
// i++
// j = 0
// }
// Сюда попада1ем после break outer или когда оба цикла нормально завершатся
const arr = [[1,2,-3,4],[4,5,6,7,7],[8,9,3,0,-1,5]]
outer:
for (let i = 0; i < arr.length; i++) {
    for (let j =  0; j < arr[i].length; j++) {
        console.log(arr[i][j])
        if (arr[i][j] < 0) break outer
    }
}