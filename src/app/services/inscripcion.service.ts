import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { InscripcionModel } from '../models/inscripcion.model';

@Injectable({
  providedIn: 'root'
})
export class InscripcionService {

  constructor(private http: HttpClient) { }

  register(nombre: string, apellido: string): Observable<any> {
    const incripcionRequest = {
      nombre: nombre,
      apellido: apellido
    };
    return this.http.post<InscripcionModel[]>('http://localhost:8083/inscripcion/inscribir', incripcionRequest);
  }

  getAll(): Observable<InscripcionModel[]> {
    return this.http.get<InscripcionModel[]>('http://localhost:8083/inscripcion/findAll');
  }
}
