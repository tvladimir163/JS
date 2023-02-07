// 1.1

let secret= document.querySelector(".secret").tagName.toLowerCase();
console.log(secret);


// 1.2

let elem = document.querySelector("#elem").tagName.toLowerCase();
console.log(elem);


// 1.3

let promo = document.querySelectorAll(".promo");
let result = 0;

for (let i = 0; i < promo.length; i++) {
  result++;
}
console.log(result);


// 1.4

let target = document.querySelectorAll(".target");

for (let i = 0; i < target.length; i++) {
  result = target[i];
}
console.log(result = result.tagName.toLowerCase());


// 1.5

let price = document.querySelector(".price");
let result = price.innerText;
price.innerText = result * 2;


// 1.6

let link = document.querySelector(".links");
link.innerHTML = `<a>${link.innerHTML}</a>`;


// 1.7

let content = document.querySelector('.content');
let replaced = content.outerHTML.replace(/p/g, 'b');

content.outerHTML = replaced;
console.log(replaced);


// 1.8

let price = document.querySelectorAll('.price');
let sum = 0;
for (let  i = 0; i < price.length;) {
    sum += +price[i].innerHTML;
    i++
}

console.log(sum);


// 1.9

let numeric = document.querySelectorAll('.numeric');

for (let  i = 0; i < numeric.length;) {
    if (numeric[i].innerHTML < 0) {
      numeric[i].innerHTML = `<b>${numeric[i].innerHTML}</b>`;
    }
i++
};
console.log(document.querySelector('.numeric'));


// 1.10

let result = 0;
let elems = document.querySelectorAll(".numeric");
elems.forEach(elem => result += +elem.innerText);


// 1.11

let car = document.querySelectorAll('.cars li');
let cars = [];
for (let i = 0; i < car.length;) {
  cars.push(car[i].innerText);
  i++;
};
console.log(cars);


// 2.1

let root = document.querySelector("#root");
let new_element = document.createElement("p");
new_element.innerText = "Ура! Мой скрипт отработал верно!";
root.appendChild(new_element);


// 2.2

let content = document.querySelector(".content");
let new_element = document.createElement("h2");
new_element.innerText = "Сегодня солнечно, минус 15";
content.appendChild(new_element);


// 2.3

let ul = document.querySelector(".content ul");
ul.className = "ul";

let li = document.createElement('li');
li.innerHTML = 'Велосипед';
ul.prepend(li);


// 2.4

let div = document.querySelectorAll("div");

for (let i = 0; i < div.length; i++) {
  div[i].className = "adds";
};


// 2.5

let p = document.querySelectorAll("p");
let num = 1;

for (let i = 0; i < p.length; i++) {
  p[i].id = `p_${num}`;
  num++;
};


// 2.6

let del = document.querySelectorAll("p");

for (let i = 0; i < del.length; i++){
	if (del[i].innerText.toLowerCase() === "delete") {
		del[i].remove();
}};


// 2.7

const values = [15, 20, 25];
let elems = document.querySelectorAll(".elems");

for(let i = 0; i < elems.length; i++) {
  for(let j = 0; j < values.length; j++) {
    if (values[j] === +elems[i].innerText)  {
      elems[i].remove();
    }
  }
};


// 2.8

let div1 = document.querySelector("#div1");
let div2 = document.querySelector("#div2");

while (div1.children.length) {
  div2.append(div1.firstElementChild);
};


// 2.9

let new_element = document.createElement('li');
new_element.id = "first";
let first = document.querySelector('#first');
first.append(new_element);
let result = document.querySelectorAll("#first li").length;

console.log(result);


// 2.10

let div1 = document.querySelectorAll("#div1 p");
let div2 = document.querySelector("#div2")

for(let i = 0; i < div1.length; i++) {
  for(let j = 0; j < values.length; j++) {
    if (values[j] === div1[i].textContent)  {
      let val = document.createElement('p');
      val.innerText = div1[i].textContent;
      div1[i].remove();
      div2.append(val);
    }
  }
};


// 2.11

const tasks = ["Проверить документы", "Отправить начальству", "Организовать собрание"];
let root = document.querySelector("#root");

tasks.forEach(el => {
	let p = document.createElement("p");
	p.innerText = el;
	root.append(p);
});


// 2.12

let tag = ["div", "p", "h2"];
let result  = {};

tag.forEach(el => {
	result[el] = document.querySelectorAll(el).length
});

console.log(result);


// 2.13

let list = document.querySelector("#tasks");
let items = document.querySelectorAll("#tasks li");
let sorted =  [...items].sort(function(a, b) {
  return a.innerHTML.length - b.innerHTML.length;
});

list.innerHTML = "";
for (let li of sorted) {
  list.appendChild(li);
};


// 3.1

let elem = document.querySelector("#div_elem");
elem.style.height = 100 + "px";
elem.style.width  = 100 + "px";


// 3.2

let rainbow = document.querySelector("#rainbow");
rainbow.style.color = "#2980b9";


// 3.4

let paragraph = document.querySelector("#rainbow");
let number = +paragraph.innerText;

if(number >= 1 && number <= 9) {
  paragraph.style.color = "#c0392b"
}
else if (number >= 10 && number <= 20) {
  paragraph.style.color = "#e17055"
}
else {
  paragraph.style.color = "#fdcb6e"
}


// 3.7

let select = document.querySelector("select");

countries.forEach(el => {
  let option = document.createElement("option");
  option.value = el.slice(0, 2).toLowerCase();
  option.innerText = el;
  select.appendChild(option);
});