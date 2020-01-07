import { Component, OnInit, DoCheck, OnDestroy } from '@angular/core';

@Component({
  selector: 'videojuego',
  templateUrl: './videojuego.component.html'
})
export class VideojuegoComponent implements OnInit, DoCheck, OnDestroy {
  public title: string;
  public list: Array<string>

  constructor() {
    this.title = 'Componente de Videojuego';
    this.list = ['GTA V', 'God of War', 'Hollow Knight', 'Sekiro', 'Super Mario Bros', 'Crash Bandicoot']

    console.log('Se ha cargado el componente: videojuego.component');
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
    var newTitle = document.querySelector('input[name="title"]').value.trim();

    if(newTitle != "")
      this.title = newTitle;
  }
}
