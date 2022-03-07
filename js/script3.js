const num = '110';

(num == 7) ? console.log(num) : console.log('many');

switch (num) {
    case '49':
        console.log('неверно');
        break;
    case '100':
        console.log('неверно');
        break;
    case '50':
        console.log('не верно');
        break;
    case '110':
        console.log('верно');
        break;
    default:
        console.log('ничего не совпало!!!!');
        break;
}