import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'kta-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {

  @Output() onTipoListado = new EventEmitter<number>();
  @Input() listado:object[] = [];
  @Output() dato = new EventEmitter();
  @Input() foto : string = '';

  constructor(private router: Router ) { }

  ngOnInit(): void {
  }

  opcion(opcion:number){
    //this.onTipoListado.emit(opcion)
    if(opcion === 1){
      this.router.navigate(['listado', 1]);
    } else{
      this.router.navigate(['listado', 2]);
    }

  }

  seleccionar(dato:any){
    this.dato.emit(dato);
  }

  showLogin(): void{
    this.router.navigate(['login'])
  }

  showFotos():void{
    this.router.navigate(['fotos'])
  }



}
