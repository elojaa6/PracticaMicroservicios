import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RegistrarseComponent } from './registrarse/registrarse.component';
import { RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatIconModule } from '@angular/material/icon';
import { CatalogoComponent } from './catalogo/catalogo.component';
import { MatToolbarModule } from "@angular/material/toolbar";
import { MatMenuModule } from '@angular/material/menu';
import { SidenavComponent } from './sidenav/sidenav.component';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatCardModule} from '@angular/material/card';
import { FormsModule, ReactiveFormsModule  } from "@angular/forms";

import { HttpClientModule } from '@angular/common/http';
import { CrearCursoComponent } from './crear-curso/crear-curso.component';
import { ListInscripcionesComponent } from './list-inscripciones/list-inscripciones.component';

@NgModule({
  declarations: [
    AppComponent,
    RegistrarseComponent,
    LoginComponent,
    CatalogoComponent,
    SidenavComponent,
    CrearCursoComponent,
    ListInscripcionesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule,
    BrowserAnimationsModule,
    MatIconModule,
    MatToolbarModule,
    MatMenuModule,
    MatSidenavModule,
    MatCardModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
