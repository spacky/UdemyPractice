'use strict';

const numberOfFilms = +prompt('Сколько фильмов вы уже посмотрели?', '');

const personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false
}; 

const firstFilm = prompt('Один из последних просмотренных фильмов?', ''),
    firstRaiting = prompt('На сколько оцените его?', ''),
    secondFilm = prompt('Один из последних просмотренных фильмов?', ''),
    secondRaiting = prompt('На сколько оцените его?', '');

personalMovieDB.movies[firstFilm] = firstRaiting;
personalMovieDB.movies[secondFilm] = secondRaiting;


console.log(personalMovieDB);




