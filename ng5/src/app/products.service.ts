import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {
  private products = [['in Service' , 'yo comments', 'not checked']]
  productsUpdated = new Subject();

  addProduct(productName: string, productComment: string){
    this.products.push([productName,productComment,'checked']);
    //will trigger a new fetch
    this.productsUpdated.next()
  }

  getProducts(){
    return [...this.products];
  }

  constructor() { }
}
