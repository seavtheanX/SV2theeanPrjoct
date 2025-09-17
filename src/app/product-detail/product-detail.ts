import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CartService } from '../service/cart-service';
import { CurrencyPipe } from '@angular/common';
import { FormsModule } from '@angular/forms';

declare const axios: any;
declare const $: any;
declare const Swal: any;

@Component({
  selector: 'app-product-detail',
  imports: [CurrencyPipe,FormsModule],
  templateUrl: './product-detail.html',
  styleUrl: './product-detail.css'
})
export class ProductDetail {
  public product: any = {};
  public quantity: number = 1; // default quantity

  constructor(
    private route: ActivatedRoute,
    public cartService: CartService,
  ) {}

  ngOnInit(): void {
    const product_id = this.route.snapshot.queryParamMap.get('product_id');
    let vm = this;
    let url = 'https://sv-gen-api.bczin2zin2takeo.us/api/product_detail?id=' + product_id;

    $.LoadingOverlay('show');
    axios.get(url)
      .then(function (response: any) {
        vm.product = response.data;
        console.log(vm.product);
      })
      .catch(function (error: any) {
        console.log(error);
        vm.product = null ;
      })
      .finally(function () {
        $.LoadingOverlay('hide');
      });

    console.log('product_id:', product_id);
  }

  onAddToCart() {
    if (!this.product) return;
    this.cartService.addItem({
      ...this.product,
      qty: this.quantity
    });
    Swal.fire({
      position: "center",
      icon: "success",
      title: "Added to cart successful",
      showConfirmButton: false,
      timer: 1500
    });
  }

}
