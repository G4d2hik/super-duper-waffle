let a = 5,
    b = a;

b = b + 5;
// console.log(b);
// console.log(a);

const obj = {
    a: 10,
    b: 5
};

const copyy = obj;

copy.a = 11;
// console.log(copy);
// console.log(obj);

function copy(object) {
    let obj = {};
    let key;
    for (key in object) {
        obj[key] = object[key];
    }
    return obj;
}

const numbers = {
    a: 1,
    b: 2,
    c: {
        d: 3,
        e: 4
    }
};

const newObj = copy(numbers);

newObj.a = 10;
// console.log(newObj);
// console.log(numbers);

const add = {
    z: 20,
    i: 19
};
// console.log(Object.assign(numbers, add)); //todo метод слияния обьектов

const clone = (Object.assign({}, add)); //todo клонирование нового обьекта

clone.z = 200;

// console.log(add);
// console.log(clone);


const oldArray = [1, 2, 3, 4, 5, 6];

const newArray = oldArray.slice();//todo изменения и копия при помощи метода slice();

newArray[0] = 10;

console.log(oldArray);
console.log(newArray);

const video = ['v', 'vf', 'dg'],
    blogs = ['g', 'q', 'p'],
    internet = [...video, ...blogs, 'vk', 'inst'];

// console.log(internet);

//todo spread операторы 

const ar = [1, 2, 3];

const newAr = [...ar];

newAr[0] = 4;

console.log(newAr);
console.log(ar);

const ob = {
    a: 1,
    b: 2
};

const newOb = { ...ob };

newOb.a = 3;

console.log(newOb);
console.log(ob);