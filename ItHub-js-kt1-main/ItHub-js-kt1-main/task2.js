const temp = Number(prompt("Температура"));
const weather = prompt("Погода (clear/cloudy)")

if (isNaN(temp)) {
 throw new Error ("Неверно указана температура");
}
if (weather != "clear" && погода != "cloudy") {
 throw new Error ("Неверно указана погода");
}
let activity;
if (температура >= 25 && погода === "clear") {
  activity - "golf";
} else if ((температура >= 10 && температура  <= 24) || погода === "cloudy") {
activity = "Bowling";
} else {
activity - "hiking";
}

let result = activity;
console.log(result);
