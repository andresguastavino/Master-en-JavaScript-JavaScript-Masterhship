import { Component, OnInit } from '@angular/core';
import { PeticionesService } from '../services/peticiones.service';

@Component({
  selector: 'externo',
  templateUrl: './externo.component.html',
  styleUrls: ['./externo.component.css'],
  providers: [ PeticionesService ]
})
export class ExternoComponent implements OnInit {
  public title: string = "Peticion externa"
  public user: any;
  public userId: number;

  public new_user: any;
  public usuario_guardado: any;

  constructor(
    private _peticionesService: PeticionesService
  ) {
    this.userId = 1;
    this.new_user = {
      'name': '',
      'job': ''
    };
    this.usuario_guardado = '';
  }

  ngOnInit() {
    this.cargarUsuario();
  }

  cargarUsuario() {
    this.user = '';

    this._peticionesService.getUser(this.userId).subscribe(
      result => {
        console.log(result);
        this.user = result.data;
      },
      error => {
        console.log(<any>error);
        alert('Error. Posiblemente ingreso un ID de usuario invalido')
      }
    )
  }

  onSubmit(form) {
    this._peticionesService.addUser(this.new_user).subscribe(
      result => {
        console.log(result);

        this.usuario_guardado = result;
        form.reset();
      },
      error => {
        console.log(<any>error);
      }
    );

  }
}
