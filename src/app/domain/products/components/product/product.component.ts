import { Component, EventEmitter, Input, Output } from '@angular/core';
import {MatButtonModule} from '@angular/material/button';
import {MatCardModule} from '@angular/material/card';
import {MatIconModule} from '@angular/material/icon';
import { Product } from '../../../shared/models/product.interface';
import { CommonModule } from '@angular/common';
import { LimitTextPipe } from '../../../shared/pipes/limit-text.pipe';

@Component({
  selector: 'app-product',
  standalone: true,
  imports: [CommonModule, MatButtonModule, MatCardModule, MatIconModule, LimitTextPipe],
  templateUrl: './product.component.html',
  styleUrl: './product.component.scss'
})
export class ProductComponent {

  @Input({required: true}) product!: Product;
  @Output() addToCart = new EventEmitter();

  addToCartHandler(): void {
    this.addToCart.emit(this.product);
  }

}
