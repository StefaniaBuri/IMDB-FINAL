"use strict";
exports.__esModule = true;
var movie_1 = require("./movie");
var Imdb_1 = require("./Imdb");
var Professional_1 = require("./Professional");
//PELICULAS
var firstMovie = new movie_1.Movie("No Time to Die", 2021, " USA", "Thriller");
//professionals
var prof1 = new Professional_1.Professional("Ana de Armas", 26, "female", 54, 1.60, "brown", "green", "mixed", false, "Cuba", 0, "actress");
var prof2 = new Professional_1.Professional("Daniel Craig", 55, "male", 75, 1.70, "brown", "blue", "white", false, "USA", 1, "actor");
var prof3 = new Professional_1.Professional("Rami Malek", 35, "male", 68, 1.80, "dark", "brown", "mixed", false, "USA", 0, "actor");
var dr1 = new Professional_1.Professional("Cary Joji Fukunaga", 83, "male", 88, 1.70, "brown", "dark", "black", false, "USA", 0, "director");
var wr1 = new Professional_1.Professional("Ian Fleming", 76, "male", 78, 1.77, "brown", "green", "white", true, "USA", 0, "writer");
firstMovie.actors = [prof1, prof2, prof3];
firstMovie.language = "English";
firstMovie.plataform = "Netflix";
firstMovie.isMCU = false;
firstMovie.mainCharacterName = "Daniel Craig";
firstMovie.distributor = "Golden Mayer";
firstMovie.director = dr1;
firstMovie.writer = wr1;
var secondMovie = new movie_1.Movie("Joker", 2019, " USA", "Crime");
//professionals
var prof4 = new Professional_1.Professional("Zazie Beetz", 32, "female", 58, 1.60, "black", "black", "mixed", false, "USA", 0, "actress");
var prof5 = new Professional_1.Professional("Joaquin Phoenix", 45, "male", 65, 1.70, "brown", "green", "white", false, "USA", 1, "actor");
var prof6 = new Professional_1.Professional("Robert de Niro", 65, "male", 88, 1.80, "white", "dark", "white", false, "USA", 3, "actor");
var dr2 = new Professional_1.Professional("Todd Phillips", 73, "male", 90, 1.70, "brown", "dark", "white", false, "USA", 0, "director");
var wr2 = new Professional_1.Professional("Scott Silver", 68, "male", 73, 1.76, "brown", "dark", "mixed", true, "USA", 0, "writer");
secondMovie.actors = [prof4, prof5, prof6];
secondMovie.language = "English";
secondMovie.plataform = "Marvel";
secondMovie.isMCU = true;
secondMovie.mainCharacterName = "Robert De Niro";
secondMovie.distributor = "Henry Lodge";
secondMovie.director = dr2;
secondMovie.writer = wr2;
var movies = [firstMovie, secondMovie];
var libraryMovie = new Imdb_1.Imdb(movies);
libraryMovie.printPeliculas();
// AVANZADO
var fs = require('fs');
var JsonImdb = JSON.stringify(libraryMovie);
console.log(JsonImdb);
//console.log(typeof(JsonImdb));
fs.writeFileSync('./imdbBBDD.json', JSON.stringify(libraryMovie));
console.log(JSON.parse(fs.readFileSync('./imdbBBDD.json')));
libraryMovie.escribirEnFicheroJSON("imbdJSON.json");
console.log(libraryMovie.obtenerInstanciaIMDB("imbdJSON.json"));
