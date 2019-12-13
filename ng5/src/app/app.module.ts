import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProductsComponent } from './products/products.component';
import { ProductComponent } from './product/product.component';
import { ListComponent } from './list/list.component';

import { ProductsService } from './products.service';

@NgModule({
  declarations: [
    AppComponent,
    ProductsComponent,
    ProductComponent,
    ListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [ProductsService ],
  bootstrap: [AppComponent]
})
export class AppModule { }
