export class Professional{
    private name: string;
    private age: number;
    private genre: string;
    private weight: number;
    private height: number;
    private hairColor: string;
    private eyeColor: string;
    private race: string;
    private isRetired: boolean;
    private nationality: string;
    private oscarNumbers: number;
    private profession: string;

    constructor(name:string, age:number, genre:string, weight:number, height:number, hairColor:string, eyeColor:string, race:string, isRetired:boolean, 
        nationality:string, oscarNumbers:number, profession:string){
            this.name=name;
            this.age=age;
            this.genre=genre;
            this.weight=weight;
            this.height=height;
            this.hairColor=hairColor;
            this.eyeColor=eyeColor;
            this.race=race;
            this.isRetired=isRetired;
            this.nationality=nationality;
            this.oscarNumbers=oscarNumbers;
            this.profession=profession;
        }

    public getName():string{
        return this.name;
    }

    public setName(name:string){
        this.name=name;
    }

    public getAge():number{
        return this.age;
    }

    public setAge(age:number){
        this.age=age;
    }

    public getGenre():string{
        return this.genre;
    }

    public setGenre(genre:string){
        this.genre=genre;
    }

    public getWeight():number{
        return this.weight;
    }

    public setWeight(weight:number){
        this.weight=weight;
    }

    public getHeight():number{
        return this.height;
    }

    public setHeight(height:number){
        this.height=height;
    }

    public getHairColor():string{
        return this.hairColor;
    }

    public setHairColor(hairColor:string){
        this.hairColor=hairColor;
    }

    public getEyeColor():string{
        return this.eyeColor;
    }

    public setEyeColor(eyeColor:string){
        this.eyeColor=eyeColor;
    }

    public getRace():string{
        return this.race;
    }

    public setRace(race:string){
        this.race=race;
    }

    public getIsRetired():boolean{
        return this.isRetired;
    }

    public setIsRetired(isRetired:boolean){
        this.isRetired=isRetired;
    }

    public getNationality():string{
        return this.nationality;
    }

    public setNationality(nationality:string){
        this.nationality=nationality;
    }

    public getOscarNumbers():number{
        return this.oscarNumbers;
    }

    public setOscarNumbers(oscarNumbers:number){
        this.oscarNumbers=oscarNumbers;
    }

    public getProfession():string{
        return this.profession;
    }

    public setProfession(profession:string){
        this.profession=profession;
    }

    public toString():string{
        return "Name: "+this.name+"\nAge: "+this.age+"\nGenre: "+this.genre+"\nWeight: "+this.weight+"\nHeight: "+this.height
        +"\nHair color: "+this.hairColor+"\nEye color: "+this.eyeColor+"\nRace: "+this.race+"\nIs retired: "+this.isRetired
        +"\nNationality: "+this.nationality+"\nOscar numbers: "+this.oscarNumbers+"\nProfession: "+this.profession+"\n";
    }

    public showProfessional(){
        console.log(this.toString());
    }
}