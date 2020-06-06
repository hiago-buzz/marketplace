import { Component, OnInit } from '@angular/core';
import { ComponentService } from 'src/app/services/component/component.service';
import { RequestService } from 'src/app/services/request/request.service';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Address } from '../../interfaces/address';
import { ToastrService } from 'ngx-toastr';
import { AuthUserService } from 'src/app/services/authUser/auth-user.service';
import { LoadingSpinnerService } from 'src/app/services/loadingSpinner/loading-spinner.service';
@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.sass']
})
export class RegisterComponent implements OnInit {

  formRegister = new FormGroup({
    name: new FormControl('', [Validators.required]),
    email: new FormControl('', [Validators.required]),
    password: new FormControl('', [Validators.required]),
    cep: new FormControl('', [Validators.required]),
    address: new FormControl('', [Validators.required]),
    number: new FormControl('', [Validators.required]),
    district: new FormControl('', [Validators.required]),
    city: new FormControl('', [Validators.required]),
    state: new FormControl('', [Validators.required]),

  })
  constructor(
    public component: ComponentService,
    private http: RequestService,
    private toastr: ToastrService,
    private authUser: AuthUserService,
    private loading: LoadingSpinnerService
  ) {
    this.component.navbar = true
  }

  ngOnInit(): void {
  }

  ngOnDestroy(): void {
    this.component.navbar = false
  }

  getAddress() {
    this.loading.open();
    var newCep = this.formRegister.controls.cep.value.replace(/\D/g, '');

    this.http.getter(`https://viacep.com.br/ws/${newCep}/json/`).subscribe(
      (data: Address) => {
        this.formRegister.controls.address.setValue(data.logradouro);
        this.formRegister.controls.district.setValue(data.bairro);
        this.formRegister.controls.city.setValue(data.localidade);
        this.formRegister.controls.state.setValue(data.uf);
        this.loading.close()
      },
      (error: any) => {
        this.formRegister.controls.cep.setValue('');
        this.formRegister.controls.address.setValue('');
        this.formRegister.controls.district.setValue('');
        this.formRegister.controls.city.setValue('');
        this.formRegister.controls.state.setValue('');
        this.loading.close();
        this.toastr.warning("Insira um cep valido.");
      })
  }

  registerUser() {
    this.loading.open();
    if (!this.formRegister.valid) {
      this.loading.close();
      this.toastr.error("Preencha todos os campos para continuar");
    } else {
      if (this.authUser.createUser(this.formRegister.value)) {
        this.loading.close();
        this.toastr.success("Usuario cadastrado com sucesso");
      } else {
        this.loading.close();
        this.toastr.error("Ooops! Email ja cadastrado, tente novamente.");
      }
    }

  }
}
