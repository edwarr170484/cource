'use strict';

let numberOfFilms = prompt('Сколько фильмов вы уже посмотрели?');

let personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false,
    toggleVisibleMyDB(){
        this.privat = !this.privat;
    },
    writeYourGenres(){
        for(let i = 0;i < 3;i++){
            this.genres[i] = prompt(`Ваш любимый жанр под номером ${i + 1}`);
            
            while(!this.genres[i] || this.genres[i] == ''){
                this.genres[i] = prompt(`Ваш любимый жанр под номером ${i + 1}`);
            }
        }

        this.genres.forEach((genre, index, genres) => {
            console.log(`Любимый жанр ${index + 1} - это ${genre}`);
        });
    },
    showMyDB(){
        if(!this.privat){
            console.log(this);
        }
    },
    setFilmRanks(){
        for(let i = 0;i < 2; i++){
            let lastSeenFilm = prompt('Один из последних просмотренных фильмов?');
            let lastSeenFilmRank = prompt('На сколько оцените его?');
        
            while(lastSeenFilm.length > 50 || lastSeenFilm == '' || lastSeenFilmRank == '' || lastSeenFilm === null || !lastSeenFilmRank === null){
                lastSeenFilm = prompt('Один из последних просмотренных фильмов?');
                lastSeenFilmRank = prompt('На сколько оцените его?');
            }
            
            this.movies[lastSeenFilm] = lastSeenFilmRank;
        }
    },
    whoAreYou(){
        if(this.count < 10){
            console.log('Просмотрено довольно мало фильмов');
        }
        if(this.count >=10 && this.count <= 30){
            console.log('Вы классический зритель');
        }
        if(this.count > 30){
            console.log('Вы киноман');
        }
    }
};


personalMovieDB.writeYourGenres();
