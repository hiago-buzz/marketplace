import { Injectable } from '@angular/core';
import { ItemCart } from '../../interfaces/shoppingCart';

@Injectable({
  providedIn: 'root'
})

export class ShoppingCartService {

  itemsCart = [];

  constructor() { }

  pushItem(item: ItemCart): void {
    !this.itemsCart.includes(item) ? this.itemsCart.push(item) : ""
  }

  trashItem(id: number): void {
    for (let i = 0; i < this.itemsCart.length; i++) {
      if (this.itemsCart[i].id == id) {
          this.itemsCart.splice(i, 1)
        console.log(this.itemsCart)
      }
    }
  }
}
