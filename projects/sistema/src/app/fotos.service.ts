import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Foto } from './shared/interfaces/foto.interface';

@Injectable({
  providedIn: 'root'
})
export class FotosService {

  constructor(private httpClient : HttpClient) { }

  getFotos():Observable<Foto[]>{
    return this.httpClient.get<Array<Foto>>('https://jsonplaceholder.typicode.com/photos')
  }
}
