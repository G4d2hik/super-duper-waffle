function first() {
    setTimeout(function () {
        console.log(1);
    }, 5000);
}

function second() {
    console.log('hi');
}
first();
second();

function learnJS(lang, callback) {
    console.log(`Я учу ${lang}`);
    callback();
}

function done() {
    console.log('Я прошел этот урок');
}

learnJS('JavaScript', done);