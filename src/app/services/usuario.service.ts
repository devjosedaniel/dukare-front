import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from '../../environments/environment';
import { UsuarioModel } from '../models/usuario.model';
const url = environment.url;
@Injectable({
  providedIn: 'root'
})
export class UsuarioService {

  constructor(private http: HttpClient) { }

  getUsuarios() {
    return this.http.get(`${url}/usuario`);
  }
  guardar(usuario: UsuarioModel) {
    const headers = new HttpHeaders().set('Content-Type', 'application/x-www-form-urlencoded');
    return this.http.post(`${url}/usuario`, `usuario=${usuario.usuario}&password=${usuario.password}&rol=${usuario.rol}`, { headers});
  }
  eliminar(id: number) {
    return this.http.delete(`${url}/usuario/${id}`);
  }

  getUsuario(id) {
    return this.http.get(`${url}/usuario/${id}`);
  }
  actualizar(usuario: UsuarioModel) {
    const headers = new HttpHeaders().set('Content-Type', 'application/x-www-form-urlencoded');
    // tslint:disable-next-line: max-line-length
    return this.http.put(`${url}/usuario/${usuario.id}`, `usuario=${usuario.usuario}&password=${usuario.password}&rol=${usuario.rol}`, { headers});
  }
}
