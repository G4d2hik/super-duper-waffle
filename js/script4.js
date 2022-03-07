function showFirsMessage() {
    const result = confirm('тfdfgdg?');
    if (result !== false) {
        alert('sdfbdf');
    } else {
        alert('gnfhnfg');
    }
}
// showFirsMessage();
function showNextMess(text) {
    console.log(text);
}
// showNextMess('hello');
console.log(calc(10, 10));
console.log(calc(15, 15));
console.log(calc(20, 20));
console.log(calc(30, 30));
function calc(a, b) {
    return (a + b);
}
// let result = calc(100, 100);

// console.log(result);

function ret() {
    let num = 50;
    return num;
}
const anotherNum = ret();
// console.log(anotherNum);

const func = (a, b) => a * b;

console.log(func(7, 7));



