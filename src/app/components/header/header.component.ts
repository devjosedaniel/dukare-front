import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor(private authService: AuthService) { }
  usuario = '';
  rol = '';
  async ngOnInit() {
    await this.authService.leerUsuario();
    this.usuario = this.authService.usuario;
    this.rol = this.authService.nombrerol;
    console.log('rol' , this.rol);
  }
  logout() {
    this.authService.logout();
  }
}
