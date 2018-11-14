import { Component, OnInit } from '@angular/core';
import { HotLevel } from '../hot-level';

@Component({
  selector: 'app-coffee-cup',
  templateUrl: './coffee-cup.component.html',
  styleUrls: ['./coffee-cup.component.css']
})
export class CoffeeCupComponent implements OnInit {


  static counter=0;
  localConter:number;
  hotLevel:HotLevel;

  constructor() {
     this.localConter=++CoffeeCupComponent.counter;
     this.hotLevel=this.localConter%4;
   }


   changeTemp(){
     this.hotLevel=(this.hotLevel+1)%4;
   }

   getEnumContent(index:number){
     return HotLevel[index];
   }
  ngOnInit() {
  }

}
