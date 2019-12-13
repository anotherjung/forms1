import { Component, OnInit, Input } from '@angular/core';

import { ProductsService } from '../products.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {
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

}
