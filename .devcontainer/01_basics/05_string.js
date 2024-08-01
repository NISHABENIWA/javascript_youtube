//const n = "nisha";
//const r = 50;
// console.log("hi" + "hlo" + "no");

//console.log('Hello my name is ${n} and my repocount is ${r}');
const string1 = new String("nisha");
//console.log(string1);
//console.log(string1.__proto__);
//console.log(string1.length);
//console.log(string1.toUpperCase());
//console.log(string1.charAt(3));
//console.log(string1.indexOf('a'));
const newString = string1.substring(0,3);
console.log(newString);

const anotherString = string1.slice(-4,2)
console.log(anotherString);

const anotherString2 = "  nisha  ";
console.log(anotherString2);
console.log(anotherString2.trim());


const url = "https://hitesh.com/hitesh%20choudhary"
console.log(url.replace('%20', '-'))

console.log(url.includes('sundar'))

console.log(string1.split('-'));




