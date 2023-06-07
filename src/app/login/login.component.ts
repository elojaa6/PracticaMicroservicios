import { Component } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { UserService } from '../services/user.service';
import { LocalStorageService } from 'angular-web-storage';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {


  userName: string = "";
  password: string = "";

  form!: FormGroup;

  

  constructor(
    private router: Router,
    private auth: UserService,
    private formBuilder: FormBuilder,
    private local: LocalStorageService
  ){
      this.form = this.formBuilder.group({
        username: ['', Validators.required],
        password: ['', Validators.required]
      });
  }


  login(){
    if (this.form.invalid) {
      console.log("entra")
      return;
    }

    const usuario = this.form.get('username')?.value;
    const contrasenia = this.form.get('password')?.value;
    console.log(usuario)
    console.log(contrasenia)

    this.auth.login(usuario, contrasenia).subscribe(
      data => {
        this.router.navigate(['/catalogo'])
        this.local.set('key', data.id);
        console.log(data)},
      error => {
        const errorObject = error; 
        const err = errorObject.error;
        console.log(err)
      }
    );

  }
}
