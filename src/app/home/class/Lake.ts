import { IShow } from "../interface/IShow";
import { GeographicalEntity } from "./GeographicalEntity";

export class Lake extends GeographicalEntity implements IShow{
    constructor (override name:string,override area:number, public depth:number){
        super();
        this.type = "Озеро";
    }
    show(){
        return "Тип " + this.type + " Назва " + this.name + " Площа "+ this.area+" тис км " + " Глибина " + this.depth+ "м";
    }
}