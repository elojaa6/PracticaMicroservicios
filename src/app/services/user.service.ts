import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';
import { UserModel } from '../models/user.model';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http: HttpClient) { }


  login(usuario: string, contrasenia: string): Observable<any> {
    const loginUsuarioRequest = {
      username: usuario,
      password: contrasenia
    };
    return this.http.post<UserModel[]>('http://localhost:8081/autenticacion/login', loginUsuarioRequest);
  }

  register(usuario: string, contrasenia: string): Observable<any> {
    const loginUsuarioRequest = {
      username: usuario,
      password: contrasenia
    };
    return this.http.post<UserModel[]>('http://localhost:8081/autenticacion/crear', loginUsuarioRequest);
  }
}
