import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  items=[];

  addItem(producto) {
    return this.items.push(producto);
  }
  getItems() {
    return this.items;
  }
  clearCart() {
    this.items=[]
    return this.items;
  }
}
