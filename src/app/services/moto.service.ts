import { Injectable } from '@angular/core';
import { MotoModel } from '../models/moto.model';
import { environment } from '../../environments/environment';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { JsonPipe } from '@angular/common';
const url = environment.url;
@Injectable({
  providedIn: 'root'
})
export class MotoService {

  constructor(private http: HttpClient) { }


  guardarMoto(moto: MotoModel) {

    const headers = new HttpHeaders().set('Content-Type', 'application/x-www-form-urlencoded');
    return this.http.post(`${url}/moto`, 'moto=' + JSON.stringify(moto), { headers});
  }

  getMotos(busqueda: string) {
    return this.http.get(`${url}/moto?busqueda=${busqueda}`);
  }

  getMoto(id: number) {
    return this.http.get(`${url}/moto/${id}`);
  }
  actualizarProceso(id: number , idproceso: number) {
    const headers = new HttpHeaders().set('Content-Type', 'application/x-www-form-urlencoded');
    return this.http.put(`${url}/moto/${id}`, `idproceso=${idproceso}`, {headers});
  }
  getInventario(fecha: string) {
    return this.http.get(`${url}/inventario?fecha=${fecha}`);
  }

  subirArchivo(archivo: File) {
    const formData = new FormData();
    formData.append('archivo', archivo, archivo.name);
    return this.http.post(`${url}/moto/subir`, formData);
  }

  generarReporte(fecha: string) {
    return this.http.get(`${url}/reporte?fecha=${fecha}`, { responseType: 'blob'});
  }
  descargarRegistro() {
    return this.http.get(`${url}/reporteRegistro`, { responseType: 'blob'});
  }
}
