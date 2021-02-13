import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from '../../environments/environment';
const url = environment.url;
@Injectable({
  providedIn: 'root'
})
export class ModelosService {

  constructor(private http: HttpClient) { }

  getModelos() {
    return this.http.get(`${url}/modelo`);
  }

  eliminarModelo(id: number) {
    return this.http.delete(`${url}/modelo/${id}`);
  }
  agregarModelo(modelo: string) {
    const headers = new HttpHeaders().set('Content-Type', 'application/x-www-form-urlencoded');
    return this.http.post(`${url}/modelo`, 'modelo=' + modelo, { headers});
  }
}
