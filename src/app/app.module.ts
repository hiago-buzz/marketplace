import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { ShoppingCartComponent } from './components/shooping-cart/shooping-cart.component';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ToastrModule } from 'ngx-toastr';
import { LoadingComponent } from './components/loading/loading.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NavbarComponent,
    ShoppingCartComponent,
    LoginComponent,
    RegisterComponent,
    LoadingComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserAnimationsModule, 
    ToastrModule.forRoot() 
  ],
  providers: [HttpClient],
  bootstrap: [AppComponent]
})
export class AppModule {
  constructor() {
   
  }
}
