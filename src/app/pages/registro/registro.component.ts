import { Component, OnInit } from '@angular/core';
import { MotoService } from '../../services/moto.service';
import { MotoModel } from '../../models/moto.model';
import { Moto } from '../../interfaces/interface';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.css']
})
export class RegistroComponent implements OnInit {
  textobusqueda = '';
  constructor(private motoService: MotoService) { }
  motos: MotoModel[] = [];
  ngOnInit(): void {
    this.motoService.getMotos(this.textobusqueda)
    .subscribe( (res: any) => {
      if ( res.status === 'correcto') {
        console.log(res);
        this.motos = [];
        this.motos.push(...res.motos);
      }
    });
    console.log(this.motos);
  }
  busqueda() {
    this.motoService.getMotos(this.textobusqueda)
    .subscribe( (res: any) => {
      if ( res.status === 'correcto') {
        console.log(res);
        this.motos = [];
        this.motos.push(...res.motos);
      }
    });
  }

  reporte() {
    this.motoService.descargarRegistro()
    .subscribe( res => {
      this.downloadFile(res);
    } );
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
