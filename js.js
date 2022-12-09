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

// 6.1

function priceMessage() {
    console.log(`Данный товар стоит ${price} рублей`);
}
priceMessage();

// 6.2

function mult(a, b) {
    return a * b;
}
console.log(mult(num_1, num_2));

// 6.3

function square() {
    return num * num;
}
square();

// 6.4-------------

num = 2

for (let i = 0; i >=3; i++) {
    num * num;
    console.log(num);
}

// 6.5


function getNumber(data) {

    if (typeof data === 'number') {
        return data;
    }

    else if (typeof data !== 'number') {
        let a = 0;
        let result = 0; 

        for (let i = 0; i < data.length; i++) {
            a = data[i];

            if (isNaN(a) === false) {
                result = result + a;
            }        
        }
        return result * 1;
    }
    else {
        return 0;
    }
}
console.log(getNumber(data));




// 6.6

function getPercent(value, total) {
    return value / total * 100;
}
getPercent(value, total)


// 9.1

list.unshift ("Яблоко");
list.pop();
list.push ("Клубника");

console.log(list);


// 9.2

let result = [];
for(let i = 0; i < list.length; i++) {
  if(list[i].length > result.length) {
    result = list[i];
  }
}
console.log(result);


// 9.3


let result = 0;

for(let i = 0; i < list.length; i++) {
      result += Number(list[i]);
  }
console.log(result);


// 9.4


let list_3 = [];

for(let i = 0; i < list_2.length; i++) {
  list_1.push(list_2[i]);
}
for(let i = 0; i < list_1.length; i++) {
  list_3.push(list_1[i]*list_1[i])
}

console.log(list_3);


// 9.5

let sum = 0;

for(let i = 0; i < list.length; i++) {
  if(list[i] > 0) {
    sum += list[i];
  }
}
console.log(sum);


// 9.6


let sum = 0;

for (let i = 2; i < list.length; i++) {
    sum += list[i];
    for (let j = 0; j < list.length; j++) {
        if (list[i] !== list[j] && list[j] % list[i] === 0) {
          list[j] = null;
        }
    }

}
console.log(sum);


// 9.7


let min = list[0];
let max = list[0];

for(let i = 0; i < list.length; i++) {
  if(list[i] > max) {
    max = list[i]
  }
  else if(list[i] < min) {
    min = list[i]
  }
}
let result = min * max;
console.log(result);


// 9.8


let result = [];

for(let i = list.length -1; i >= 0; i--) {
  result.push(list[i]);
}
console.log(result);


// 9.9

let result = [];
let value = "";

for(let i = 0; i < sentence.length; i++) {
  if(sentence[i] ===  " ") {
    result.push(value);
    value = "";
  }
  else {
    value += sentence[i];
  }  
}
result.push(value);
console.log(result);


// 9.10


let cnt = 0;

function count(list) {
  for(let i = 0; i < list.length; i++) {
    if(list[i] % 2 === 0) {
      cnt += 1;
    }
  }
  return cnt;
}
console.log(count(list));


// 9.11

let result = 0;

function average(list) {
  for(let i = 0; i < list.length; i++) {
    result += list[i]
  }
  return Math.round(result / list.length);
}
console.log(average(list));


// 9.12

let result = 0;

for (let i = 0; i < list.length; i++) {
    if (typeof list[i] === 'number') {
        result += list[i];


    }
    else {
        break;
    }
}

console.log(result);


// 9.13


let list = [];

for(let i = 10; i < 21; i++) {
  list.push(i)
}
console.log(list);



// 9.14


let numbers_list = [];

for (let i = 0; i < list.length; i++) {
    if (typeof list[i] === 'number') {
        numbers_list.push(list[i]);


    }
    else if (list[i] === false) {
        break;
    }
}

console.log(numbers_list);



// 9.15


let count = 0;

for(let i = 0; i < list.length; i++) {
  if(list[i].toLowerCase() !== 'default') {
    count++;
  }
}
console.log(count);


// 9.16


let count = "";

for(let el of list) {
  count +=el[0]
}
console.log(count);


// 9.17


let result = {};

for(let k in obj) {
  if (result[obj[k]]) {
    result[obj[k]]++;
  }
  else {
    result[obj[k]] = 1;
  }
}
console.log(result);


// 9.18


let max = 0;
let result = "";

for(let i = 0; i < list.length; i++) {
  if(max < list[i].price) {
    max = list[i].price;
    result = list[i].product;
  }
}
console.log(result);