import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddmobilesComponent } from './addmobiles/addmobiles.component';
import { AdminGuard } from './admin.guard';
import { BenifitsComponent } from './benifits/benifits.component';
import { BikesComponent } from './bikes/bikes.component';
import { ContactusComponent } from './contactus/contactus.component';
import { FeaturesComponent } from './features/features.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { MobilesComponent } from './mobiles/mobiles.component';
import { SignupComponent } from './Signup/signup.component';
import { TelevisionComponent } from './television/television.component';

import { UsersComponent } from './users/users.component';
import { Users1Component } from './users1/users1.component';




const routes: Routes = [
  
    {path:'mobiles',component:MobilesComponent},
    {path:'bikes',component:BikesComponent},
    {path:'television',component:TelevisionComponent},
    {path:'users',component:UsersComponent},
    {path:'users1',component:Users1Component},
    {path:'login',component:LoginComponent},
    {path:'addmobiles',component:AddmobilesComponent},
  
    { path: 'admin', loadChildren: () => import('./admin/admin.module').then(m => m.AdminModule),canActivate:[AdminGuard] }
      
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
