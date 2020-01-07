import { Component } from '@angular/core';
import { Configuracion } from './models/Configuracion';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  public config;

  constructor() {
    this.config = Configuracion
  }
}
