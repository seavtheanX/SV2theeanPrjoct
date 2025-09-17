import { Component } from '@angular/core';
import { RouterOutlet, RouterLink, Router } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { CartService } from './service/cart-service';
import {ProductCard} from './product-card/product-card';
import { ProductService } from './service/product-service';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, RouterLink, FormsModule],
  templateUrl: './app.html',
  styleUrls: ['./app.css']
})
export class App {
  searchText: string = '';

  constructor(
    public cartService: CartService,
    private productService: ProductService,
    private router: Router
  ) {}

  searchProduct() {
    // search the product by name
    const result = this.productService.getProductsByPartialName(this.searchText);
    if (result.length > 0) {
      // go to product page or filter products
      this.router.navigate(['/product'], { queryParams: { search: this.searchText } });
    } else {
      // product not found → go to 404 page
      this.router.navigate(['/404']);
    }
  }
}
