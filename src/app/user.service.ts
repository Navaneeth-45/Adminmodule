import { Injectable } from '@angular/core';
import { User } from '../app/models/user.model'
import { HttpClient } from '@angular/common/http'
import { Observable } from 'rxjs';
import { User1 } from './models/users1.model';
@Injectable({
  providedIn: 'root'
})
export class UserService {
  

  constructor(private hc:HttpClient) { }
  
  getUsersById():Observable<User>{
      
    return this.hc.get<User>('https://jsonplaceholder.typicode.com/users')
  }

  getUsers1():Observable<User>{
      
    return this.hc.get<User>('https://jsonplaceholder.typicode.com/users')
  }

  
  




}
