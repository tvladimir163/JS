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


