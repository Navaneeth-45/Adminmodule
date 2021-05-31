import { Component } from '@angular/core';
import { MobService } from './mob.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers:[]
})
export class AppComponent {
  title(title: any) {
    throw new Error('Method not implemented.');
  }
  constructor(public dsObj:MobService){}
  /* nameofcourse= 'AngularApp1';
  version:number=11;
  name:string="navaneeth";
  coursedetails={
     nameofcourse:"angular",
     duration:"50hrs",
     
  };
  status:boolean=true;
  data:string;

  sendData(d){
    this.data=d;
  };

  changeStatus(){
    this.status = !this.status;
  };

  arr:number[]=[10,20,30,40,50];

  todoItems:string[]=[];
  namesData(dat){
   this.todoItems.push(dat);
  }

  deleteItem(index)
  {
    this.todoItems.splice(index,1)
  }
  
 status:boolean=true;
 changeStatus(){
   this.status=!this.status;
 };

 todoItems:string[]=[];
 sendItem(item){
   this.todoItems.push(item)
 }

 users=[];
 addUserData(ref){
   let userobj=ref.value;
   this.users.push(userobj);
   ref.reset();
 };

 deleteItem(ind){
   this.users.splice(ind,1)
 };*/
 

 
 
}

 



