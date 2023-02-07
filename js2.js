// 1.1

console.log(message.toLowerCase().includes("Привет".toLowerCase()));


// 1.2

console.log(greetings.toLowerCase().lastIndexOf("Username".toLowerCase()));


// 1.3

let count1 = 0;
let count2 = 0;

count1 = firstDiv.indexOf("<p>");
count2 = firstDiv.lastIndexOf("<p>");

if(count1 === count2) {
  console.log(false);
}
else {
  console.log(true);
}


// 1.4

let result = road.replace(/km/gi, '');
result = (result * 0.62).toFixed(1);
result = Number(result);
console.log(result);


// 1.5

let result = 0;
for(i = 0; i < words.length; i++) {
  if(words[i] === " ") {
    result += 1;
  }
}
if(result >= 1) {
    console.log("В строке больше одного слова");
  }
else {
    console.log("В строке одно слово");
  
}


// 1.6

if (isNaN(symbols[0]) !== false) {
  console.log('Первый символ не цифра');
} 
else {
  console.log('Первый символ цифра');
}


// 1.7

let result = symbols.codePointAt(0) + symbols.codePointAt(1);

if(result % 2 === 0) {
  console.log(String.fromCodePoint(result))
}
else {
  console.log('Символ обнаружить не удалось');
}


// 1.8

let result = phone.match(/[\d+]/g);
result = result.toString();
result = result.replace(/[\s.,]/g, '')
console.log(result);


// 1.9

let result = /[a-z0-9-]+@[a-z]+\.[a-z]+/gi;
let res = emails.match(result);
console.log(res || [""]);


// 1.10

let test1 = /[a-z-]\d{8}\D/i;
let test2 = /[a-z-]\d{12}\D/i;

if(test1.test(ticket)) {
  console.log("Выбран билет на концерт");
}
else if(test2.test(ticket)) {
  console.log("Выбран билет в театр");
}
else {
  console.log("Билет не определен");
}


// 2.1

for(let i = 0; i < values.length; i++) {
  if(values[i] === true || values[i] === false) {
    values[i] = "Булевый тип";
    break;
  }
}
console.log(values);


// 2.2

let result =partNumbers.filter(i=>/\d{2}\D{2}$/.exec(i));
console.log(result);


// 2.3

let result = layout.match(/\d+/g) || [];
result = result.map(e => {
  if(e % 2 === 0) {
    return e ** 2;
  }
  else {
    return +e;
  }
})
console.log(result);


// 2.4

let titles = tasks.map(e => e.title);
console.log(titles);


// 2.5

let index1 = values.findIndex(e => typeof e === "boolean")
let index2 = values.findLastIndex(e => typeof e === "boolean")
let result = values.slice(index1, index2+1)

console.log(result);


// 2.6

values = values.filter(el => (el + "").length === 4);
console.log(values.length > 0);


// 2.7


let values = [10, 185, 11200, 980];
let result = values.findIndex(e => (e + "").length ===4);
console.log(result !== -1 ? result : "Искомый элемент не был найден");


// 2.8

let result = users.findIndex(e => e.role.split(" ").length > 1);
console.log(result);


// 2.9

array.sort((a,b) => a.length - b.length);
console.log(array);


// 2.10

randValues.sort();
randValues.sort((a, b) => a - b);
console.log(randValues);

2.11

let result = [0, 0];
words.forEach(e => {
  e.toLowerCase() === e.split("").reverse().join("").toLowerCase() ? result[0]++ : result[1]++;
})
console.log(result);


// 2.12

dates = dates.split(" ").map(e => e.replace(/\./g,"/"));
console.log(dates);


// 2.13

let obj = {};
let array = tickets.split(".")
array = array.filter(e => {
  if (e) {
    return e;
  }
});

array = array.map(e => {
  return e.split(": ");
});

array.forEach(e => {
  e[0] = e[0].trim();
  obj[e[0].toLowerCase()] = e[1].split(", ");
});
console.log(obj);


// 2.14

let cnt = numbers.reduce((acc, el) => {
  if (acc.sum + el <= 50) {
      acc.cnt++;
      acc.sum += el;
  }
  return acc;
}, {cnt: 0, sum: 0});
console.log(cnt.cnt);


// 2.15

let sum = 0;

for(i = 0; i < values.length; i++) {
  if(!isNaN(values[i]))
  sum += Number(values[i]);
}
console.log(sum);


// 2.16

function intersection(array_1, array_2) {
  let result = array_1.filter(e => {
    return array_2.includes(e);
  })
  result.sort((a, b) => b - a);
  return result;
}
console.log(intersection(array_1, array_2));


// 3.1

delete car.engine;
console.log(car);


// 3.2

let result1 = Object.keys(goods);
let result2 = Object.values(goods);

console.log([...result1, ...result2]);


// 3.3

let clone = Object.assign(article, author);

console.log(clone);

// 3.4

let cnt = 0;
function count() {
  for(i = 0; i < array.length; i++) {
  cnt++;
  }
return cnt;
}
console.log("Количество элементов в массиве: "+ count());


// 3.5

let str = "hireDate";

employee.sort((a,b) => {
  if (b[0] !== str) {
    return 1
  } else if (a[0] !== str) {
    return -1;
  }
})
if (typeof employee[0] === "object") {
  while (employee[employee.length -1][0] === str) {
    employee.pop();
  }
}
employee.push(["jobName", "IT PROG"]);
console.log(employee);


// 3.6

let countString = function (a) {
  let cnt = 0;
  for (let val of a) {
    if (typeof val[1] === "string") {
      cnt++;
    }
  }
  return cnt;
}
console.log("Количество строковых элементов в именованном массиве: "+ countString(array));


// 4.1

function getName() {
  return `${this.name} ${this.age}`
}
pet_1.getName = getName;
pet_2.getName = getName;

// 4.2

sayHi.call(input);

// 4.3

getDescription = getDescription.bind(pet);

// 4.4

function getValue() {
  let str = "";
  for (let k in this) {
    if (typeof this[k] !== "function") {
      str += `${k}: ${this[k]}, `;
    }
  }
  str = str.slice(0, str.length - 2);
  console.log(`Значения свойств объекта props (${str})`);
}
getValue = getValue.call(props);


// 4.5

hero = { 
  nick: "FirstHero", 
  position: "Лагерь",
  getPosition: ()=>console.log("Позиция героя: " + hero.position)
}


// 5.1

let descriptor = Object.getOwnPropertyDescriptor(order, "totalPrice");
console.log(descriptor);


// 5.2

let result = "";
for (key in employees) {
  if (typeof employees[key] !== "function") {
    result += `${key}, `;
  }
}
result = result.slice(0, result.length - 2);
console.log(result);


// 5.3

class User {
  constructor(f, l) {
    this.firstName = f;
    this.lastName = l;
  }
  get fullName () {
    return `${this.firstName} ${this.lastName}`;
  }
  set fullName (str) {
    let data = str.split(" ");
    this.firstName = data[0];
    this.lastName = data[1];
  }
}
let user = new User(firstName, lastName);


// 5.4

class Delivery {
  constructor(n, p) {
    this.name = n;
    this.phone = p;
    this.validPhone = /^\+/.test(p)
  }
}
let deliveryName = new Delivery(name,phone);


// 5.5

class User extends Permissions {
  constructor(n) {
    super();
    this.name = n;
  }
}


// 5.6

function queue() {
  let n = arguments[0];
  let arr = [...arguments];
  arr.shift();
  arr.sort((a, b) => a -b);
  let sum = 0;
  for(let i = 0; i < n; i++) {
    sum += arr[i];
  }
  return sum;
}

console.log(queue(num, ...array));


// 6.2

let canvas = document.getElementById("root");
let context = canvas.getContext("2d");
    context.beginPath();
    context.moveTo(100, 100);
    context.lineTo(200, 100);
    context.stroke();
    context.beginPath();
    context.moveTo(100, 150);
    context.lineTo(200, 150);
    context.stroke();


// 6.3

let canvas = document.getElementById("root");
let context = canvas.getContext("2d");
context.lineWidth = 10;
    
    context.moveTo(15,25);
    context.lineTo(100,25);
    context.strokeStyle = "#e74c3c";
    context.stroke();

    context.beginPath();
    context.moveTo(15,50);
    context.lineTo(100,50);
    context.strokeStyle = "#16a085";
    context.stroke();

    context.beginPath();
    context.moveTo(15,75);
    context.lineTo(100,75);
    context.strokeStyle = "#2980b9";
    context.stroke();


// 6.4

let canvas = document.getElementById("root");
let context = canvas.getContext("2d");
    context.beginPath();
    context.fillStyle = '#ff3d00';
    context.fillRect(10, 10, 100, 100);
    context.fillStyle = '#0bdd38';
    context.fillRect(120, 10, 100, 100);
    context.fillStyle = '#2e77da';
    context.fillRect(10, 120, 100, 100);
    context.fillStyle = '#ffd200';
    context.fillRect(120, 120, 100, 100);


// 6.5

let canvas = document.getElementById("root");
let context = canvas.getContext("2d");
let n = 0;
for(i = 0; i < 50; i++) {
    n += 2;
    context.beginPath();
    context.arc(150, 150, n, 0, 2 * Math.PI);
    context.fill();    
}


// 6.6

document.addEventListener("mousemove", el => {
	ctx.beginPath();
	ctx.arc(el.offsetX, el.offsetY, 50, 0, 2 * Math.Pi);
	ctx.stroke();
});