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

  // addHeartToNote(val: number) {
  //   if (this.note.id) {
  //     this.noteService.updateNote(this.note.id, { hearts: val + 1 });
  //   } else {
  //     console.error('Note missing ID!');
  //   }
  // }

  // deleteNote(id: string) {
  //   this.noteService.deleteNote(id);
  // }

}
