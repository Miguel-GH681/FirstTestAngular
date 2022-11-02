import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FotosComponent } from './fotos/fotos.component';

import { ListadoComponent } from './listado/listado.component';
import { LoginComponent } from './login/login.component';
import { MenuComponent } from './menu/menu.component';

//Las rutas nunca empiezan con slash y tampoco terminan con slash

const routes : Routes = [
  { path: '', component: LoginComponent },
  { path: 'listado/:opt', component: ListadoComponent },
  { path: 'fotos', component: FotosComponent },
  //{ path: 'medicos', component: ListadoComponent },
  //{ path: 'pilotos', component: ListadoComponent },
  //{ path: '**', component: LoginComponent }
  { path: '**', redirectTo: '' }
]

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule{

}