"use strict";

let message;
message = "Hello world!";

const VALUE = 123;

console.log(message);

// Comment
/*
Multiline comment
*/

console.log(1 / 0 == Infinity);

// Overflow
console.log(9007199254740991 + 1 == 9007199254740991 + 2);

// BigInt
let big = 12312312312312387123712737129837891237891n;

let firstString = 'first';
let secondString = "second";
let thirdString = `format string ${firstString}`;

let t = true;
let f = false;

let n = null;

// undefined for unassigned variable

let u;
console.log(u == undefined);

typeof 5;
typeof(5);

typeof 50 + " Квартир"; // Выведет "number Квартир"
typeof (50 + " Квартир"); // Выведет "string"

typeof null; // "object" ошибка


// Преобразование
Number("123");
String(123);
Boolean(1);

+'1'; // Equivalent to Number()
+true;
