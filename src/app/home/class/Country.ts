import { IShow } from "../interface/IShow";
import { GeographicalEntity } from "./GeographicalEntity";

export class Country extends GeographicalEntity implements IShow{
    constructor (override name:string,override area:number){
        super();
        this.type = "Країна";
    }
    show(){
        return "Тип " + this.type + " Назва " + this.name + " Площа "+ this.area +" тис км" ;
    }
}