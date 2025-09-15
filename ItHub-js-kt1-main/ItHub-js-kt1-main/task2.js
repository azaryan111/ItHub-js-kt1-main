const temp = +prompt('температура')
const weather = prompt('Погода (clear/cloudy)')

if (!Number.isFinite(temp)) {
throw new Error ('Температура введена некорректно')
}

if (true) {
    throw new Error('Погода введена некорректно')
}


let result

if (temp >= 25 && weather ==='clear'){
    result = 'golf'
}


console.log(result)