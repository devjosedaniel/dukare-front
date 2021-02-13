import { Component, OnInit } from '@angular/core';
import { MotoService } from '../../services/moto.service';
import { MotoModel } from '../../models/moto.model';
import * as moment from 'moment';

@Component({
  selector: 'app-inventario',
  templateUrl: './inventario.component.html',
  styleUrls: ['./inventario.component.css']
})
export class InventarioComponent implements OnInit {

  constructor(private motoService: MotoService) { }
  motos: MotoModel[] = [];

  fecha: string;
  ngOnInit(): void {
    this.fecha = moment().format('YYYY-MM-DD');
    // console.log('fecha', this.fecha);
    this.motoService.getInventario(this.fecha)
    .subscribe( (res: any) => {
      if ( res.status === 'correcto') {
        console.log(res);
        this.motos.push(...res.motos);
      }
    });
    console.log(this.motos);
  }

  buscar() {
    console.log(this.fecha);
    this.motos = [];
    this.motoService.getInventario(this.fecha)
    .subscribe( (res: any) => {
      if ( res.status === 'correcto') {
        console.log(res);
        this.motos.push(...res.motos);
      }
    });
    console.log(this.motos);
  }

  reporte() {
    console.log('clic en reporte');
    this.motoService.generarReporte(this.fecha)
    .subscribe( res => {
      this.downloadFile(res);
    });
  }

  downloadFile(data) {

    if (data) {
        const url = window.URL.createObjectURL(data);
        const anchor = document.createElement('a');
        anchor.download = `reporte.xlsx`;
        anchor.href = url;
        anchor.click();
    }
  }
}
