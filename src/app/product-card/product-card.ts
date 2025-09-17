import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Router, RouterModule } from '@angular/router';
import { CurrencyPipe } from '@angular/common';

@Component({
  selector: 'app-product-card',
  imports: [CurrencyPipe, RouterModule],
  templateUrl: './product-card.html',
  styleUrl: './product-card.css'
})
export class ProductCard {
  public hover: boolean = false;

  constructor(public router: Router) { }

  goToDetail(productId: number) {
    this.router.navigate(['/product-detail'], { queryParams: { product_id: productId } });
  }

  @Input() product_id!: number;
  @Input() product: any;

  @Output() addToCart = new EventEmitter<any>();

  onAddToCart() {
    if (!this.product) return;
    this.addToCart.emit({ ...this.product, qty: 1 });
  }
}
