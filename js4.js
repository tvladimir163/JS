// 4.1

let btn = document.querySelector("#btn");
let val = document.querySelector("#val");

btn.onclick = function () {
    console.log(val.innerText);
};


// 4.2

let btn = document.querySelector("#btn");
let val = document.querySelector("#val");

btn.onclick = function () {
    console.log(val.value);
};


// 4.3

let square = document.querySelector("#square");

square.onclick = function() {
    this.style.opacity = 0;
};


// 4.4

let clicker = document.querySelector("#clicker");

clicker.onclick = function() {
    let i = +clicker.innerText;
    clicker.innerText = i + 1;
};


// 4.5

let del = document.querySelector("#delete");
let points = document.querySelector("#points");

del.onclick = () => {
    points.removeChild(points.lastElementChild);
};


// 4.6

let square = document.querySelector("#square");

square.addEventListener("click", el => {
    let wh = parseFloat(square.style.wh) || square.scrollWidth;
    let hh = parseFloat(square.style.hh) || square.scrollHeight;
    square.style.width = wh * 0.9 + "px";
    square.style.height = hh * 0.9 + "px";
});


// 4.7

let copy = document.querySelector(".copy");
copy.addEventListener("click", function(el) {
    let clone = el.target.cloneNode();
    document.body.appendChild(clone);
});


// 4.8

let paragraphs = document.querySelectorAll("p");
paragraphs.forEach(el => {
    el.onclick = function () {
        let i = +this.innerText;
        el.innerText = ++i;
    }
});


// 4.9

let div1 = document.querySelector("#div1");
let div2 = document.querySelector("#div2");
let divs = document.querySelectorAll("#div1>p,#div2>p");

divs.forEach ( el => {
    el.addEventListener("click", function () {
        if (el.parentElement === div1) {
            div2.append(el);
        }
        else {
            div1.append(el);
        }
    })
});