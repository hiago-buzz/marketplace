import { Component, OnInit } from '@angular/core';
import { ComponentService } from 'src/app/services/component/component.service';
import { RequestService } from 'src/app/services/request/request.service';
import { FormControl, FormGroup } from '@angular/forms';
import { Address } from '../../interfaces/address';
import { ToastrService } from 'ngx-toastr';
import { AuthUserService } from 'src/app/services/authUser/auth-user.service';
@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.sass']
})
export class RegisterComponent implements OnInit {

  formRegister = new FormGroup({
    name: new FormControl(''),
    email: new FormControl(''),
    password: new FormControl(''),
    cep: new FormControl(''),
    address: new FormControl(''),
    number: new FormControl(''),
    district: new FormControl(''),
    city: new FormControl(''),
    state: new FormControl(''),

  })
  constructor(
    public component: ComponentService,
    private http: RequestService,
    private toastr: ToastrService,
    private authUser: AuthUserService
  ) {
    this.component.navbar = true
  }

  ngOnInit(): void {
  }

  ngOnDestroy(): void {
    this.component.navbar = false
  }

  getAddress() {
    var newCep = this.formRegister.controls.cep.value.replace(/\D/g, '')

    this.http.getter(`https://viacep.com.br/ws/${newCep}/json/`).subscribe(
      (data: Address) => {
        this.formRegister.controls.address.setValue(data.logradouro);
        this.formRegister.controls.district.setValue(data.bairro);
        this.formRegister.controls.city.setValue(data.localidade);
        this.formRegister.controls.state.setValue(data.uf);
      },
      (error: any) => {
        console.log("erro", error)
      })
  }

  registerUser() {
    if (this.authUser.createUser(this.formRegister.value)) {
      this.toastr.success("Usuario cadastrado com sucesso");
    } else {
      this.toastr.error("Ooops! Email ja cadastrado, tente novamente.");
    }
  }
}
