// Всегда ли a || b совпадает с a ? a : b вне зависимости от типов a и b? Объ-
// ясните свой ответ. Можно ли аналогичным образом выразить a && b? b

//Полусчаєтся что всегда
//можна виразити через if
let a=4, b=3;

k = a || b;
console.log(k)
k = a ? a : b;
console.log(k)

k = a&&b // повертає перше де помилка
console.log(k)

a = {
    name :7,
}
k = a?.b // повертає перше де помилка
console.log(k)