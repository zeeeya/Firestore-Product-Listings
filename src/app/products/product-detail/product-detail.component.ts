import { Component, Input } from '@angular/core';

import { ProductService } from '../product.service';

import { Product } from '../product-model';

@Component({
  selector: 'product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.scss'],
})
export class ProductDetailComponent {

  @Input()
  product: Product;

  constructor(private productService: ProductService) { }

 
deleteProduct(id: string) {
this.productService.deleteProduct(id);
}

}
