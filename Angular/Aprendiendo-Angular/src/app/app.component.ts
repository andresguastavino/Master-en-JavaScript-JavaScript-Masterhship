import { Component } from '@angular/core';
import { Configuracion } from './models/Configuracion';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  public videojuegosVisible: boolean;
  public buttonText: string;
  public config;

  constructor() {
    this.config = Configuracion
    this.videojuegosVisible = true;
    this.buttonText = 'Ocultar';
  }

  videojuegosController() {
    if(this.videojuegosVisible) {
      this.videojuegosVisible = false;
      this.buttonText = 'Mostrar';
    } else {
      this.videojuegosVisible = true;
      this.buttonText = 'Ocultar';
    }
  }
}
