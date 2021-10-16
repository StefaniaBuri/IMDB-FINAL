import {Professional} from './Professional';
export class Movie{
    
   
    public title: string;
    public releaseYear: number;
    public actors: Professional[];
    public nationality: string;
    public director: Professional;
    public writer: Professional;
    public language: string;
    public plataform: string;
    public isMCU: boolean;
    public mainCharacterName: string;
    public producer: string;
    public distributor: string;
    public genre: string;


    constructor (title: string, releaseYear: number, nationality: string, genre:string){
        this.title = title;
        this.releaseYear = releaseYear;
        this.nationality = nationality;
        this.genre = genre;
    }

    //Metodos Getters y Setters y del resto de metodos
    public getTitle ():string{
        return this.title;
    }
    public getReleaseYear (): number{
        return this.releaseYear;
    }
    public getNationality (): string{
        return this.nationality;
    }
    public getGenre (): string{
        return this.genre;
    }
    public setTitle (title:string){
        this.title = title;
    }
    public setReleaseYear (releaseYear: number){
        this.releaseYear = releaseYear;
    }
    public setNationality (nationality: string){
        this.nationality = nationality;
    }
    public setGenre (genre:string){
        this.genre = genre;
    }

    public getActors():Professional[]{
        return this.actors;
    }

    public setActors(actors:Professional[]){
        this.actors=actors;
    }

    public getDirector():Professional{
        return this.director;
    }

    public setDirector(director:Professional){
        this.director=director;
    }

    public getWriter():Professional{
        return this.writer;
    }

    public setWriter(writer:Professional){
        this.writer=writer;
    }

    public getLanguage():string{
        return this.language;
    }

    public setLanguage(language:string){
        this.language=language;
    }

    public getPlataform():string{
        return this.plataform;
    }

    public setPlataform(plataform:string){
        this.plataform=plataform;
    }

    public getIsMCU():boolean{
        return this.isMCU;
    }

    public setIsMCU(isMCU:boolean){
        this.isMCU=isMCU;
    }

    public getMainCharacterName():string{
        return this.mainCharacterName;
    }

    public setMainCharacterName(mainCharacterName:string){
        this.mainCharacterName=mainCharacterName;
    }

    public getProducer():string{
        return this.producer;
    }

    public setProducer(producer:string){
        this.producer=producer;
    }

    public getDistributor():string{
        return this.distributor;
    }

    public setDistributor(distributor:string){
        this.distributor=distributor;
    }

 
    public printMovie (){
        return "Title - "+ this.title + "\n" +
        "Release Year - "+ this.releaseYear + "\n" +
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
    }
}