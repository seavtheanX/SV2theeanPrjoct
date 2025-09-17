import { Home } from './home/home';
import { Product } from './product/product';
import { Cart } from './cart/cart';
import { ProductDetail } from './product-detail/product-detail';
import { Checkout } from './checkout/checkout';
import { Error404 } from './error404/error404';

export const routes = [
  { path: '', component: Home },
  { path: 'home', component: Home },
  { path: 'product', component: Product },
  { path: 'cart', component: Cart },
  { path: 'product-detail', component: ProductDetail },
  { path: 'checkout', component: Checkout },
  { path: '**', component: Error404 },
];
