import { Component, OnInit } from '@angular/core';

import { ProductService } from '../product.service';

import { Product } from '../product-model';

import { Observable } from 'rxjs/Observable';

@Component({
  selector: 'products-list',
  templateUrl: './products-list.component.html',
  styleUrls: ['./products-list.component.scss'],
})
export class ProductsListComponent implements OnInit {

  products: Observable<Product[]>;
  name: string;
  description: string;
  price: string;

  constructor(private productService: ProductService) { }

  ngOnInit() {
    //this.products = this.productService.getData()
    this.products = this.productService.getSnapshot();
  }

  createProduct() {
    this.productService.create(this.name, this.description, this.price);
    this.name = '';
    this.description = '';
    this.price = '';
   
  }

}
