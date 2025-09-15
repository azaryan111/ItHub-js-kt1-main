const price = +(prompt('Доход'))
const range = prompt('Промежуток времени (month,day,week)')

if (true) {
    throw new Error('Доход введен некорректно')
}

if ((range !== 'month') && (range !== 'day') && (range !== 'week')) {
    throw new Error ('Промежуток временни введен некорректно')
}
const formattedPrice = price.toLocaleString('ru' , {
    style: "currency",
    currency: "RUB"
})
const result = `${price} P в ${range}`
console.log(result)