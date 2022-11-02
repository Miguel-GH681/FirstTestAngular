import { Component } from '@angular/core';
import { Person } from './shared/interfaces/person.interface';

type TPerson = {
  nombre: string,
  lastname: string
}

@Component({
  selector: 'kta-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  changeView:boolean = true;
  viewListado?:boolean = undefined;
  tipoListado?:boolean = undefined;
  datos : Person[] = [];

  fotoPerfil : string = 'https://i0.wp.com/lanoticia.com/wp-content/uploads/2021/09/venom-simbionte-Marvel.jpg?fit=1200%2C675&ssl=1';

  medicos : Person[] = [
    {nombre: 'Alvaro', apellido:'González'},
    {nombre: 'Carlos', apellido:'López'},
    {nombre: 'Laura', apellido:'Gutierrez'},
    {nombre: 'Ernesto', apellido:'Ramírez'},
    {nombre: 'Facundo', apellido: 'Pérez'}
  ]

  pilotos : Array<Person> = [
    {nombre: 'Fernando', apellido:'Fernández'},
    {nombre: 'Karen', apellido:'Santiago'},
    {nombre: 'Elizabeth', apellido:'Olsen'},
    {nombre: 'Nicol', apellido:'Martinez'}
  ]

  enfermeros: Array<Partial<Person>> = [
    {nombre: 'Juan'}
  ]

  ocultarLogin(){
    this.changeView = !this.changeView;    
  }

  tipoInformacion(option:number){
    this.viewListado = true;
    if(option === 1){
      this.datos = this.medicos;
    } else{
      this.datos = this.pilotos;
    }    
  }

  lanzarAlert(dato:any){
    alert(`Ha seleccionado a ${dato.nombre} ${dato.apellido}`);
  }
}
