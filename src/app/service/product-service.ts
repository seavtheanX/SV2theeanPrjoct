import { Injectable } from '@angular/core';
declare const axios: any;
declare const $: any;

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  private products: any[] = [];
  private url: string = 'https://sv-gen-api.bczin2zin2takeo.us/api/product';

  constructor() {
    let vm = this;
    $.LoadingOverlay("show");
    axios.get(this.url)
      .then(function (response: any) {
        vm.products = response.data;
      })
      .catch(function (error: any) {
        console.log(error);
      })
      .finally(function () {
        $.LoadingOverlay("hide");
      });
  }

  getProducts() {
    return this.products;
  }
  getProductByName(name: string) {
    return this.products.find(p => p.name.toLowerCase() === name.toLowerCase());
  }

  // New method to search by product name
  getProductsByPartialName(name: string) {
  return this.products.filter(p => p.name.toLowerCase().includes(name.toLowerCase()));
}

}