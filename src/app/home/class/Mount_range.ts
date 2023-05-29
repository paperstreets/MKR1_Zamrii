import { IShow } from "../interface/IShow";
import { GeographicalEntity } from "./GeographicalEntity";

export class MountainRange extends GeographicalEntity implements IShow{
    constructor (override name:string,override area:number, public height:number){
        super();
        this.type = "Гірський хребет";
    }
    show(){
        return "Тип " + this.type + " Назва " + this.name + " Площа " + this.area+" тис км "+ " Висота " + this.height + "м";
    }
}