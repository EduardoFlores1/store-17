import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CategoriaService {

  private _http = inject(HttpClient);

  private URL: string = 'https://fakestoreapi.com/products/categories';

  getCategories() {
    return this._http.get<string[]>(this.URL);
  }
}
