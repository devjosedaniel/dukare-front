import { Component, OnInit } from '@angular/core';
import { MotoService } from '../../../services/moto.service';
import { ActivatedRoute } from '@angular/router';
import { MotoModel } from '../../../models/moto.model';
import Swal from 'sweetalert2';
@Component({
  selector: 'app-detalle-moto',
  templateUrl: './detalle-moto.component.html',
  styleUrls: ['./detalle-moto.component.css']
})
export class DetalleMotoComponent implements OnInit {

  constructor(private motoService: MotoService, private route: ActivatedRoute) { }
   id: number;
   moto: MotoModel;
   idproceso = 0;
  ngOnInit(): void {
    this.moto = new MotoModel();
    this.id = this.route.snapshot.params.id;
    this.motoService.getMoto(this.id)
    .subscribe( (res: any) => {
      console.log(res);
      if ( res.status === 'correcto') {
        this.moto = res.moto;
      }
    });
  }
  actualizarEstado() {
    if (this.idproceso > 0) {
      this.motoService.actualizarProceso(this.id, this.idproceso)
      .subscribe( (res: any) => {
        console.log(res);
        if ( res.status === 'correcto') {
          Swal.fire(
            'Correcto!',
            res.mensaje,
            'success'
          );
        }
      });
    }
  }
}
