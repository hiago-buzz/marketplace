import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ComponentService {
  navbar: boolean = false;
  header: boolean = false;
  constructor() { }

}
