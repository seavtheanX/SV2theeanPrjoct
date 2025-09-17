import { Component, Input } from '@angular/core';
import { CurrencyPipe, DecimalPipe } from '@angular/common';
import { CartService } from '../service/cart-service';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-checkout',
  imports: [CurrencyPipe, RouterLink, DecimalPipe],
  templateUrl: './checkout.html',
  styleUrl: './checkout.css'
})
export class Checkout {
  @Input() product: any = [];
  cartItems: any[] = [];
  cartTotal: number = 0;

  constructor(public cartService: CartService) { }

  ngOnInit(): void {
    this.loadCart();
  }

  loadCart() {
    this.cartItems = this.cartService.getItem();
    this.cartTotal = this.cartService.getTotal();
  }
}
