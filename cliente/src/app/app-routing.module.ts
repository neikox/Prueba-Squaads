import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FichaComponent } from './componentes/ficha/ficha.component';
import { CuerpoComponent } from './componentes/cuerpo/cuerpo.component';
import { EquiposComponent } from './equipos/equipos.component';
import { InicioComponent } from './componentes/inicio/inicio.component';
import { JugadoresComponent } from './componentes/jugadores/jugadores.component';
import { FichaPlayersComponent } from './componentes/ficha-players/ficha-players.component';

const routes: Routes = [
  {path: '', component:InicioComponent},
  {path: 'leagues', component:CuerpoComponent},
  {path: 'teams/:Identificador', component:EquiposComponent},
  {path: 'teams/ficha/:_id', component:FichaComponent},
  {path: 'players/:id', component:JugadoresComponent},
  {path: 'players/search/:NombreJugador', component:JugadoresComponent},
  {path: 'players/ficha/:_id', component:FichaPlayersComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }