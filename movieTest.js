"use strict";
exports.__esModule = true;
var movie_1 = require("./movie");
var Professional_1 = require("./Professional");
//CARTELERA DE PELICULAS
var movie1 = new movie_1.Movie("Squid Game", 2021, "South Korea", "Action");
//Actors
var act1 = new Professional_1.Professional("Lee Jung-jae", 41, "male", 60, 1.62, "black", "dark", "Asian", false, "Korean", 1, "actor");
var act2 = new Professional_1.Professional("Jung Hoyeon", 28, "female", 50, 1.60, "red", "dark", "Asian", false, "Korean", 2, "actress");
var act3 = new Professional_1.Professional("Park Hae-soo", 43, "male", 62, 1.74, "black", "dark", "Asian", false, "Korean", 1, "actor");
//Director
var dir1 = new Professional_1.Professional("Heo Sung-tae", 56, "male", 78, 1.65, "black", "dark", "Asian", false, "Korean", 0, "director");
//Writer
var writ1 = new Professional_1.Professional("Lee Byung-hun", 50, "male", 70, 1.75, "black", "dark", "Asian", false, "Korean", 1, "writer");
//Producer
var prod1 = new Professional_1.Professional("Bao Sung-hun", 65, "male", 72, 1.60, "black", "dark", "Asian", false, "Korean", 0, "producer");
movie1.director = dir1;
movie1.actors = [act1, act2, act3];
movie1.writer = writ1;
movie1.producer = "Ramón";
movie1.language = "Korean";
movie1.plataform = "Netflix";
movie1.isMCU = false;
movie1.mainCharacterName = "Lee Jung-jae";
movie1.distributor = "Universal Studios";
var movie2 = new movie_1.Movie("Dune", 2021, "USA", "Sci-Fi");
//Actors
var act4 = new Professional_1.Professional("Timothée Chalamet", 22, "male", 61, 1.72, "brown", "green", "white", false, "American", 0, "actor");
var act5 = new Professional_1.Professional("Zendaya", 25, "female", 50, 1.80, "brown", "dark", "mixed", false, "American", 1, "actress");
var act6 = new Professional_1.Professional("Jason Momoa", 45, "male", 85, 1.84, "brown", "dark", "mixed", false, "American", 1, "actor");
//Director
var dir2 = new Professional_1.Professional("Denis Villeneuve", 65, "male", 80, 1.75, "blonde", "blue", "white", false, "American", 0, "director");
//Writer
var writ2 = new Professional_1.Professional("Eric Roth", 56, "male", 67, 1.78, "white", "blue", "mixed", false, "American", 0, "writer");
//Producer
var prod2 = new Professional_1.Professional("Jon Spaihts", 75, "male", 80, 1.70, "white", "green", "white", false, "American", 0, "producer");
movie2.director = dir2;
movie2.actors = [act4, act5, act6];
movie2.writer = writ2;
movie2.producer = "Carla";
movie2.language = "English";
movie2.plataform = "Disney+";
movie2.isMCU = true;
movie2.mainCharacterName = "Jason Momoa";
movie2.distributor = "The Lions Studios";
var movie3 = new movie_1.Movie("Vengadores: Endgame", 2019, "USA", "Action");
//Actors
var prof1 = new Professional_1.Professional("Robert Downey Jr.", 56, "male", 70, 1.85, "brown", "brown", "white", false, "American", 2, "actor");
var prof2 = new Professional_1.Professional("Scarlett Johanson", 36, "female", 55, 1.60, "blonde", "blue", "white", false, "American", 2, "actress");
var prof3 = new Professional_1.Professional("Chris Evans", 35, "male", 73, 1.85, "blonde", "blue", "white", false, "American", 2, "actor");
var prof4 = new Professional_1.Professional("Anthony Russo", 58, "male", 75, 1.75, "blonde", "blue", "white", false, "American", 0, "director");
var prof5 = new Professional_1.Professional("Jon Spaihts", 45, "male", 80, 1.75, "brown", "green", "American", false, "American", 0, "writer");
var prof6 = new Professional_1.Professional("Stan Lee", 48, "male", 67, 1.65, "black", "blue", "American", false, "American", 0, "producer");
movie3.director = prof4;
movie3.actors = [prof1, prof2, prof3];
movie3.writer = prof5;
movie3.producer = "Pedro";
movie3.language = " English";
movie3.plataform = "HBO";
movie3.isMCU = true;
movie3.mainCharacterName = "Chris Evans";
movie3.distributor = "Island Records";
console.log(movie1.printMovie());
console.log(movie2.printMovie());
console.log(movie3.printMovie());
