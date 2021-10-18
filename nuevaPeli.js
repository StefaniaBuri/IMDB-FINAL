"use strict";
exports.__esModule = true;
var movie_1 = require("./movie");
var Imdb_1 = require("./Imdb");
var Professional_1 = require("./Professional");
var fs = require('fs');
var path = require('path');
var professional = new Professional_1.Professional("Ana", 28, "mujer", 60, 165, "castaño", "azúl", "española", false, "española", 1, "actriz");
var professional2 = new Professional_1.Professional("Sara", 34, "mujer", 60, 165, "castaño", "azúl", "española", false, "española", 1, "actriz");
var professional3 = new Professional_1.Professional("Pedro", 18, "hombre", 60, 165, "castaño", "azúl", "española", false, "española", 1, "actor");
var professional4 = new Professional_1.Professional("Juan", 28, "mujer", 60, 165, "castaño", "azúl", "española", false, "española", 1, "director");
var professional5 = new Professional_1.Professional("Roberto", 34, "mujer", 60, 165, "castaño", "azúl", "española", false, "española", 1, "director");
var professional6 = new Professional_1.Professional("Marco", 18, "hombre", 60, 165, "castaño", "azúl", "española", false, "española", 1, "writer");
var professional7 = new Professional_1.Professional("María", 68, "mujer", 60, 165, "castaño", "negro", "española", false, "española", 1, "writer");
var movie1 = new movie_1.Movie("Lo que el viento se llevó", 1990, "española", "drama");
movie1.setActors([professional2, professional3]);
movie1.setDirector(professional5);
movie1.setWriter(professional6);
movie1.setLanguage("español");
movie1.setPlataform("Neftlix");
movie1.setIsMCU(true);
movie1.setMainCharacterName("Sara");
movie1.setProducer("productor1");
movie1.setDistributor("distrbuidor1");
var imbd = new Imdb_1.Imdb([movie1]);
console.log("\n\nIMDB\n");
console.log(imbd.printPeliculas());
//Objeto pelicula
var nombre;
var preguntas = ["Title", "Release Year", "Nationality", "Language", "Plataform", "IsMCU", "Main character name", "Producer", "Distributor", "Genre"];
var respuestas = [];
function pregunta(i) {
    process.stdout.write("\n" + preguntas[i]);
    process.stdout.write(" > ");
}
process.stdin.on('data', function (data) {
    respuestas.push(data.toString().trim());
    if (respuestas.length < preguntas.length) {
        pregunta(respuestas.length);
    }
    else {
        process.exit();
    }
});
process.on('exit', function () {
    var movie5 = new movie_1.Movie(respuestas[0], respuestas[1], respuestas[2], respuestas[9]);
    movie5.setActors([professional2]);
    movie5.setDirector(professional5);
    movie5.setWriter(professional6);
    movie5.setLanguage(respuestas[3]);
    movie5.setPlataform(respuestas[4]);
    movie5.setIsMCU(respuestas[5]);
    movie5.setMainCharacterName(respuestas[6]);
    movie5.setProducer(respuestas[7]);
    movie5.setDistributor(respuestas[8]);
    imbd.peliculas.push(movie5);
    var aJson = JSON.stringify(imbd);
    fs.writeFileSync("imdbBBDD.json", aJson);
});
pregunta(0);
