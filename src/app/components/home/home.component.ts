import { Component, OnInit } from '@angular/core';
import { ItemCart } from '../../interfaces/shoppingCart';
import { ShoppingCartService } from 'src/app/services/shopping-cart/shopping-cart.service';
import Products from '../../../assets/json/product.json';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.sass']
})
export class HomeComponent implements OnInit {

  products = Products;

  constructor(
    public shoppingService: ShoppingCartService
  ) { }

  
  ngOnInit(): void {

  }

  pushToCart(item: ItemCart) {
    this.shoppingService.pushItem(item);
  }

  removeItem(id: number){
    this.shoppingService.trashItem(id)
  }
}
