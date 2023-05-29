import { Component } from '@angular/core';
import { IonicModule } from '@ionic/angular';
import { GeographicalEntity } from './class/GeographicalEntity';
import { Country } from './class/Country';
import { Republic } from './class/Republic';
import { MountainRange } from './class/Mount_range';
import { Lake } from './class/Lake';
import { Island } from './class/Island';
import { Sea } from './class/Sea';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
  standalone: true,
  imports: [IonicModule,CommonModule],
})
export class HomePage {
  g_ent : GeographicalEntity[]=[];
  
  constructor() {}
  ras(){
    this.g_ent = new Array;
    this.g_ent.push( new Country("Україна",603));
    this.g_ent.push( new Republic("Казахстан",2725));
    this.g_ent.push( new MountainRange("Альпи",298,4800));
    this.g_ent.push( new Lake("Вікторія",69,83));
    this.g_ent.push( new Island("Мальта",316));
    this.g_ent.push( new Sea("Азовське",39,14));
    this.g_ent.forEach((element) => {
      console.log(element.show());
     })
    
  }
}
