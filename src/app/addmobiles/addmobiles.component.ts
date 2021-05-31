import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MobService } from '../mob.service';
import { Mobile} from '../models/mobile.model';
@Component({
  selector: 'app-addmobiles',
  templateUrl: './addmobiles.component.html',
  styleUrls: ['./addmobiles.component.css']
})
export class AddmobilesComponent implements OnInit {

  constructor(private dsObj:MobService,private router:Router) { }

  ngOnInit(): void {
  }
mobileModel=new Mobile('','','');
onSubmit(){
  this.dsObj.createMobiles(this.mobileModel).subscribe(
    res=>{
      
    },
    err=>{
      console.log('err in new mobiles',err)
    }
  )
}
}
