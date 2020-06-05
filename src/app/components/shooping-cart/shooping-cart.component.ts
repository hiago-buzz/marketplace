import { Component, OnInit } from '@angular/core';
import { ShoppingCartService } from 'src/app/services/shopping-cart/shopping-cart.service';

@Component({
  selector: 'app-shooping-cart',
  templateUrl: './shooping-cart.component.html',
  styleUrls: ['./shooping-cart.component.sass']
})
export class ShoppingCartComponent implements OnInit {

  constructor(public shoppingService: ShoppingCartService) { }

  ngOnInit(): void {

  }

  openCart(): void {
    document.querySelector("#modalCart").classList.remove("hidden");
  }

  closeCart(): void {
    document.querySelector("#modalCart").classList.add("hidden");
  }

  deleteItem(id: number){
    this.shoppingService.trashItem(id)
  }
}