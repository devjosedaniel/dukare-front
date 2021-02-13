import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ModelosService } from '../../services/modelos.service';
import { Modelo, ResModelo, Moto } from '../../interfaces/interface';
import { MotoModel } from '../../models/moto.model';
import { MotoService } from '../../services/moto.service';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';
@Component({
  selector: 'app-ingreso',
  templateUrl: './ingreso.component.html',
  styleUrls: ['./ingreso.component.css']
})
export class IngresoComponent implements OnInit {
  moto = new MotoModel();
  constructor(private modeloService: ModelosService, private motoServicio: MotoService, private route: Router) { }
  modelos: Modelo[] = [];
  uploadFiles: File;
  ngOnInit(): void {
    this.modeloService.getModelos()
    .subscribe( (res: ResModelo) => {
      if ( res.status === 'correcto') {
        this.modelos.push( ... res.modelos);
      }
      // console.log(res.modelos);
    });
  }
  guardar( form: NgForm) {
    // console.log('submit disparado', form);
    if (form.valid) {
      console.log(this.moto);
      this.motoServicio.guardarMoto(this.moto)
      .subscribe( (res: any) => {
        if ( res.status === 'correcto') {
          Swal.fire(
            'Buen trabajo!',
            res.mensaje,
            'success'
          ).then(( result) => {
            this.route.navigateByUrl('registro');
          });
        }
      }, err => {
        Swal.fire(
          'Error!',
          err.error.message,
          'error'
        );
      });
    }
  }

  subir(archivo: File) {
    const nombreArchivo = this.uploadFiles.name;
    const array = nombreArchivo.split('.');
    console.log('lenght', array.length);
    const lng: number = array.length;
    console.log(array[lng - 1]);
    if (array[lng - 1] === 'xlsx' || array[lng - 1] === 'xls') {
        this.motoServicio.subirArchivo(this.uploadFiles)
      .subscribe( (res: any) => {
        console.log(res);
        Swal.fire(
          'Buen trabajo!',
          res.mensaje,
          'success'
        ).then(( result) => {
          this.route.navigateByUrl('registro');
        });
      });
    } else {
      // console.log(this.uploadFiles.name);
      Swal.fire(
        'Error!',
        'No es una archivo de Excel',
        'error'
      );
    }

  }
  fileChange(file) {
    this.uploadFiles = file.target.files[0];
    console.log('file', this.uploadFiles);
  }
}
