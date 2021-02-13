import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { UsuarioModel } from 'src/app/models/usuario.model';
import { UsuarioService } from '../../../services/usuario.service';
import { Router, ActivatedRoute } from '@angular/router';
import Swal from 'sweetalert2';
@Component({
  selector: 'app-detalle',
  templateUrl: './detalle.component.html',
  styleUrls: ['./detalle.component.css']
})
export class DetalleComponent implements OnInit {

  constructor(private usuarioService: UsuarioService, private route: Router, private rou: ActivatedRoute) { }
  usuario: UsuarioModel;
  id: any;
  ngOnInit(): void {
    this.id = this.rou.snapshot.params.id;
    console.log(this.id);
    this.usuario = new UsuarioModel();
    if ( this.id !== 'nuevo') {
      this.getUsuario(this.id);
    }
    console.log(this.usuario);
  }
  guardar(form: NgForm) {
    console.log(form);
    if ( this.id === 'nuevo') {
      this.usuarioService.guardar(this.usuario)
    .subscribe((res: any) => {
      if ( res.status === 'correcto') {
        Swal.fire(
          'Correcto!',
          res.mensaje,
          'success'
        );
        this.route.navigateByUrl('/usuario');
      } else {
        Swal.fire(
          'Error!',
          res.mensaje,
          'error'
        );
      }
    });
    } else {
      this.usuarioService.actualizar(this.usuario)
      .subscribe( (res: any) => {
        console.log(res);
        if ( res.status === 'correcto') {
          Swal.fire(
            'Correcto!',
            res.mensaje,
            'success'
          );
          // this.route.navigateByUrl('/usuario');
        }
      });
    }
  }

  getUsuario(id) {
    this.usuarioService.getUsuario(id)
      .subscribe( (res: any) => {
        if ( res.status === 'correcto') {
          this.usuario = res.usuario;
        }
    });
  }
}
