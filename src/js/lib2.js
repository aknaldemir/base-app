// 'default' keyword kullanımı

// lib.js dosyasında elemanları tek tek dışarıya export ifadesi ile açtık. Her zaman bunu bu şekilde yapmak istemeyebiliriz.
// Alternatif olarak bir class oluştururuz. Ve class'ı dışarıya açabiliriz.

//**Burada default dediğimiz anda sadece bir tane elemanı dışarıya açabiliriz */



//Aşağıda bir class'ı dışarıya açtık. Bunu başka bir dosyada kullanabilmemiz için new ile yeni bir instance almalıyız.
export default class {
    constructor() {
        this.PI = 3.14;
    }
    sum(...numbers) {
        return numbers.reduce((number, total) => total + number);
    }
    mult(...numbers) {
        return numbers.reduce((number, total) => total * number);
    }
}
