import { Component } from '@angular/core';
import { ProductCard } from "../product-card/product-card";
import { ProductService } from '../service/product-service';
import { CartService } from '../service/cart-service';
declare const Swal:any;

@Component({
  selector: 'app-product',
  imports: [ProductCard],
  templateUrl: './product.html',
  styleUrl: './product.css'
})
export class Product {
  constructor(public cartService: CartService, public products:ProductService){

  }

  onAddToCart(product:any){

    this.cartService.addItem(product)
    Swal.fire({
      position: "center",
      icon: "success",
      title: "Added to cart successful",
      showConfirmButton: false,
      timer: 1500
    });
  }
}
