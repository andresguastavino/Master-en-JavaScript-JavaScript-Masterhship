import { Component, OnInit } from '@angular/core';
import { ContactoUsuario } from '../models/ContactoUsuario';

@Component({
  selector: 'contacto',
  templateUrl: './contacto.component.html',
  styleUrls: ['./contacto.component.css']
})
export class ContactoComponent implements OnInit {
  public title: string = 'Contacto'
  public contactoUsuario: ContactoUsuario;

  constructor() {
    this.contactoUsuario = new ContactoUsuario('','','',0,'','');
  }

  ngOnInit() {
  }

  onSubmit(form) {
    console.log(this.contactoUsuario);
    form.reset();
  }

}
