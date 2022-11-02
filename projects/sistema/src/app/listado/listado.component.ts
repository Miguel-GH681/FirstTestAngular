import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { interval, Subscription } from 'rxjs';
import { PersonService } from '../person.service';
import { Person } from '../shared/interfaces/person.interface';

@Component({
  selector: 'kta-listado',
  templateUrl: './listado.component.html',
  styleUrls: ['./listado.component.css']
})
export class ListadoComponent implements OnInit {



  listado:Person[] = [];
  @Output() datoSeleccionado = new EventEmitter();
  suscription!:Subscription;
  numeros!:Subscription;

  constructor(private activateRoute : ActivatedRoute,
              private personService : PersonService) { 
    //const opt = +activateRoute.snapshot.params['opt'];   
    this.suscription = activateRoute.params.subscribe((params:Params) =>{
      const opt = +params['opt'];
      this.listado = personService.getFullNames(opt)
    })

    this.numeros = interval(500).subscribe(console.log)
  }

  ngOnDestroy(){
    console.log('Desuscribiendo...');
    
    this.suscription.unsubscribe();
    this.numeros.unsubscribe();
  }

  ngOnInit(): void {
  }

  seleccionar(dato:any){
    this.datoSeleccionado.emit(dato);
  }
}
