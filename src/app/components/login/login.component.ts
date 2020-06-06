import { Component, OnInit } from '@angular/core';
import { ComponentService } from 'src/app/services/component/component.service';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { AuthUserService } from 'src/app/services/authUser/auth-user.service';
import { ToastrService } from 'ngx-toastr';
import { LoadingSpinnerService } from 'src/app/services/loadingSpinner/loading-spinner.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.sass']
})
export class LoginComponent implements OnInit {

  formLogin = new FormGroup({
    email: new FormControl('', [Validators.required]),
    password: new FormControl('', [Validators.required]),
  })

  constructor(
    public component: ComponentService,
    private auth: AuthUserService,
    private toastr: ToastrService,
    private loading: LoadingSpinnerService,
    private router: Router
  ) {
    this.component.navbar = true
    this.component.header = true
  }

  ngOnInit(): void {

  }

  ngOnDestroy(): void {
    this.component.navbar = false
    this.component.header = false
  }

  login() {
    this.loading.open();
    if (!this.formLogin.valid) {
      this.loading.close();
      this.toastr.warning("Preencha todos os campos para continuar");
    } else {
      let user: any = this.auth.login(this.formLogin.value);
      if (user) {
        this.loading.close();
        this.router.navigate([`perfil/${user.id}`])
      } else {
        this.loading.close();
        this.toastr.error("Oops! Email ou senha invalido.");
      }
    }
  }
}
