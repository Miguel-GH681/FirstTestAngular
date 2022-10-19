import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Person } from '../shared/interfaces/person.interface';

@Component({
  selector: 'kta-dato',
  templateUrl: './dato.component.html',
  styleUrls: ['./dato.component.css']
})
export class DatoComponent implements OnInit {

  @Input() dato!:Person;

  @Output() onSelectData = new EventEmitter();

  constructor() { }

  ngOnInit(): void {
  }

  seleccionar(){
    this.onSelectData.emit(this.dato)
  }

}
