import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FichaComponent } from './componentes/ficha/ficha.component';
import { CuerpoComponent } from './componentes/cuerpo/cuerpo.component';
import { EquiposComponent } from './equipos/equipos.component';
import { InicioComponent } from './componentes/inicio/inicio.component';

const routes: Routes = [
  {path: '', component:InicioComponent},
  {path: 'leagues', component:CuerpoComponent},
  {path: 'teams/:Identificador', component:EquiposComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }