let  a = [1,10,15,14,,45,8,7,, ,4]

let maximum = 0;

for (let elemet of a) {
 if (elemet > maximum) {
    maximum = elemet;
 }
}
console.log(maximum);

maximum = 0;
let i=0;
do {
    if (a[i] > maximum) {
        maximum = a[i];
     }
    i++;
} while (i < a.length)

console.log(maximum);

maximum = 0;
i=0;
while (i < a.length) {
    if (a[i] > maximum) {
        maximum = a[i];
     }
    i++;
}

console.log(maximum);