import { Injectable } from '@angular/core';
import { Product } from './models/product.model';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor() { };

 mobiles:Product[]=[

 ];
  getMobilesData():Product[]{
    return this.mobiles;
  }
}
