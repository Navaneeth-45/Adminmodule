import { Component, OnInit } from '@angular/core';
import { MobService } from 'src/app/mob.service';
import { Mobile } from 'src/app/models/mobile.model';

@Component({
  selector: 'app-viewgames',
  templateUrl: './viewgames.component.html',
  styleUrls: ['./viewgames.component.css']
})
export class ViewgamesComponent implements OnInit {
  mobiles;
  editGameIndex;
  editGameObj=new Mobile('','','');
  editGameStatus:boolean=false;
  constructor(private dsObj:MobService) { }

  ngOnInit(): void {
    this.getUsers();
    
  }

  getUsers(){
    this.dsObj.getMobiles().subscribe(
      res=>{
        this.mobiles=res;
      },
      err=>{
        console.log('err in viewgames',err)
      }
    )
  }

  editGame(gameObj,index){

 this.editGameObj=gameObj;
 this.editGameIndex=index;
 this.editGameStatus=true;
  }

  saveGame(modifiedGameObj){
    this.editGameStatus=false;
    modifiedGameObj.id=this.editGameObj["id"];
    modifiedGameObj.productImage=this.editGameObj["productImage"];
    this.dsObj.modifyMobile(modifiedGameObj).subscribe(
      res=>{
        console.log(res)
      },
      err=>{
        console.log(err)
      }
    )



  }

  deleteGame(mobileObj){
    console.log("mobile to delete",mobileObj.id)
    this.dsObj.deleteGame(mobileObj.id).subscribe(
      res=>{
        
        this.getUsers();
        alert("Mobile deleted")
      },
      err=>{
        console.log("err in delete mobile",err)
      }
    )
  }

  

  

}
