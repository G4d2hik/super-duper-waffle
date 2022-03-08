const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0];

arr.sort(compairNum);
console.log(arr);

function compairNum(a, b) {
    return a - b;
}

// arr[99] = 100;
// console.log(arr.length);
// console.log(arr);

// arr.forEach(function (item, i, arr) {
//TODO метод перебора массива forEach
//     console.log(`${i}:${item} внутри массива${arr}`);
// });



// arr.pop();// todo deletes the last element in the array
// arr.push({n: 10,v: '1'}); //todo adding an element to the end of the array
// arr.shift();//todo deletes the first element in the array
// arr.unshift(0);// todo adds an element to the beginning of the array
// console.log(arr);


// for (let i = 0; i < arr.length; i++) {
//todo перебор массива при помощи обычного цикла
//     console.log(arr[i]);
// }

// for (let value of arr) {
//todo перебор массива при помощи метода for of
//todo ТОЛЬКО ВНУТРИ МЕТОДА FOR OF МОЖНО ИСПОЛЬЗОВАТЬ BREAK И CONTINUE
//     console.log(value);
// }

const str = prompt("", "");
const products = str.split(',');
products.sort();
console.log(products.join("; "));