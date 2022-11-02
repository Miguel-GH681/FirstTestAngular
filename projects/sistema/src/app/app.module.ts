import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { MenuComponent } from './menu/menu.component';
import { ListadoComponent } from './listado/listado.component';
import { DatoComponent } from './dato/dato.component';
import { AppRoutingModule } from './app-routing.module';
import { PersonService } from './person.service';
import { LogService } from './log.service';
import { FotosComponent } from './fotos/fotos.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    MenuComponent,
    ListadoComponent,
    DatoComponent,
    FotosComponent
  ],
  //En la propiedad imports solamente se importan módulos
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [
    PersonService,
    {provide: LogService, useClass: LogService}
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
