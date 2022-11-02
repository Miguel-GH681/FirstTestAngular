import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { FotosService } from '../fotos.service';

@Component({
  selector: 'kta-fotos',
  templateUrl: './fotos.component.html',
  styleUrls: ['./fotos.component.css']
})
export class FotosComponent implements OnInit {

  suscription = new Subscription();

  constructor(private fotosService: FotosService) { 
  }

  ngOnInit(): void {
    this.suscription = this.fotosService.getFotos().subscribe(fotos=>{
      console.log(fotos);      
    });
  }

  ngOnDestroy(){
    this.suscription.unsubscribe();
  }
}
