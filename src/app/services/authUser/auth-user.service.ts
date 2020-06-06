import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthUserService {

  authorized: boolean = false;

  constructor() { }

  private generateKey() {
    return Math.floor(Math.random() * 65536);
  }

  createUser(data) {
    let user: any = JSON.parse(localStorage.getItem(data.email));
    console.log(user)
    if (user !== null) {
      return false
    } else {
      data = Object.assign(data, { id: this.generateKey() })
      localStorage.setItem(data.email, JSON.stringify(data))
      return true
    }
  }

  updaterUser(data) {
    var validUser = false
    for (var i = 0; i < localStorage.length; i++) {
      if (data.email == localStorage.key(i)) {
        validUser = true
      }
    }

    if (validUser) {
      localStorage.setItem(data.email, data)
      return true
    } else {
      return false
    }
  }

  login(data) {
    let user: any = localStorage.getItem(data.email);

    if (user != "") {
      user = JSON.parse(user);
      if (data.email === user.email && data.password === user.password) {
        this.authorized = true
        return user;
      } else {
        return false
      }
    } else {
      return false
    }

  }
}
