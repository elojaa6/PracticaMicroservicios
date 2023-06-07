import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Catalogo } from '../models/catalogo.model';


const catalogoUrl = 'http://localhost:8082/catalogo/'

@Injectable({
  providedIn: 'root'
})
export class CursosService {

  constructor(
    private http: HttpClient
  ) { }

  ngOnInit() {

  }
  

  getAll(): Observable<Catalogo[]> {
    return this.http.get<Catalogo[]>(catalogoUrl+'findAll');
  }

  crearCurso(crearCursoRequest: any): Observable<any> {
    return this.http.post<any>(catalogoUrl + "create", crearCursoRequest);
  }
}
