import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  constructor() {
    this.cart = JSON.parse(localStorage.getItem('carts') ?? '[]');
    
   }
  private cart: any =[];
  addItem(item: any, quantity: number = 1) {
  let current_cart: any[] = JSON.parse(localStorage.getItem('carts') ?? '[]');

  let dpl_index: number = current_cart.findIndex(
    (obj: any) => obj.name === item.name
  );

  if (dpl_index > -1) {
    current_cart[dpl_index].qty += item.qty;
  } else {
    current_cart.push({ ...item });
  }

  localStorage.setItem('carts', JSON.stringify(current_cart));
  this.cart = current_cart; // keep local copy in sync
}



  getItem():any{
    return JSON.parse(localStorage.getItem('carts') ?? '[]');
  }

  getTotal(): any {
  let total = 0;
  let current_cart: any[] = JSON.parse(localStorage.getItem('carts') ?? '[]');

  current_cart.forEach((item: { price: number; qty: number; }) => {
    total += item.price * item.qty;
  });

  return total;
}

 removeItem(item: any){
  let current_cart: any[] = JSON.parse(localStorage.getItem('carts') ?? '[]');

  // remove only the first match (not all)
  let index = current_cart.findIndex((obj: any) => obj.name === item.name);

  if (index > -1) {
    current_cart.splice(index, 1); // remove that one product
  }

  localStorage.setItem('carts', JSON.stringify(current_cart));
  this.cart = current_cart; // update local copy too
}


  incrementQty(item: any) {
  let current_cart: any[] = JSON.parse(localStorage.getItem('carts') ?? '[]');

  let index = current_cart.findIndex((obj: any) => obj.name === item.name);

  if (index > -1) {
    current_cart[index].qty++;
    localStorage.setItem('carts', JSON.stringify(current_cart));
    this.cart = current_cart; // keep in sync
  }
}

decrementQty(item: any) {
  let current_cart: any[] = JSON.parse(localStorage.getItem('carts') ?? '[]');

  let index = current_cart.findIndex((obj: any) => obj.name === item.name);

  if (index > -1) {
    if (current_cart[index].qty > 1) {
      current_cart[index].qty--;
    } else {
      current_cart.splice(index, 1); // 👈 remove item if qty hits 0
    }
    localStorage.setItem('carts', JSON.stringify(current_cart));
    this.cart = current_cart;
  }
}

}
