import { Component } from '@angular/core';
import { CartService } from '../service/cart-service';
import { CommonModule, CurrencyPipe } from '@angular/common';
import { DecimalPipe } from '@angular/common';
import { RouterModule } from '@angular/router';


declare const Swal:any

@Component({
  selector: 'app-cart',
  imports: [CurrencyPipe, DecimalPipe, CommonModule,
    RouterModule],
  templateUrl: './cart.html',
  styleUrl: './cart.css'
})
export class Cart {
  constructor(public cartService: CartService){
  }
  removeItem(item: any) {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, remove it!"
    }).then((result: any) => {
      if (result.isConfirmed) {
        this.cartService.removeItem(item);
        Swal.fire({
          title: "Removed!",
          text: "Your item has been deleted.",
          icon: "success"
        });
      }
    });
  }

  decreaseQty(item: any) {
    this.cartService.decrementQty(item);
  }

  increaseQty(item: any) {
    this.cartService.incrementQty(item);
  }
}

