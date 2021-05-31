import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminComponent } from './admin.component';
import { ViewgamesComponent } from './viewgames/viewgames.component';

const routes: Routes = [{ path: '', component: AdminComponent,children:[
  {path:'viewgames',component:ViewgamesComponent}
] }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
