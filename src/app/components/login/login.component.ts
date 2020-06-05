import { Component, OnInit } from '@angular/core';
import { ComponentService } from 'src/app/services/component/component.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.sass']
})
export class LoginComponent implements OnInit {

  constructor(public component: ComponentService) { 
    this.component.navbar = true
  }

  ngOnInit(): void {
    
  }

  ngOnDestroy(): void{
    this.component.navbar = false
  }

}
