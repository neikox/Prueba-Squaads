import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule} from '@angular/common/http';
import {MatTableModule} from '@angular/material/table';
import {MatPaginatorModule} from '@angular/material/paginator';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { EncabezadoComponent } from './componentes/encabezado/encabezado.component';
import { MatSortModule } from '@angular/material/sort';
import { FichaComponent } from './componentes/ficha/ficha.component';
import { AppRoutingModule } from './app-routing.module';
import { MatIconModule } from '@angular/material/icon';
import { CuerpoComponent } from './componentes/cuerpo/cuerpo.component';
import {MatCardModule} from '@angular/material/card';
import { ReactiveFormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import { AceptarComponent } from './dialogo/aceptar/aceptar.component';
import {MatDialogModule} from '@angular/material/dialog';
import { registerLocaleData } from '@angular/common';
import localefr from '@angular/common/locales/fr';
import { MatButtonModule } from '@angular/material/button';
import { MatGridListModule } from '@angular/material/grid-list'; 
import {MatRadioModule} from '@angular/material/radio';
import { EquiposComponent } from './equipos/equipos.component';
import { InicioComponent } from './componentes/inicio/inicio.component';
registerLocaleData(localefr, "fr");

@NgModule({
  declarations: [
    AppComponent,
    EncabezadoComponent,
    FichaComponent,
    CuerpoComponent,
    AceptarComponent,
    EquiposComponent,
    InicioComponent
  ],
  imports: [
    MatRadioModule,
    BrowserModule,
    BrowserAnimationsModule,
    MatGridListModule,
    MatTableModule,
    HttpClientModule,
    MatPaginatorModule,
    MatSortModule,
    AppRoutingModule,
    MatCardModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatDialogModule,
    MatIconModule,
    MatButtonModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
