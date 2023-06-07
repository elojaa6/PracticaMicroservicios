import { Component, OnInit } from '@angular/core';
import { InscripcionService } from '../services/inscripcion.service';

@Component({
  selector: 'app-list-inscripciones',
  templateUrl: './list-inscripciones.component.html',
  styleUrls: ['./list-inscripciones.component.css']
})
export class ListInscripcionesComponent implements OnInit {

  inscripcion: any

  constructor(
    public inscripcionService: InscripcionService,
  ){}

  ngOnInit(): void{
    this.cargarInformacion()
  }

  cargarInformacion() {
    this.inscripcionService.getAllId().subscribe(info => {
      this.inscripcion = info,
        console.log(info)
    },error => {
      console.log(error)
    })
  }
}