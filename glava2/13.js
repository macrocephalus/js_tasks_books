// Перепишите пример break с меткой из раздела 2.11 без использования
// предложения break. Заведите булеву переменную, управляющую завер-
// шением вложенных циклов.
const arr = [[1,2,3,4],[4,5,6,7,7],[8,9,3,0,-1,5]]
let i = 0
let j = 0
let logick = false;
while (i < arr.length && !logick) {
    while (j < arr[i].length && !logick) {
        console.log(arr[i][j])
        if (arr[i][j] < 0) logick = true
        j++
    }
    i++
    j = 0
}
// Сюда попадаем после break outer или когда оба цикла нормально завершатся