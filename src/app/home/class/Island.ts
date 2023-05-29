import { IShow } from "../interface/IShow";
import { GeographicalEntity } from "./GeographicalEntity";

export class Island extends GeographicalEntity implements IShow{
    constructor (override name:string,override area:number){
        super();
        this.type = "Острів";
    }
    show(){
        return "Тип " + this.type + " Назва " + this.name + " Площа "+ this.area +"км " ;
    }
}