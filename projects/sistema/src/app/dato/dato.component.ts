import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'kta-dato',
  templateUrl: './dato.component.html',
  styleUrls: ['./dato.component.css']
})
export class DatoComponent implements OnInit {

  @Input() dato:any = {}

  @Output() datoSeleccionado = new EventEmitter();

  constructor() { }

  ngOnInit(): void {
  }

  seleccionar(){
    this.datoSeleccionado.emit(this.dato)
  }

}
