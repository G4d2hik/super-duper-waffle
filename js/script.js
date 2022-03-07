'use strict';

let NumberOfFilms;

function start() {
    NumberOfFilms = +prompt("Сколько фильмов вы уже посмотрели?", '');
    while (NumberOfFilms == '' || NumberOfFilms == null || isNaN(NumberOfFilms)) {
        NumberOfFilms = +prompt("Сколько фильмов вы уже посмотрели?", '');
    }
}
start();

const personalMovieDB = {
    count: NumberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: true,
};

function remembreMyFilms() {
    for (let i = 0; i < 2; i++) {
        const a = prompt('Один из просмотренных фильмов?', ""),
            b = prompt("На сколько оцените его?", "");
        if (a != null && b != null && a !== '' && b != '' && a.length < 50 && b.length < 50) {
            personalMovieDB.movies[a] = b;
        } else {
            i--;
        }

    }
}
remembreMyFilms();

function detectPersonalLevel() {
    if (personalMovieDB.count < 10) {
        console.log('маловато фильмов');
    } else if (personalMovieDB.count >= 10 && personalMovieDB.count < 30) {
        console.log('Классический зритель фильмов');
    } else if (personalMovieDB.count >= 30) {
        console.log('Настоящий киноман');
    } else {
        console.log('Что-то пошло не так');
    }
}
detectPersonalLevel();

function showMyBD() {
    if (personalMovieDB.privat != false) {
        console.log(personalMovieDB);
    }
}
showMyBD(personalMovieDB.privat);


function writeYourGenres() {
    for (let i = 1; i <= 3; i++) {
        personalMovieDB.genres[i - 1] = prompt(`Ваш любимый жанр под номером ${i}`);
    }
}
writeYourGenres();