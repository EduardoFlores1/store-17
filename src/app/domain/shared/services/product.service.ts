import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { Product } from '../models/product.interface';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  private URL: string = 'https://fakestoreapi.com/products';

  private _http = inject(HttpClient);

  getProducts() {
    return this._http.get<Product[]>(this.URL);
  }

  getProductsByCategory(categorySelected?: string) {
    if(categorySelected) {
      return this._http.get<Product[]>(`${this.URL}/category/${categorySelected}`);
    }else {
      return this._http.get<Product[]>(this.URL);
    }
  }
}
