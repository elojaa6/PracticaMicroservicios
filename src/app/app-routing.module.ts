import { NgModule } from '@angular/core';
import { Router, RouterModule, Routes } from '@angular/router';
import { RegistrarseComponent } from './registrarse/registrarse.component';
import { LoginComponent } from './login/login.component';
import { CatalogoComponent } from './catalogo/catalogo.component';
import { SidenavComponent } from './sidenav/sidenav.component';

const routes: Routes = [
  {path: '', redirectTo: '/login', pathMatch: 'full'},
  {path: 'login', component: LoginComponent},
  {path: 'registrarse', component: RegistrarseComponent},
  {path: 'catalogo', component: CatalogoComponent},
  {path: 'inscripciones', component: CatalogoComponent},
  {path: 'sidenav', component: SidenavComponent},

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
