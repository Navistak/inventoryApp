import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Product } from '../model/product';

@Injectable({
  providedIn: 'root',
})
export class ProductsService {
  constructor(private http: HttpClient) {}

  saveProduct(product: Product) {
   //return this.http.post('http://localhost:8080/Save_product', product);
     return this.http.post('http://localhost:3000/products', product);
  }

  getAllProduct() {
     return this.http.get('http://localhost:3000/products');
    // return this.http.get('http://localhost:8080/View_Product');
  }

  updateProduct(product: Product) {
    return this.http.put('http://localhost:3000/products/' + product.id, product);
  }
  deleteProduct(id: any) {
    return this.http.delete('http://localhost:3000/products/' + id);
  }
}
