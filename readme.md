WIP, this is my starter for creating forms
# add form with binding 
`<input type="text" [(ngModel)]="productName">`
`<div>{{ productName }}</div>`
`<input type="text" [(ngModel)]="productComment">`
`<div>{{ productComment }}</div>`
## update products.componment.ts
`  productName ='A Book';`
`  productComment ='Comment Here';`
## update app.module.ts
`import { FormsModule } from '@angular/forms';`

# add product to display list 
`ng g c product`
## add input ng5/src/app/product/product.component.ts
## import input from core
 `@Input() productName: string;`
## html
`<p>{{ productName }}</p>`
## add componement selector to parent componment 

# adding form to html
```
<form (ngSubmit)="onAddProduct(f)" #f="ngForm">
    <input type="text" ngModel name="productName" required>
    <input type="text" ngModel name="productComment">
    <button type="submit">Add</button>
  </form>
```
## adding function to ts 
```
  onAddProduct(form) {
    // this.products.push(this.productName);
    if (form.valid) {
       this.products.push([form.value.productName,form.value.productComment, 'checked']);
      //this.productsService.addProduct(form.value.productName);
    }
  }
```

# adding service to share data across services
`ng g s products `
## update products.component
`import { ProductsService } from './products.service';`
 ` constructor(private productsService: ProductsService) {`
## update app.module
`import { ProductsService } from './products.service';providers: `
`[ProductsService ],`

# adding rxjs in product.service
`import { Subject } from 'rxjs';`
`  productsUpdated = new Subject();`
`    this.productsUpdated.next()`

## adding subscribe to products.component
`import { Subscription } from 'rxjs';`
`  private productsSubscription: Subscription;`
```
    this.productsSubscription = this.productsService.productsUpdated.subscribe(() => {
      this.products = this.productsService.getProducts();
    });
```