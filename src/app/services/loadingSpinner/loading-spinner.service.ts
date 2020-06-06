import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LoadingSpinnerService {
  status: boolean = true
  constructor() { }

  open(){
    this.status = false
  }

  close(){
    this.status = true
  }
}
