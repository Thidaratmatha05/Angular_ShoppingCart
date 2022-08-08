import { Injectable } from '@angular/core';
import { Product } from './products';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  items: Product[] = [];
  totalprice = 0;

  constructor() { }

  addToCart(product: Product) {
   this.items.push(product);
   this.totalprice += product.price;
   
  }

  getItems() {
    return this.items;
  }

  clearCart() {
    this.items = [];
    return this.items;
  }

  getTotalPrice() {
    return this.totalprice;
  }
}
