import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';

import { UserService} from '../user.service'

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {
  mySubscription: any;
  users;

  constructor(private fsObj:UserService,private router:Router) { }
  ngOnInit(): void {
    this.mySubscription= this.fsObj.getUsersById().subscribe(
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
