import { Component, EventEmitter, Output } from '@angular/core'
import { Router } from '@angular/router';

@Component({
    selector: 'kta-login',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.css']
})
export class LoginComponent{

    @Output() onUserLogged = new EventEmitter<void>();
    fotoPerfil : string = '';

    constructor(private router:Router){}

    login(){
        this.router.navigate(['listado/',1]);
    }
}