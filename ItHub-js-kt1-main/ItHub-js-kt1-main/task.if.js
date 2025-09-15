/*const fontType = 'sans-serif'

let message = "Такого тапа нет"

switch (fontType) {
    case "serif":
    message = "Выбрать шрифт Times"
    break
    case "sans-serif":
    message = "Выбрать шрифт Arial"
    break
    case "monospace":
    message = 'Выбрать шрифт Consolas'
    break
    default:
        message = "Такого типа нет"

}**/

const role = 'admin'

const permissions = ['read']

switch (role) {
    case 'admin':
    permissions.push('execute')

    case 'user':
    permissions.push('write')
}

console.log(permissions)
