import { Component, inject, signal } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatToolbarModule } from '@angular/material/toolbar';
import { RouterLinkActive, RouterLinkWithHref } from '@angular/router';
import { CartService } from '../../services/cart.service';
import { CommonModule } from '@angular/common';
import { LimitTextPipe } from '../../pipes/limit-text.pipe';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [
    CommonModule,
    MatToolbarModule,
    MatButtonModule,
    MatIconModule,
    RouterLinkWithHref,
    RouterLinkActive,
    LimitTextPipe
  ],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss',
})
export class HeaderComponent {

  private _cartService = inject(CartService);

  cart = this._cartService.cart;
  total = this._cartService.total;
  isActiveCart = signal<boolean>(false);

  toggleMenu(): void {
    this.isActiveCart.update((value: boolean) => !value);
  }
}
