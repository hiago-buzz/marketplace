import { Component, OnInit } from '@angular/core';
import { ComponentService } from 'src/app/services/component/component.service';
import { AuthUserService } from 'src/app/services/authUser/auth-user.service';
import { ActivatedRoute, Router } from '@angular/router';


@Component({
  selector: 'app-perfil',
  templateUrl: './perfil.component.html',
  styleUrls: ['./perfil.component.sass']
})
export class PerfilComponent implements OnInit {

  userId: number

  constructor(
    public component: ComponentService,
    private auth: AuthUserService,
    private param: ActivatedRoute,
    private router: Router
  ) {
    this.component.header = true,
      this.param.params.subscribe(params => this.userId = params['id'])
  }


  ngOnInit(): void {
    this.validUser()
    console.log(this.userId)
  }

  ngOnDestroy(): void {
    this.component.header = false
  }

  logout() {
    this.auth.logout();
  }

  validUser() {
    let user: any = this.auth.validSession();
    if(user){
      if(user.id === this.userId){
        console.log(user)
      }
    }else{
      console.log(user)
      // this.router.navigate(['login'])
    }
  }
}
