import { Movie } from "./movie";

export class Imdb{

        public peliculas: Movie[];

    constructor (peliculas: Movie[]){
        this.peliculas = peliculas;
    }

    
    public printPeliculas ()
    {
        let resultado = "";
        for(let i = 0; i < this.peliculas.length; i++) {
             let numero = 1 + i;
             resultado += "Pelicula numero: " + numero + "\n" +this.peliculas[i].printMovie()+ "\n";   
         }
         return resultado;
    }

    public escribirEnFicheroJSON (nombreFichero: string){
       const fs = require('fs');
       fs.writeFileSync(nombreFichero, JSON.stringify(this));
    }

    public obtenerInstanciaIMDB (nombreFichero: string): Imdb{
        let inst: Imdb = new Imdb([]);
        const fs = require('fs')
        inst.peliculas = JSON.parse(fs.readFileSync(nombreFichero)).peliculas;
        return inst;
    }
}