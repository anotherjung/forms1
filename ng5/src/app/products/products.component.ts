import { Component, OnInit, Input, EventEmitter, Output  } from '@angular/core';
import { ProductsService } from '../products.service';
import { Subscription } from 'rxjs';


@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {
  //@Input() productName: string;
  productName ='A Name';
  productComment ='Comment Here';
  //@Input() products = [ [this.productName, this.productComment]];
  products =[]
  private productsSubscription: Subscription;

  constructor(private productsService: ProductsService) { } 

  ngOnInit() {
    //service
    this.products = this.productsService.getProducts();
    //trigger & fetch
    this.productsSubscription = this.productsService.productsUpdated.subscribe(() => {
      this.products = this.productsService.getProducts();
    });
  }

  // addProduct(form){
  //   console.log(form)
  //   this.products.push([this.productName, this.productComment, 'checked']);
  // }

  onAddProduct(form) {
    // this.products.push(this.productName);
    if (form.valid) {
      //local 
      //this.products.push([form.value.productName,form.value.productComment, 'checked']);
      //service
      this.productsService.addProduct(form.value.productName,form.value.productComment);
    }
  }
}
