import {Professional} from "./Professional";
import { Movie } from "./movie";
import { Imdb } from "./Imdb";

//---------------------->>"PRUEBA CLASS PROFESSIONAL"<<----------------
let professional:Professional=new Professional("Ana", 28, "mujer", 60, 165, "castaño", "azúl", "española", false, "española", 1, "actriz");
let professional2:Professional=new Professional("Sara", 34, "mujer", 60, 165, "castaño", "azúl", "española", false, "española", 1, "actriz");
let professional3:Professional=new Professional("Pedro", 18, "hombre", 60, 165, "castaño", "azúl", "española", false, "española", 1, "actor");

professional.showProfessional();
professional2.showProfessional();
professional3.showProfessional();

//---------------------->>"PRUEBA CLASS MOVIE"<<-----------------------


//CARTELERA DE PELICULAS

let movie1 = new Movie("Squid Game", 2021, "South Korea","Action");
    //Actors
    let act1: Professional = new Professional("Lee Jung-jae", 41, "male", 60, 1.62,"black", "dark", "Asian", false, "Korean", 1, "actor");
    let act2: Professional = new Professional("Jung Hoyeon", 28, "female", 50, 1.60,"red", "dark", "Asian", false, "Korean", 2, "actress");
    let act3: Professional = new Professional("Park Hae-soo", 43, "male", 62, 1.74,"black", "dark", "Asian", false, "Korean", 1, "actor");
    //Director
    let dir1: Professional = new Professional("Heo Sung-tae", 56, "male", 78, 1.65, "black", "dark", "Asian", false, "Korean", 0, "director"); 
    //Writer
    let writ1: Professional = new Professional("Lee Byung-hun", 50, "male", 70, 1.75, "black", "dark", "Asian", false, "Korean", 1, "writer"); 
    //Producer
    let prod1: Professional = new Professional("Bao Sung-hun", 65, "male", 72, 1.60, "black", "dark", "Asian", false, "Korean", 0, "producer"); 

movie1.director = dir1;
movie1.actors = [act1, act2, act3];
movie1.writer = writ1;
movie1.producer = "Ramón"; 
movie1.language = "Korean";
movie1.plataform = "Netflix";
movie1.isMCU = false;
movie1.mainCharacterName = "Lee Jung-jae";
movie1.distributor = "Universal Studios";

let movie2 = new Movie("Dune", 2021, "USA", "Sci-Fi");
//Actors
let act4: Professional = new Professional("Timothée Chalamet", 22, "male", 61, 1.72,"brown", "green", "white", false, "American", 0, "actor");
let act5: Professional = new Professional("Zendaya", 25, "female", 50, 1.80,"brown", "dark", "mixed", false, "American", 1, "actress");
let act6: Professional = new Professional("Jason Momoa", 45, "male", 85, 1.84,"brown", "dark", "mixed", false, "American", 1, "actor");
//Director
let dir2: Professional = new Professional("Denis Villeneuve", 65, "male", 80, 1.75, "blonde", "blue", "white", false, "American", 0, "director"); 
//Writer
let writ2: Professional = new Professional("Eric Roth", 56, "male", 67, 1.78, "white", "blue", "mixed", false, "American", 0, "writer"); 
//Producer
let prod2: Professional = new Professional("Jon Spaihts", 75, "male", 80, 1.70, "white", "green", "white", false, "American", 0, "producer"); 

movie2.director = dir2;
movie2.actors = [act4, act5, act6];
movie2.writer = writ2;
movie2.producer = "Carla"; 
movie2.language = "English";
movie2.plataform = "Disney+";
movie2.isMCU = true;
movie2.mainCharacterName = "Jason Momoa";
movie2.distributor = "The Lions Studios";


let movie3 = new Movie("Vengadores: Endgame", 2019, "USA", "Action");
    //Actors
let profe1 = new Professional("Robert Downey Jr.", 56, "male", 70, 1.85,"brown", "brown", "white", false, "American", 2, "actor");
let profe2 = new Professional("Scarlett Johanson", 36, "female", 55, 1.60,"blonde", "blue", "white", false, "American", 2, "actress");
let profe3 = new Professional("Chris Evans", 35, "male", 73, 1.85,"blonde", "blue", "white", false, "American", 2, "actor");

let profe4 = new Professional("Anthony Russo", 58, "male", 75, 1.75,"blonde", "blue", "white", false, "American", 0, "director");
let profe5 = new Professional("Jon Spaihts", 45, "male", 80, 1.75,"brown", "green", "American", false, "American", 0, "writer");


movie3.director = profe4;
movie3.actors = [profe1, profe2, profe3];
movie3.writer = profe5;
movie3.producer = "Pedro"; 
movie3.language = " English";
movie3.plataform = "HBO";
movie3.isMCU = true;
movie3.mainCharacterName = "Chris Evans";
movie3.distributor = "Island Records";

console.log(movie1.printMovie());
console.log(movie2.printMovie());
console.log(movie3.printMovie());




//---------------------->>"PRUEBA CLASS IMDB"<<-----------------------



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






