'use strict';

let numberOfFilms,
    genre;

const personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false,
    start: function() {
        numberOfFilms = +prompt('Сколько фильмов вы уже посмотрели?', '');
    
        while (numberOfFilms == '' || numberOfFilms == null || isNaN(numberOfFilms)) {
            numberOfFilms = +prompt('Сколько фильмов вы уже посмотрели?', '');
    }
    },
    showMyDB: function(hidden) {
        if (!hidden) {
            console.log(personalMovieDB);
        }
    },
    writeYourGenres: function() {
        for (let i  = 1; i < 4; i++) {
            genre = prompt(`Ваш любимый жанр под номером ${i}`);
            while (genre == '' || genre == null) {
                genre = prompt(`Ваш любимый жанр под номером ${i}`);
            }
           personalMovieDB.genres[i - 1] = genre;
       }
    },
    rememberMyFilms: function() {
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
    },
    detectPersonalLevel: function() {
        if (personalMovieDB.count < 10) {
            console.log('Просмотрено довольно мало фильмов');
        } else if (30 >= numberOfFilms >= 10) {
            console.log('Вы классический зритель');
        } else if ( numberOfFilms > 30) {
            console.log('Вы киноман');
        } else {
            console.log('Произошла ошибка');
        }
    },
    toggleVisibleMyDB: function(toggle) {
        if (toggle == true) {
            personalMovieDB.privat = false;
        } else {
            personalMovieDB.privat = true;
        }
    }
};

personalMovieDB.start();
personalMovieDB.count = numberOfFilms;



// personalMovieDB.toggleVisibleMyDB(personalMovieDB);

personalMovieDB.showMyDB(personalMovieDB.privat);

personalMovieDB.writeYourGenres();

personalMovieDB.genres.forEach(function(item, i) {
    console.log(`Любимый жанр #${i + 1} - это ${item}`);
});

personalMovieDB.rememberMyFilms();

personalMovieDB.detectPersonalLevel();








