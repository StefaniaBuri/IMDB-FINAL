import {Movie} from "./movie"
import {Imdb} from "./Imdb";
import {Professional} from "./Professional";


const fs = require('fs');
const path = require('path');


let professional:Professional=new Professional("Ana", 28, "mujer", 60, 165, "castaño", "azúl", "española", false, "española", 1, "actriz");
let professional2:Professional=new Professional("Sara", 34, "mujer", 60, 165, "castaño", "azúl", "española", false, "española", 1, "actriz");
let professional3:Professional=new Professional("Pedro", 18, "hombre", 60, 165, "castaño", "azúl", "española", false, "española", 1, "actor");
let professional4:Professional=new Professional("Juan", 28, "mujer", 60, 165, "castaño", "azúl", "española", false, "española", 1, "director");
let professional5:Professional=new Professional("Roberto", 34, "mujer", 60, 165, "castaño", "azúl", "española", false, "española", 1, "director");
let professional6:Professional=new Professional("Marco", 18, "hombre", 60, 165, "castaño", "azúl", "española", false, "española", 1, "writer");
let professional7:Professional=new Professional("María", 68, "mujer", 60, 165, "castaño", "negro", "española", false, "española", 1, "writer");

let movie1:Movie=new Movie("Lo que el viento se llevó", 1990, "española", "drama");
movie1.setActors([professional2, professional3]);
movie1.setDirector(professional5);
movie1.setWriter(professional6);
movie1.setLanguage("español");
movie1.setPlataform("Neftlix");
movie1.setIsMCU(true);
movie1.setMainCharacterName("Sara");
movie1.setProducer("productor1");
movie1.setDistributor("distrbuidor1");


let imbd:Imdb=new Imdb([movie1]);
console.log("\n\nIMDB\n");
console.log(imbd.printPeliculas());
//Objeto pelicula

var nombre;
var preguntas=["Title", "Release Year", "Nationality", "Language", "Plataform", "IsMCU", "Main character name", "Producer", "Distributor", "Genre"];
var respuestas=[];

function pregunta(i){
     process.stdout.write("\n"+preguntas[i]);
     process.stdout.write(" > ");
}



process.stdin.on('data', function(data){
     
     respuestas.push(data.toString().trim());
     if(respuestas.length<preguntas.length){
           pregunta(respuestas.length);
          
           
     }else{
     process.exit();
     
     }  
});

process.on('exit', function(){

      let movie5:Movie=new Movie(respuestas[0], respuestas[1], respuestas[2], respuestas[9]);

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
let aJson=JSON.stringify(imbd);
fs.writeFileSync("imdbBBDD.json", aJson);

})
pregunta(0);

