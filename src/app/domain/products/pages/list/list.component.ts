import { Component, Input, inject, signal } from '@angular/core';
import { ProductComponent } from '../../components/product/product.component';
import { ProductService } from '../../../shared/services/product.service';
import { Product } from '../../../shared/models/product.interface';
import { Subscription } from 'rxjs';
import { CartService } from '../../../shared/services/cart.service';
import { CategoriaService } from '../../../shared/services/categoria.service';
import {MatRadioModule} from '@angular/material/radio';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-list',
  standalone: true,
  imports: [ProductComponent, MatRadioModule, RouterLink],
  templateUrl: './list.component.html',
  styleUrl: './list.component.scss'
})
export class ListComponent {

  @Input() category_name?: string;

  private _productService = inject(ProductService);
  private _categoryService = inject(CategoriaService);
  private _cartService = inject(CartService);


  subs: Subscription = new Subscription;

  products = signal<Product[]>([]);
  categories = signal<string[]>([]);

  categorySelected = signal<string>('All');

  ngOnInit(): void {
    this.getCategories();
  }

  ngOnChanges(): void {
    this.getProducts();
  }
  ngOnDestroy(): void {
    this.subs.unsubscribe();
  }

  private getProducts(): void {
    this.subs.add(this._productService.getProductsByCategory(this.category_name).subscribe({
      next: (datos) => {
        this.products.set(datos);
      },
      error(err) {
        console.log(err)
      },
    }));
  }

  private getCategories(): void {
    this.subs.add(this._categoryService.getCategories().subscribe({
      next: (datos) => {
        this.categories.set(datos);
      },
      error(err) {
        console.log(err)
      },
    }));
  }

  addToCart(product: Product): void {
    this._cartService.addToCart(product);
  }

}
