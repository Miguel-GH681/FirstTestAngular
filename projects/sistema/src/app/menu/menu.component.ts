import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'kta-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {

  @Output() onTipoListado = new EventEmitter();
  @Input() listado:object[] = [];
  @Output() dato = new EventEmitter();

  constructor() { }

  ngOnInit(): void {
  }

  opcion(opcion:string){
    this.onTipoListado.emit(opcion)
  }

  seleccionar(dato:any){
    this.dato.emit(dato);
  }

}
