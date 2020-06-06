import { Component, OnInit } from '@angular/core';
import { ShoppingCartService } from 'src/app/services/shopping-cart/shopping-cart.service';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { AuthUserService } from 'src/app/services/authUser/auth-user.service';


@Component({
  selector: 'app-shooping-cart',
  templateUrl: './shooping-cart.component.html',
  styleUrls: ['./shooping-cart.component.sass']
})
export class ShoppingCartComponent implements OnInit {

  constructor(
    public shoppingService: ShoppingCartService,
    private router: Router,
    public toast: ToastrService,
    private auth: AuthUserService
  ) { }

  ngOnInit(): void {

  }

  openCart(): void {
    document.querySelector("#modalCart").classList.remove("hidden");
  }

  closeCart(): void {
    document.querySelector("#modalCart").classList.add("hidden");
  }

  deleteItem(id: number) {
    this.shoppingService.trashItem(id)
  }

  checkout() {
    if (this.shoppingService.itemsCart.length > 0) {
      let user: any = this.auth.validSession();
      if(user){
        this.router.navigate([`perfil/${user.id}`])
      }else{
        this.router.navigate(['login'])
      }
      
    }else{
      this.toast.warning("Insira algo no carrinho para continuar");
    }
  }
}