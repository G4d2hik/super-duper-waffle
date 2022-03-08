const options = {
    key: 'value',
    name: 'test',
    width: 1024,
    height: 1024,
    color: {
        border: 'back',
        bg: 'red'
    },
    oMaleMaleMale: function () { //todo встроенные методы в обьект
        console.log('hello');
    },
};

// options.oMaleMaleMale();


const { border, bg } = options.color;// todo деструктуризация обьекта 
console.log(border);


console.log(Object.keys(options).length); //todo метод перебора ключей в массив


// options.name = 'sdfsd'; //todo перезапись в обьекте 
// delete (options.name); //todo метод удаление из обьекта 
// console.log(options.name);
// console.log(typeof options);


let counter = 0; //todo переменная счетчик
for (let key in options) { // todo метод перебора обьекта
    if (typeof options[key] === 'object') {
        for (let i in options[key]) { //todo перебор внутри перебора с условием
            console.log(`Свойство ${i} имеет значение ${options[key][i]}`);
        }
    } else {
        console.log(`Свойство ${key} имеет значение ${options[key]}`);
        counter++;
    }
}

console.log(counter);