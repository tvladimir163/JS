// JS 

// 3.9

if (typeof value === "object" && value === null) {
    console.log("null");
}

else {
    console.log(typeof value);  
}

// 3.10

console.log(parseInt(num_1) + parseInt(num_2));

// 3.11

console.log(parseFloat(size));

// 3.12

console.log(parseFloat(a) * parseFloat(b) * parseFloat(c));

// 4.1

if (speed <= 30) {
    console.log("Вы едете слишком медленно");
}
else if (speed > 31 && speed < 70) {
    console.log("Вы едете с нормальной скоростью");
}
else {
    console.log("Вы едете слишком быстро, сбавьте скорость");
}

// 4.2

price = parseInt(price);
if (Number.isFinite(price) === false) {
    console.log("Не число");
}
else if (price <= 0) {
    console.log("Число не корректное");
}
else {
    console.log(price);
}

// 4.3

if (a > b && a > c) {
    console.log(a);
}
else if (b > a && b > c) {
    console.log(b);
}
else if (c > b && c > a) {
    console.log(c);
}

// 4.4

let activity;

if (temp >= 25 && weather === "clear") {
    activity = "golf";
}
else if (temp >= 10 && temp <= 24 && weather === "clear") {
    activity = "bowling";
}
else {
    activity = "hiking";
}

// 4.5

console.log(word_1.length > word_2.length ? word_1 : word_2);


// 4.6

switch (task) {
    case "удалить":
        console.log('delete');
        break;
    case "переименовать":
        console.log('rename');
        break;
    case "редактировать":
        console.log('edit');
        break;
}

// 4.7

switch (range) {
    case "month":
        console.log(`${price} Р в месяц`);
        break;
    case "day":
        console.log(`${price} Р в день`);
        break;
    case "week":
        console.log(`${price} Р в неделю`);
        break;
}

// 4.8

switch (sign) {
    case "+":
        console.log(a + b);
        break;
    case "-":
        console.log(a - b);
        break;
    case "*":
        console.log(a * b);
        break;
    case "/":
        console.log(a / b);
        break;
}

// 4.9

switch (sign) {
    case "+":
        console.log(a + b);
        break;
    case "-":
        console.log(a - b);
        break;
    case "*":
        console.log(a * b);
        break;
    case "/":
        if (b === 0) {
            console.log("Делить на 0 нельзя!");
        }
        else {
            console.log(a / b);
        }
        break;
}

// 5.1

let sum = 0;

for (; start <= end; start++) {
    if (start % 5 === 0) {
        sum += start;
    }
}
console.log(sum);

// 5.2

function reverse(word) {
    let word_2 = "";
    for (let i = word.length - 1; i >= 0; i--) {
        word_2 += word[i];

    }
    return (word_2);
}
console.log(reverse(word));

// 5.3

word = word.toLowerCase();
let word_2 = "";
function reverse(word) {
    for (let i = word.length - 1; i >= 0; i--) {
        word_2 += word[i];
    }
    return (word_2);
}
reverse(word);

if (word !== word_2) {
    console.log("Слово не является палиндромом!");
}
else {
    console.log("Слово является палиндромом!");
}




/*
    Дом
    находится
    Количество домов - 0 - 1000

    В городе находится n домов

    находится 1 дом
    находятся 202 дома
    находятся 314 домов

    Для понимания логики - посчитайте до 30
    Подсказка: Использовать остаток от деления (%)
*/
