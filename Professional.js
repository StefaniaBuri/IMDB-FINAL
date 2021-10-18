"use strict";
exports.__esModule = true;
exports.Professional = void 0;
var Professional = /** @class */ (function () {
    function Professional(name, age, genre, weight, height, hairColor, eyeColor, race, isRetired, nationality, oscarNumbers, profession) {
        this.name = name;
        this.age = age;
        this.genre = genre;
        this.weight = weight;
        this.height = height;
        this.hairColor = hairColor;
        this.eyeColor = eyeColor;
        this.race = race;
        this.isRetired = isRetired;
        this.nationality = nationality;
        this.oscarNumbers = oscarNumbers;
        this.profession = profession;
    }
    Professional.prototype.getName = function () {
        return this.name;
    };
    Professional.prototype.setName = function (name) {
        this.name = name;
    };
    Professional.prototype.getAge = function () {
        return this.age;
    };
    Professional.prototype.setAge = function (age) {
        this.age = age;
    };
    Professional.prototype.getGenre = function () {
        return this.genre;
    };
    Professional.prototype.setGenre = function (genre) {
        this.genre = genre;
    };
    Professional.prototype.getWeight = function () {
        return this.weight;
    };
    Professional.prototype.setWeight = function (weight) {
        this.weight = weight;
    };
    Professional.prototype.getHeight = function () {
        return this.height;
    };
    Professional.prototype.setHeight = function (height) {
        this.height = height;
    };
    Professional.prototype.getHairColor = function () {
        return this.hairColor;
    };
    Professional.prototype.setHairColor = function (hairColor) {
        this.hairColor = hairColor;
    };
    Professional.prototype.getEyeColor = function () {
        return this.eyeColor;
    };
    Professional.prototype.setEyeColor = function (eyeColor) {
        this.eyeColor = eyeColor;
    };
    Professional.prototype.getRace = function () {
        return this.race;
    };
    Professional.prototype.setRace = function (race) {
        this.race = race;
    };
    Professional.prototype.getIsRetired = function () {
        return this.isRetired;
    };
    Professional.prototype.setIsRetired = function (isRetired) {
        this.isRetired = isRetired;
    };
    Professional.prototype.getNationality = function () {
        return this.nationality;
    };
    Professional.prototype.setNationality = function (nationality) {
        this.nationality = nationality;
    };
    Professional.prototype.getOscarNumbers = function () {
        return this.oscarNumbers;
    };
    Professional.prototype.setOscarNumbers = function (oscarNumbers) {
        this.oscarNumbers = oscarNumbers;
    };
    Professional.prototype.getProfession = function () {
        return this.profession;
    };
    Professional.prototype.setProfession = function (profession) {
        this.profession = profession;
    };
    Professional.prototype.toString = function () {
        return "Name: " + this.name + "\nAge: " + this.age + "\nGenre: " + this.genre + "\nWeight: " + this.weight + "\nHeight: " + this.height
            + "\nHair color: " + this.hairColor + "\nEye color: " + this.eyeColor + "\nRace: " + this.race + "\nIs retired: " + this.isRetired
            + "\nNationality: " + this.nationality + "\nOscar numbers: " + this.oscarNumbers + "\nProfession: " + this.profession + "\n";
    };
    Professional.prototype.showProfessional = function () {
        console.log(this.toString());
    };
    return Professional;
}());
exports.Professional = Professional;
