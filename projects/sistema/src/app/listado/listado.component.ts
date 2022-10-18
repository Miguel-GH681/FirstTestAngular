import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'kta-listado',
  templateUrl: './listado.component.html',
  styleUrls: ['./listado.component.css']
})
export class ListadoComponent implements OnInit {

  @Input() listado:Object[] = [];
  @Output() datoSeleccionado = new EventEmitter();

  constructor() { }

  ngOnInit(): void {
  }

  seleccionar(dato:any){
    this.datoSeleccionado.emit(dato);
  }

}
