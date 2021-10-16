import { Movie } from "./movie";
import { Imdb } from "./Imdb";
import { Professional } from "./Professional";

//PELICULAS
let firstMovie = new Movie("No Time to Die", 2021," USA", "Thriller");
   //professionals
   let prof1 : Professional = new Professional("Ana de Armas", 26, "female", 54, 1.60, "brown", "green", "mixed", false, "Cuba", 0, "actress");
   let prof2 : Professional = new Professional("Daniel Craig", 55, "male", 75, 1.70, "brown", "blue", "white", false, "USA", 1, "actor");
   let prof3 : Professional = new Professional("Rami Malek", 35, "male", 68, 1.80, "dark", "brown", "mixed", false, "USA", 0, "actor");

   let dr1 : Professional = new Professional("Cary Joji Fukunaga", 83, "male", 88, 1.70, "brown", "dark", "black", false, "USA", 0, "director");
   let wr1 : Professional = new Professional("Ian Fleming", 76, "male", 78, 1.77, "brown", "green", "white", true, "USA", 0, "writer");

   firstMovie.actors = [prof1, prof2, prof3];
   firstMovie.language = "English";
   firstMovie.plataform = "Netflix";
   firstMovie.isMCU = false;
   firstMovie.mainCharacterName = "Daniel Craig";
   firstMovie.distributor = "Golden Mayer";
   firstMovie.director = dr1;
   firstMovie.writer = wr1;

let secondMovie= new Movie("Joker", 2019," USA", "Crime");
    //professionals
    let prof4 : Professional = new Professional("Zazie Beetz", 32, "female", 58, 1.60, "black", "black", "mixed", false, "USA", 0, "actress");
    let prof5 : Professional = new Professional("Joaquin Phoenix", 45, "male", 65, 1.70, "brown", "green", "white", false, "USA", 1, "actor");
    let prof6 : Professional = new Professional("Robert de Niro", 65, "male", 88, 1.80, "white", "dark", "white", false, "USA", 3, "actor");

    let dr2 : Professional = new Professional("Todd Phillips", 73, "male", 90, 1.70, "brown", "dark", "white", false, "USA", 0, "director");
    let wr2 : Professional = new Professional("Scott Silver", 68, "male", 73, 1.76, "brown", "dark", "mixed", true, "USA", 0, "writer");
 
    secondMovie.actors = [prof4, prof5, prof6];
    secondMovie.language = "English";
    secondMovie.plataform = "Marvel";
    secondMovie.isMCU = true;
    secondMovie.mainCharacterName = "Robert De Niro";
    secondMovie.distributor = "Henry Lodge";
    secondMovie.director = dr2;
    secondMovie.writer = wr2;


let movies: Movie[] = [firstMovie, secondMovie];
let libraryMovie:Imdb = new Imdb (movies);
libraryMovie.printPeliculas();


// AVANZADO
const fs = require('fs');

const JsonImdb = JSON.stringify(libraryMovie);
console.log(JsonImdb);

fs.writeFileSync('./imdbBBDD.json', JSON.stringify(libraryMovie));
console.log(JSON.parse(fs.readFileSync('./imdbBBDD.json')));

libraryMovie.escribirEnFicheroJSON("imbdJSON.json");

console.log(libraryMovie.obtenerInstanciaIMDB("imbdJSON.json"));