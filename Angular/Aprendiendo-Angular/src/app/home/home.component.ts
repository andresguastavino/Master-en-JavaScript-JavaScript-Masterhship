import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  public title: string = 'Home';
  public val1: number = 0;
  public val2: number = 0;
  public fecha: any;

  constructor() { }

  ngOnInit() {
    this.fecha = new Date()
  }

}
