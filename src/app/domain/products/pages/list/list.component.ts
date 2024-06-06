import { Component, inject, signal } from '@angular/core';
import { ProductComponent } from '../../components/product/product.component';
import { ProductService } from '../../../shared/services/product.service';
import { Product } from '../../../shared/models/product.interface';
import { Subscription } from 'rxjs';
import { CartService } from '../../../shared/services/cart.service';

@Component({
  selector: 'app-list',
  standalone: true,
  imports: [ProductComponent],
  templateUrl: './list.component.html',
  styleUrl: './list.component.scss'
})
export class ListComponent {

  private _productService = inject(ProductService);
  private _cartService = inject(CartService);


  subs!: Subscription;

  products = signal<Product[]>([]);

  ngOnInit(): void {
    this.getProducts();
    
  }
  ngOnDestroy(): void {
    this.subs.unsubscribe();
  }

  private getProducts(): void {
    this.subs = this._productService.getProducts().subscribe({
      next: (datos) => {
        this.products.set(datos);
      },
      error(err) {
        console.log(err)
      },
    });
  }

  addToCart(product: Product): void {
    this._cartService.addToCart(product);
  }

}
