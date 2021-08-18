//ES6 Module
//** Fonksiyonları dışarıya açma işlemini başlarına 'export' keywordunu getirerek de yapabiliriz./

//public 
export function sum(...numbers) {
    return numbers.reduce((number, total) => total + number);
}
//public 
export function mult(...numbers) {
    return numbers.reduce((number, total) => total * number);
}

//private yapmak için başına bir şey eklemeye gerek yok.
const PI = 3.14324;


//Dışarıya sum ve mult fonksiyonlarını export öncesi bu şekilde açıyorduk.
// module.exports={
//     sum,mult
// }

