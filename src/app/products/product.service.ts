import { Injectable } from '@angular/core';

import { AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument } from 'angularfire2/firestore';

import { Product } from './product-model';

import { Observable } from 'rxjs/Observable';
import { map } from 'rxjs/operators';

// interface NewProduct {
//   title: string;
//   description: string;
//   price: string;
// }

@Injectable()
export class ProductService {

  productCollection: AngularFirestoreCollection<Product>;
  productDocument:   AngularFirestoreDocument<Product>;


}
