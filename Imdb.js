"use strict";
exports.__esModule = true;
exports.Imdb = void 0;
var Imdb = /** @class */ (function () {
    function Imdb(peliculas) {
        this.peliculas = peliculas;
    }
    Imdb.prototype.printPeliculas = function () {
        var resultado = "";
        for (var i = 0; i < this.peliculas.length; i++) {
            var numero = 1 + i;
            resultado += "Pelicula numero: " + numero + "\n" + this.peliculas[i].printMovie() + "\n";
        }
        return resultado;
    };
    Imdb.prototype.escribirEnFicheroJSON = function (nombreFichero) {
        var fs = require('fs');
        fs.writeFileSync(nombreFichero, JSON.stringify(this));
    };
    Imdb.prototype.obtenerInstanciaIMDB = function (nombreFichero) {
        var inst = new Imdb([]);
        var fs = require('fs');
        inst.peliculas = JSON.parse(fs.readFileSync(nombreFichero)).peliculas;
        return inst;
    };
    return Imdb;
}());
exports.Imdb = Imdb;
