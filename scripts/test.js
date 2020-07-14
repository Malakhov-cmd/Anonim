//alert("Hello world");
//console.log("Hello world");

//переменные
//var виден везде
var myVar = 10;
//перемнные видимые только в пределах функции let; const;

let string = "Привет мир";
//пустое значение присваивается неопределенным згачениям
undefined;
console.log(typeof string);

//функции
function foo() {
  console.log("Function Declaration");
}
//вызов
foo();

const bar = function () {
  console.log("Funtion expression");
};
bar();
const arrow = () => {
  console.log("Arrow Funntion");
};
arrow();

//Супер-строка

const name = "Илья";

let arrStr = ["Привет ", name, "!"].join("\n");

let template = `
Привет 
${name}
!
`;

console.log(arrStr);
console.log(template);
