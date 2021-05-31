import { Component, OnInit } from '@angular/core';
import { MobService } from '../mob.service';
import { Subscription } from 'rxjs';
import { Product } from '../models/product.model';
import { Router } from '@angular/router';


@Component({
  selector: 'app-mobiles',
  templateUrl: './mobiles.component.html',
  styleUrls: ['./mobiles.component.css']
})
export class MobilesComponent implements OnInit {
  mobiles;
  mySubscription: any;
  searchTerm:string;
  constructor( private dsObj:MobService) { }
  
  ngOnInit(): void {
    this.mySubscription= this.dsObj.getMobiles().subscribe(
       userData=>{
         this.mobiles=userData;
         
       },
       err=>{
         console.log("err in getting posts data",err)
       }
    )
      }

}
