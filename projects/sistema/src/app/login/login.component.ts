import { Component, EventEmitter, Output } from '@angular/core'

@Component({
    selector: 'kta-login',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.css']
})
export class LoginComponent{
    showLogin:boolean = true;
    @Output() onLoginDisplay = new EventEmitter();

    ocultarLogin(){
        this.onLoginDisplay.emit(this.showLogin);
    }
}