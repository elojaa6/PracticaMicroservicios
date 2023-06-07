import { NgModule } from '@angular/core';
import { Router, RouterModule, Routes } from '@angular/router';
import { RegistrarseComponent } from './registrarse/registrarse.component';
import { LoginComponent } from './login/login.component';
import { CatalogoComponent } from './catalogo/catalogo.component';
import { SidenavComponent } from './sidenav/sidenav.component';
import { CrearCursoComponent } from './crear-curso/crear-curso.component';
import { InscripcionesComponent } from './inscripciones/inscripciones.component';
import { ListInscripcionesComponent } from './list-inscripciones/list-inscripciones.component';

const routes: Routes = [
  {path: '', redirectTo: '/login', pathMatch: 'full'},
  {path: 'login', component: LoginComponent},
  {path: 'registrarse', component: RegistrarseComponent},
  {path: 'catalogo', component: CatalogoComponent},
  {path: 'inscripciones', component: InscripcionesComponent},
  {path: 'sidenav', component: SidenavComponent},
  {path: 'crearCurso', component: CrearCursoComponent},
  {path: 'listinscripciones', component: ListInscripcionesComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { 

  constructor(private router:Router){

  }

  onRegisterClick(){
    this.router.navigate(['/registrarse']);
  }
}
