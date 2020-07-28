import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {AppComponent} from "../app/app.component";
import {SubirComponent} from "./componentes/subir/subir.component";
import {InicioComponent} from "./componentes/inicio/inicio.component";
import {LoginComponent} from './componentes/login/login.component';
/*import {UpdateComponent} from "./crud/update/update.component";
import {ReadComponent} from "./crud/read/read.component";*/

const routes: Routes = [
  {path: '', component: InicioComponent, pathMatch: 'full' },
  {path: 'subir', component: SubirComponent},
  {path: 'login', component:LoginComponent}
  /*{path: 'update/:id', component: UpdateComponent},
  {path: 'view/:id', component: ReadComponent}*/
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }