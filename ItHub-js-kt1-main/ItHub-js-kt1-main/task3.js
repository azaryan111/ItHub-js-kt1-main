const a = Number(prompt("Число А"))
const b = Number(prompt("Число B"))
const sign = prompt("Операция (*, /, +, -)");
let result;

if (isNaN(a)) {
    throw new Error("Неверно указа номер");
}
if (isNaN(b)) {
    throw new Error("Неверно указан номер")
}

if (sing === "*") {
    result = a * b
} else if (sing === "/") {
    result = a / b
} else if (sing === "+") {
    result = a + b
} else if (sing === "-") {
    result = a - b
}
else {throw new Error ("Неправильный знак")}
console.log(result);