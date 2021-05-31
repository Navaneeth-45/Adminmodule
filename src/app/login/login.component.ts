import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private router:Router) { }

  ngOnInit(): void {
  }
 onLogin(ref){
   let userLoginObj=ref.value;
   if(userLoginObj.username!='admin'&& userLoginObj.password!='admin'){
     alert("invalid credentials")
   }
   else{
     localStorage.setItem("username","admin")
    this.router.navigateByUrl("/admin")
   }

 }
}
