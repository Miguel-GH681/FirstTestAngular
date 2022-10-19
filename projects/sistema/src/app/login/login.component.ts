import { Component, EventEmitter, Output } from '@angular/core'

@Component({
    selector: 'kta-login',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.css']
})
export class LoginComponent{
    @Output() onUserLogged = new EventEmitter<void>();

    login(){
        this.onUserLogged.emit();
    }
}