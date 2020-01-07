import { Component, OnInit, DoCheck, OnDestroy } from '@angular/core';

@Component({
  selector: 'videojuego',
  templateUrl: './videojuego.component.html'
})
export class VideojuegoComponent implements OnInit, DoCheck, OnDestroy {
  public title: string;
  public list: Array<string>

  public videojuegosVisible: boolean;
  public buttonText: string;

  constructor() {
    this.title = 'Componente de Videojuego';
    this.list = ['GTA V', 'God of War', 'Hollow Knight', 'Sekiro', 'Super Mario Bros', 'Crash Bandicoot']

    this.videojuegosVisible = true;
    this.buttonText = 'Ocultar';

    console.log('Se ha cargado el componente: videojuego.component');
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

  ngOnInit() {
    console.log('OnInit ejecutado');
  }

  ngDoCheck() {
    console.log('DoCheck ejectuado');
  }

  ngOnDestroy() {
    console.log('OnDestroy ejecutado');
  }

  cambiarTitulo() {
    var newTitle = (<HTMLInputElement>document.querySelector('input[name="title"]')).value.trim();

    if(newTitle != "")
      this.title = newTitle;
  }

  onBlur() {
    (<HTMLInputElement>document.querySelector('input[name="title"]')).style.border = '2px solid green';
  }
}
