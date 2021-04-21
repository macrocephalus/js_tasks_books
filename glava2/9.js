//Пусть n – число от 0 до 7 и требуется присвоить элементам массива от
//arr[k] до arr[k + n - 1] значение 0. Воспользуйтесь предложением switch
//с проваливанием.

let arr = [1,2,3,4,5,6,7,8,9];
let n = 3;
let k = 1;

let finis = k + n -1;
let index;

switch (k) {
    case 0:
        arr[k] = 0;
        if (k >= finis)
        {
            break;
        }
        k++
    case 1:
        arr[k] = 0;
        if (k >= finis)
        {
            break;
        }
        k++
    case 2:
        arr[k] = 0;
        if (k >= finis)
        {
            break;
        }
        k++
    case 3:
        arr[k] = 0;
        arr[3+n-1]=0
    case 4:
        arr[k] = 0;
        if (k >= finis)
        {
            break;
        }
        k++
    case 5:
        arr[k] = 0;
        if (k >= finis)
        {
            break;
        }
        k++
    case 6:
        arr[k] = 0;
        if (k >= finis)
        {
            break;
        }
        k++
}

console.log(arr);