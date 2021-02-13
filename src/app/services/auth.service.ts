import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from '../../environments/environment';
import { map } from 'rxjs/operators';
import { Usuario } from '../interfaces/interface';
import { Router } from '@angular/router';
const url = environment.url;
@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http: HttpClient, private route: Router) { }
  usuario = '';
  rol: number;
  nombrerol = '';
  autenticar(usuario: string, password: string) {
    const headers = new HttpHeaders().set('Content-Type', 'application/x-www-form-urlencoded');
    return this.http.post(`${url}/autenticar`, `usuario=${usuario}&password=${password}`, { headers})
    .pipe(
      map( (res: any) => {
        if (res.status === 'correcto') {
          console.log(res.usuario);
          this.guardarUsuario(res.usuario);
        }
        return res;
      })
    );
  }

  logout() {
    localStorage.removeItem('usuario');
    localStorage.removeItem('rol');
    this.route.navigateByUrl('/login');
  }

  guardarUsuario(u) {
    localStorage.setItem('usuario', u.usuario);
    localStorage.setItem('rol', u.rol);
    localStorage.setItem('nombrerol', u.nombrerol);
    this.usuario = u.usuario;
    this.rol = u.rol;
    this.nombrerol = u.nombrerol;
    console.log('usuario guardado en localstorage');
  }

  leerUsuario() {
    if (localStorage.getItem('usuario')) {
      this.usuario = localStorage.getItem('usuario');
      this.nombrerol = localStorage.getItem('nombrerol');
    } else {
      this.usuario = '';
    }
  }

  validarSession(): boolean {
    // console.log(this.usuario.lengt  h > 2);
    this.leerUsuario();
    return this.usuario.length > 2;
  }
}
