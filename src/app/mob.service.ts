import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Observable } from 'rxjs';
import {Product} from '../app/models/product.model'
import { Mobile } from './models/mobile.model';

@Injectable({
  providedIn: 'root'
})
export class MobService {
  deleteMobile(id: any) {
    throw new Error('Method not implemented.');
  }

  constructor(private hc:HttpClient) { }

  getMobiles():Observable<Mobile>{
      
    return this.hc.get<Mobile>('http://localhost:3000/mobiles')
  }
  createMobiles(mobileObj):Observable<any>{
      
    return this.hc.post("http://localhost:3000/mobiles",mobileObj)
  }

  modifyMobile(modifiedMobileObj):Observable<any>{
      
    return this.hc.put("http://localhost:3000/mobiles/"+modifiedMobileObj.id,modifiedMobileObj)
  }

  deleteGame(id):Observable<any>{
    console.log("id is ",id)
    return this.hc.delete("http://localhost:3000/mobiles/"+id)
  }
  userLoginStatus():boolean{
    if(localStorage.getItem("username")==null){
      return false;
    }
    else{
      return true;
    }
  }

  
 userLogout(){
  localStorage.clear();

}

}
