import { GeographicalType } from "../interface/IGeographicalType";

export abstract class GeographicalEntity implements GeographicalType{
    type!:string;
    name!:string;
    area!:number;
    abstract show():any;
}