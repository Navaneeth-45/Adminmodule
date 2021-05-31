import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';

import { UserService} from '../user.service'

@Component({
  selector: 'app-users1',
  templateUrl: './users1.component.html',
  styleUrls: ['./users1.component.css']
})
export class Users1Component implements OnInit {

  mySubscription: any;
  users;

  constructor(private fsObj:UserService,private router:Router) { }
  ngOnInit(): void {
    this.mySubscription= this.fsObj.getUsers1().subscribe(
       userData=>{
         this.users=userData;
         console.log(this.users)
       },
       err=>{
         console.log("err in getting posts data",err)
       }
    )
      }
     
         
        
   

   ngOnDestroy(){
    this.mySubscription.unsubscribe();
   }
  

}
