// Какие результаты дает сравнение значений undefined, null, 0 и '' с по-
// мощью операторов < <= ==? Почему
console.log(undefined<undefined)
console.log(undefined<null)
console.log(undefined<0)
console.log(undefined<'')
console.log('--------')
console.log(undefined<=undefined)
console.log(undefined<=null)
console.log(undefined<=0)
console.log(undefined<='')
console.log('--------')
console.log(undefined==undefined)
console.log(undefined==null)
console.log(undefined==0)
console.log(undefined=='')
console.log('----null----')
console.log(null==undefined)
console.log(null==null)
console.log(null==0)
console.log(null=='')

console.log('--------')
console.log(0==undefined)
console.log(0==null)
console.log(0==0)
console.log(0=='')

console.log('--------')

console.log(0>=undefined)
console.log(0>=null)
console.log(0>=0)
console.log(0>='')

console.log('--------')
console.log(''>=undefined)
console.log(''>=null)
console.log(''>=0)
console.log(''>='')


//ps
console.log('------------- true -------------------');

var a = true;
console.log('a === a => ', a === a); // true
console.log('!!a == a => ', !!a == a); // true
console.log('a < 0 => ', a < 0); // false
console.log('a > 0 => ', a > 0); // true
console.log('a == 0 => ', a == 0); // false
console.log('a <= 0 =>', a <= 0); // false
console.log('a >= 0 =>', a >= 0); // true
//тут всё нормально вопросов нет 


console.log('--------------- undefined -----------------');
var a = undefined;
console.log('a === a => ', a === a); // true
console.log('!!a == a => ', !!a == a); // false
console.log('false == a => ', false == a); // false
console.log('a < 0 => ', a < 0); // false
console.log('a > 0 => ', a > 0); // false
console.log('a == 0 => ', a == 0); // false
console.log('a <= 0 =>', a <= 0); // false
console.log('a >= 0 =>', a >= 0); // false
//ну ладно ок

console.log('---------------- null ----------------');
var a = null;
console.log('a === a =>', a === a); // true, тут интересненко null === null
console.log('!!a == a => ', !!a == a); // false
console.log('a < 0 => ', a < 0); // false
console.log('a > 0 => ', a > 0); // false
console.log('a == 0 => ', a == 0); // false
console.log('a <= 0 =>', a <= 0); // о чудо true
console.log('a >= 0 =>', a >= 0); // о чудо true


console.log('-------------- [] ------------------');

var a = [];
console.log('a === a =>', a === a); // true
console.log('!!a == a => ', !!a == a); // false
console.log('a < 0 => ', a < 0); // false
console.log('a > 0 => ', a > 0); // false
console.log('a == 0 => ', a == 0); // true, ладно пусть [] == 0
console.log('a <= 0 =>', a <= 0); // true
console.log('a >= 0 =>', a >= 0); // true    

console.log('-------------- {} ------------------');
var a = {};
console.log('!!a == a => ', !!a == a); // false
console.log('a < 0 => ', a < 0); // false
console.log('a > 0 => ', a > 0); // false
console.log('a == 0 => ', a == 0); // false, а тут почему нет
console.log('a <= 0 =>', a <= 0); // false
console.log('a >= 0 =>', a >= 0); // false

console.log('------------- NaN -------------------');
var a = NaN;
console.log('a === a =>', a === a); // false, все убили null === null true, а NaN === NaN false
console.log('!!a == a => ', !!a == a); // false
console.log('a < 0 => ', a < 0); // false
console.log('a > 0 => ', a > 0); // false
console.log('a == 0 => ', a == 0); // false
console.log('a <= 0 =>', a <= 0); // false
console.log('a >= 0 =>', a >= 0); // false

console.log('------------- [] -------------------');
var task = [];
console.log(!task);
console.log(!!task);
console.log(task == null);
console.log(task.length<=0);
console.log(!task.length);
console.log(!!task.length);