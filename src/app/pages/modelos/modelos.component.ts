import { Component, OnInit } from '@angular/core';
import { ModelosService } from '../../services/modelos.service';
import { Modelo } from 'src/app/interfaces/interface';
import Swal from 'sweetalert2';
declare var $: any;

@Component({
  selector: 'app-modelos',
  templateUrl: './modelos.component.html',
  styleUrls: ['./modelos.component.css']
})
export class ModelosComponent implements OnInit {
  nuevoModelo = '';
  constructor(private modeloService: ModelosService) { }
  modelos: Modelo[] = [];
  ngOnInit(): void {
    this.obtenerModelos();
    // console.log(this.modelos);
  }
  obtenerModelos() {
    this.modelos = [];
    this.modeloService.getModelos()
    .subscribe( (res: any) => {
      console.log(res);
      if ( res.status === 'correcto') {
        if ( res.modelos) {
          this.modelos.push(...res.modelos);
        }
      }
    });
  }
  eliminar(id: number, index: number) {
    // console.log(index);
    Swal.fire({
      title: 'Está seguro?',
      text: 'Eliminaras este registro de modelo!',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Si',
      cancelButtonText: 'Cancelar'
    }).then((result) => {
      if (result.value) {
        this.modeloService.eliminarModelo(id)
        .subscribe( (res: any) => {
          console.log(res);
          if (res.status === 'correcto') {
            this.eliminarRegistroTabla(index);
            Swal.fire(
              'Borrado!',
              res.mensaje,
              'success'
            );
          }
        });
      }
    });
  }


  eliminarRegistroTabla(index) {
    // console.log(index);
    this.modelos.splice(index, 1);
  }

  guardarModelo() {
    console.log(this.nuevoModelo);
    if (this.nuevoModelo.length > 0)   {
      this.modeloService.agregarModelo(this.nuevoModelo)
      .subscribe( (res: any) => {
        if ( res.status === 'correcto') {
          Swal.fire(
            'Correcto!',
            res.mensaje,
            'success'
          );
          $('#exampleModal').modal('hide');
          this.obtenerModelos();
        }
      });
    }
  }
}
