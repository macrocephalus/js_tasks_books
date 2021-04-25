// Перепишите пример continue из раздела 2.11 без использования пред-
// ложения continue.
const arr = [1,2,3,-4,5,6,7,8,-9]
let count = 0
let sum = 0
for (let i = 0; i < arr.length; i++) {
    if (arr[i] >= 0) {
        count++
        sum += arr[i]   
    }
}
let avg = count === 0 ? 0 : sum / count
console.log(avg)