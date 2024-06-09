import { Component, Input, inject, signal } from '@angular/core';
import { ProductService } from '../../../shared/services/product.service';
import { Product } from '../../../shared/models/product.interface';
import { Subscription } from 'rxjs';
import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'app-product-detail',
  standalone: true,
  imports: [MatButtonModule],
  templateUrl: './product-detail.component.html',
  styleUrl: './product-detail.component.scss'
})
export class ProductDetailComponent {

  @Input() id?: number;

  private _productService = inject(ProductService);

  sub?: Subscription;
  product = signal<Product | null>(null);

  ngOnInit(): void {
    this.getOneProduct();
  }
  ngOnDestroy(): void {
    this.sub?.unsubscribe();
  }

  private getOneProduct(): void {
    if(this.id) {
      this.sub = this._productService.getOneProduct(this.id).subscribe({
        next: (data) => {
          this.product.set(data);
        },
        error(err) {
          console.log(err)
        },
      });
    }
  }

}
