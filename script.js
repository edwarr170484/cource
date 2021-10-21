'use strict';

let numberOfFilms = prompt('Сколько фильмов вы уже посмотрели?');

let personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false
};

for(let i = 0;i < 2; i++){
    let lastSeenFilm = prompt('Один из последних просмотренных фильмов?');
    let lastSeenFilmRank = prompt('На сколько оцените его?');

    while(lastSeenFilm.length > 50 || lastSeenFilm == '' || lastSeenFilmRank == '' || lastSeenFilm === null || !lastSeenFilmRank === null){
        lastSeenFilm = prompt('Один из последних просмотренных фильмов?');
        lastSeenFilmRank = prompt('На сколько оцените его?');
    }
    
    personalMovieDB.movies[lastSeenFilm] = lastSeenFilmRank;
}

if(personalMovieDB.count < 10){
    console.log('Просмотрено довольно мало фильмов');
}
if(personalMovieDB.count >=10 && personalMovieDB.count <= 30){
    console.log('Вы классический зритель');
}
if(personalMovieDB.count > 30){
    console.log('Вы киноман');
}

function showMyDB(dbObject){
    if(!dbObject.privat){
        console.log(dbObject);
    }
}

function writeYourGenres(){
    for(let i = 0;i < 3;i++){
        personalMovieDB.genres[i] = prompt(`Ваш любимый жанр под номером ${i + 1}`);
    }
}

writeYourGenres();
showMyDB(personalMovieDB);