/*Создайте два объекта, представляющих людей, и  сохраните их в  пере-
менных harry и  sally. В  каждый объект включите свойство friends, ко-
торое содержит массив друзей. Предположим, что harry  – друг sally,
а sally – друг harry. Что произойдет при вызове метода log для каждого
объекта? А если вызвать метод JSON.stringify?*/

 let sally = {
    friends: ["sally"],
}

let harry = {
    friends: [sally],
}

console.log(harry);
console.log(JSON.stringify(harry));