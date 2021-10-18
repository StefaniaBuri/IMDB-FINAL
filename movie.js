"use strict";
exports.__esModule = true;
exports.Movie = void 0;
var Movie = /** @class */ (function () {
    function Movie(title, releaseYear, nationality, genre) {
        this.title = title;
        this.releaseYear = releaseYear;
        this.nationality = nationality;
        this.genre = genre;
    }
    //Metodos Getters y Setters y del resto de metodos
    Movie.prototype.getTitle = function () {
        return this.title;
    };
    Movie.prototype.getReleaseYear = function () {
        return this.releaseYear;
    };
    Movie.prototype.getNationality = function () {
        return this.nationality;
    };
    Movie.prototype.getGenre = function () {
        return this.genre;
    };
    Movie.prototype.setTitle = function (title) {
        this.title = title;
    };
    Movie.prototype.setReleaseYear = function (releaseYear) {
        this.releaseYear = releaseYear;
    };
    Movie.prototype.setNationality = function (nationality) {
        this.nationality = nationality;
    };
    Movie.prototype.setGenre = function (genre) {
        this.genre = genre;
    };
    Movie.prototype.getActors = function () {
        return this.actors;
    };
    Movie.prototype.setActors = function (actors) {
        this.actors = actors;
    };
    Movie.prototype.getDirector = function () {
        return this.director;
    };
    Movie.prototype.setDirector = function (director) {
        this.director = director;
    };
    Movie.prototype.getWriter = function () {
        return this.writer;
    };
    Movie.prototype.setWriter = function (writer) {
        this.writer = writer;
    };
    Movie.prototype.getLanguage = function () {
        return this.language;
    };
    Movie.prototype.setLanguage = function (language) {
        this.language = language;
    };
    Movie.prototype.getPlataform = function () {
        return this.plataform;
    };
    Movie.prototype.setPlataform = function (plataform) {
        this.plataform = plataform;
    };
    Movie.prototype.getIsMCU = function () {
        return this.isMCU;
    };
    Movie.prototype.setIsMCU = function (isMCU) {
        this.isMCU = isMCU;
    };
    Movie.prototype.getMainCharacterName = function () {
        return this.mainCharacterName;
    };
    Movie.prototype.setMainCharacterName = function (mainCharacterName) {
        this.mainCharacterName = mainCharacterName;
    };
    Movie.prototype.getProducer = function () {
        return this.producer;
    };
    Movie.prototype.setProducer = function (producer) {
        this.producer = producer;
    };
    Movie.prototype.getDistributor = function () {
        return this.distributor;
    };
    Movie.prototype.setDistributor = function (distributor) {
        this.distributor = distributor;
    };
    Movie.prototype.printMovie = function () {
        return "Title - " + this.title + "\n" +
            "Release Year - " + this.releaseYear + "\n" +
            "Actors - " + this.actors + "\n" +
            "Nationality - " + this.nationality + "\n" +
            "Director - " + this.director + "\n" +
            "Writer - " + this.writer + "\n" +
            "Language - " + this.language + "\n" +
            "Plataform - " + this.plataform + "\n" +
            "isMCU - " + this.isMCU + "\n" +
            "Main Character - " + this.mainCharacterName + "\n" +
            "Producer - " + this.producer + "\n" +
            "Distributor - " + this.distributor + "\n" +
            "Genre - " + this.genre;
    };
    return Movie;
}());
exports.Movie = Movie;
