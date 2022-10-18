import { Component } from '@angular/core';

@Component({
  selector: 'kta-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  changeView:boolean = true;
  tipoListado?:boolean = undefined;
  datos : Object[] = [];

  medicos : Object[] = [
    {nombre: 'Alvaro', apellido:'González'},
    {nombre: 'Carlos', apellido:'López'},
    {nombre: 'Laura', apellido:'Gutierrez'},
    {nombre: 'Ernesto', apellido:'Ramírez'},
    {nombre: 'Facundo', apellido: 'Pérez'}
  ]

  pilotos : Object[] = [
    {nombre: 'Fernando', apellido:'Fernández'},
    {nombre: 'Karen', apellido:'Santiago'},
    {nombre: 'Elizabeth', apellido:'Olsen'},
    {nombre: 'Nicol', apellido:'Martinez'}
  ]

  ocultarLogin(ocultar:any){
    this.changeView = !ocultar;    
  }

  tipoInformacion(option:any){
    if(option === 'medico'){
      this.datos = this.medicos;
    } else{
      this.datos = this.pilotos;
    }    
  }

  lanzarAlert(dato:any){
    alert(`Ha seleccionado a ${dato.nombre} ${dato.apellido}`);
  }
}
