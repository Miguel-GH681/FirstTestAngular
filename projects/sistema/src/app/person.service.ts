import { Injectable } from "@angular/core";
import { LogService } from "./log.service";
import { Person } from "./shared/interfaces/person.interface"

@Injectable({
    providedIn: 'root'
})
export class PersonService{

    constructor(private logServices:LogService){}

    medicos : Person[] = [
        {nombre: 'Alvaro', apellido:'González'},
        {nombre: 'Carlos', apellido:'López'},
        {nombre: 'Laura', apellido:'Gutierrez'},
        {nombre: 'Ernesto', apellido:'Ramírez'},
        {nombre: 'Facundo', apellido: 'Pérez'},
        {nombre: 'Gabriela', apellido: 'Quevedo'},
        {nombre: 'Nancy', apellido: 'Telón'}

      ]
    
      pilotos : Array<Person> = [
        {nombre: 'Fernando', apellido:'Fernández'},
        {nombre: 'Karen', apellido:'Santiago'},
        {nombre: 'Elizabeth', apellido:'Olsen'},
        {nombre: 'Nicol', apellido:'Martinez'}
      ]

    getFullNames(type: number): Array<Person>{
        this.logServices.log('Extrayendo registros...')
        return type === 1 ? this.medicos : this.pilotos;
    }
}