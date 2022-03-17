
function f1(a, b, c) {

}

function sum() {
    const x = 5;
    const y = 6;
    console.log(x + y);
}
sum();

let x = 55;
let y = 66;
function sum2() {
    console.log(x + y);
}
sum2();

x = 100;
y = 200;
sum2();

function sum3(a = 0, b = 0) {
    console.log(a + b);
}
sum3(44, 11);
sum3(100, 200);
let z = 77;
sum3(z, 10);
sum3(z, z * 2);
sum3(2, 3, 4, 5);
sum3(6);
function showSum(elem, x, y) {
    document.querySelector(elem).textContent = x + y;
}
function showSum2(elem, x, y) {
    elem.textContent = x + y;
}
showSum('.out-2', 5, 6);
const out1 = (document.querySelector('.out-1'));
showSum2(out1, 70, 6);

function showSum3(x, y, elem = '.out-1') {
    console.log(arguments);
    document.querySelector(elem).textContent = arguments[0] + y;
}
showSum3(10, 15, '.out-1');




function showSumAll() {
    console.log(arguments);
    /* let sum = 0;
    for(let i = 0; i < arguments.length; i++){
        sum += arguments[i];
    } */
    /* тоже самое */
    let sum = Array.from(arguments).reduce((accum, item) => accum += item);
    console.log(sum);
}
showSumAll(4, 5, 6, 20, 40);

function showSumAll2(...args) {
    console.log(arguments);
    let sum = args.reduce((accum, item) => accum += item);
    console.log(sum);
}
showSumAll2(4, 5, 6, 20, 40);
/* функция как аргумент */
function showAll(res) {
    document.querySelector('.out-1').innerHTML = `<b>${res}</b>`;
}

function showSumAll3(num, drawFunction) {
    drawFunction(num);
}
showSumAll3(45, showAll);

function showSumAll4(drawFunction, ...num) {
    drawFunction(num);
}
showSumAll4(showAll, 88, 76, 54, 32, 23);