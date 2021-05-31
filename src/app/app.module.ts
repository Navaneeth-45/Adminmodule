import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import{FormsModule} from '@angular/forms'
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UserListComponent } from './user-list/user-list.component';
import { CardoneComponent } from './cardone/cardone.component';
import { CardtwoComponent } from './cardtwo/cardtwo.component';
import { CardthreeComponent } from './cardthree/cardthree.component';
import { CardfourComponent } from './cardfour/cardfour.component';
import { CardsixComponent } from './cardsix/cardsix.component';
import { CardfiveComponent } from './cardfive/cardfive.component';
import { ProductsComponent } from './products/products.component';
import { FooterComponent } from './footer/footer.component';
import { ProductDetailsComponent } from './product-details/product-details.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { ContactusComponent } from './contactus/contactus.component';
import { SignupComponent } from './Signup/signup.component';
import { FeaturesComponent } from './features/features.component';
import { BenifitsComponent } from './benifits/benifits.component';
import { MobilesComponent } from './mobiles/mobiles.component';
import {HttpClientModule} from '@angular/common/http';
import { BikesComponent } from './bikes/bikes.component';
import { TelevisionComponent } from './television/television.component';

import { UsersComponent } from './users/users.component';
import { Users1Component } from './users1/users1.component';
import { AddmobilesComponent } from './addmobiles/addmobiles.component';
import { SearchPipe } from './search.pipe' 

@NgModule({
  declarations: [
    AppComponent,
  
    UserListComponent,
    CardoneComponent,
    CardtwoComponent,
    CardthreeComponent,
    CardfourComponent,
    CardsixComponent,
    CardfiveComponent,
    ProductsComponent,
    FooterComponent,
    ProductDetailsComponent,
    HomeComponent,
    LoginComponent,
    ContactusComponent,
    SignupComponent,
    FeaturesComponent,
    BenifitsComponent,
    MobilesComponent,
    BikesComponent,
    TelevisionComponent,

    UsersComponent,
     Users1Component,
     AddmobilesComponent,
     SearchPipe,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule ,
    HttpClientModule  
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
