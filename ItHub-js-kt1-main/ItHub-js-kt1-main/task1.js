const price = Number(prompt("Доход"));
const range = prompt("Промежуток времени (month,day,week)");

if (isNan(price)) {
    throw new Error("Неверно указан доход");
}
if ((range !="month" && range != "day" && range != "week")){
    throw new Error("Неверно указан промежуток");
}
const formattedprice = new Intl.NumberFormat("ru-RU", {
    style: "currency",
    currency: "rub",
});

const result = `${formattedprice} per ${range}`;
console.log(result)