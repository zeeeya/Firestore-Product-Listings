import { Injectable } from '@angular/core';

import { AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument } from 'angularfire2/firestore';

import { Product } from './product-model';

import { Observable } from 'rxjs/Observable';
import { map } from 'rxjs/operators';

interface NewProduct {
  name: string;
  description: string;
  price: string;
  time: number;
}

@Injectable()
export class ProductService {

  productsCollection: AngularFirestoreCollection<Product>;
  productDocument:   AngularFirestoreDocument<Node>;

  constructor(private afs: AngularFirestore) {
    this.productsCollection = this.afs.collection('products', (ref) => ref.orderBy('time', 'desc').limit(5));
  }

  getData(): Observable<Product[]> {
    return this.productsCollection.valueChanges();
  }

  getSnapshot(): Observable<Product[]> {
    // ['added', 'modified', 'removed']
    return this.productsCollection.snapshotChanges().map((actions) => {
      return actions.map((a) => {
        const data = a.payload.doc.data() as Product;
        return { id: a.payload.doc.id, name:data.name, description:data.description, price:data.price, time: data.time };
      });
    });
  }

  getProduct(id: string) {
    return this.afs.doc<Product>(`products/${id}`);
  }

  create(name: string, description: string, price: string) {
    const product = {
      name,
      description,
      price,
      time: new Date().getTime(),
    };
    return this.productsCollection.add(product);
  }

  updateProduct(id: string, data: Partial<Product>) {
    return this.getProduct(id).update(data);
  }

  deleteProduct(id: string) {
    return this.getProduct(id).delete();
  }
}
