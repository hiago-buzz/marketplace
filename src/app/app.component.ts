import { Component } from '@angular/core';
import { ComponentService } from './services/component/component.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass']
})
export class AppComponent {
  title = 'marketplace';
  constructor(public component: ComponentService) {}
}
