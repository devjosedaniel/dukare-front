import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private authService: AuthService, private route: Router) { }
  usuario = '';
  password = '';
  textoError = '';
  ngOnInit(): void {
  }
  validarUsuario() {
    this.textoError = '';
    this.authService.autenticar(this.usuario, this.password)
    .subscribe((res: any) => {
      console.log(res);
      if ( res.status === 'correcto') {
        this.route.navigateByUrl('/inicio');
      } else {
        this.textoError = res.mensaje;
      }
    });
  }
}
