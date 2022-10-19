import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Person } from '../shared/interfaces/person.interface';

@Component({
  selector: 'kta-listado',
  templateUrl: './listado.component.html',
  styleUrls: ['./listado.component.css']
})
export class ListadoComponent implements OnInit {

  @Input() listado:Person[] = [];
  @Output() datoSeleccionado = new EventEmitter();

  constructor() { }

  ngOnInit(): void {
  }

  seleccionar(dato:any){
    this.datoSeleccionado.emit(dato);
  }

}
