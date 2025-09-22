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

const { captureOwnerStack } = require("react");

const fontType = "serif";
let message = "type does not exist";
switch (fontType) {
    case "serif":
        message = "Выбран шрифт Times";
        break;
    case "sans serif":
        message = "Выбран шрифт Aerial";
        break;
    case "monospace":
        message = "Выбран шрифт Consolas";
        break;
    default:
        message = "Message type does not exist";
}

console.log(message);