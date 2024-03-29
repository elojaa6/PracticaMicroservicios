import { Component, OnInit } from '@angular/core';
import { CursosService } from '../services/cursos.service';
import { InscripcionService } from '../services/inscripcion.service';
import { LocalStorageService } from 'angular-web-storage';

@Component({
  selector: 'app-catalogo',
  templateUrl: './catalogo.component.html',
  styleUrls: ['./catalogo.component.css']
})
export class CatalogoComponent implements OnInit  {

  curso: any

  constructor(
    public cursoService: CursosService,
    public inscripcionService: InscripcionService,
    private local: LocalStorageService
  ){}

  ngOnInit(): void{
    this.cargarInformacion()
  }

  cargarInformacion() {
    this.cursoService.getAll().subscribe(info => {
      this.curso = info,
        console.log(info)
    },error => {
      console.log(error)
    })
  }

  incribirse(id: string, nombreCurso: string){
    const value = this.local.get('key');
    const valueName = this.local.get('keyUser');
    this.inscripcionService.register(valueName, value, nombreCurso, id).subscribe(info =>{
      console.log(info)
    },error => {
      console.log(error)
    })

  }

}
