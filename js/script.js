'use strict';

let numberOfFilms = +prompt('Сколько фильмов вы уже посмотрели?', '');

while (numberOfFilms <= 0 || numberOfFilms == NaN){
     numberOfFilms = +prompt('Сколько фильмов вы уже посмотрели?', '');
}

const personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false
};

if (personalMovieDB.count < 10) {
    console.log('Просмотрено довольно мало фильмов');
} else if (30 >= numberOfFilms >= 10) {
    console.log('Вы классический зритель');
} else if ( numberOfFilms > 30) {
    console.log('Вы киноман');
} else {
    console.log('Произошла ошибка');
}

for (let i = 0; i < 2; i++) {
    const a = prompt('Один из последних просмотренных фильмов?', ''),
          b = prompt('На сколько оцените его?', '');
    if (a != null && b != null && a != '' && b != '' && a.length < 50 && b.length < 50){
        personalMovieDB.movies[a] = b;
        console.log('done');
    } else {
        console.log('error');
        i--;
    }
}
 


console.log(personalMovieDB);




