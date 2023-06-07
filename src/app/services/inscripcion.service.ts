import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { InscripcionModel } from '../models/inscripcion.model';
import { LocalStorageService } from 'angular-web-storage';

@Injectable({
  providedIn: 'root'
})
export class InscripcionService {

  constructor(
    private http: HttpClient,
    private local: LocalStorageService
  ) { }

  register(nombreCliente: string, clienteId: string, nombreCurso: string, cursoId: string): Observable<any> {
    const incripcionRequest = {
      nombreCliente: nombreCliente,
      clienteId: clienteId,
      nombreCurso: nombreCurso,
      cursoId: cursoId,
    };
    return this.http.post<InscripcionModel[]>('http://localhost:8083/inscripcion/inscribir', incripcionRequest);
  }

  getAll(): Observable<InscripcionModel[]> {
    return this.http.get<InscripcionModel[]>('http://localhost:8083/inscripcion/findAll');
  }

  getAllId(): Observable<InscripcionModel[]> {
    return this.http.get<InscripcionModel[]>('http://localhost:8083/inscripcion/findById/'+this.local.get('key'));
  }


}
