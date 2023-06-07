import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from '../services/user.service';
import { UserModel } from '../models/user.model';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-registrarse',
  templateUrl: './registrarse.component.html',
  styleUrls: ['./registrarse.component.css']
})
export class RegistrarseComponent {


  form = new FormGroup({
    username: new FormControl(),
    password: new FormControl(),
  })

  constructor(
    private router: Router,
    private auth: UserService,
  ){}

  register(){
    if (this.form.invalid) {
      console.log("entra")
      return;
    }

    const usuario = this.form.get('username')?.value;
    const contrasenia = this.form.get('password')?.value;
    console.log(usuario)
    console.log(contrasenia)

    this.auth.register(usuario, contrasenia).subscribe(
      data => {
        this.router.navigate(['/login'])
        console.log(data)},
      error => {
        const errorObject = error; 
        const err = errorObject.error;
        console.log(err)
      }
    );

  }

}
