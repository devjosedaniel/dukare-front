import { Component, OnInit } from '@angular/core';
import { UsuarioModel } from '../../models/usuario.model';
import { UsuarioService } from '../../services/usuario.service';
import Swal from 'sweetalert2';
@Component({
  selector: 'app-usuario',
  templateUrl: './usuario.component.html',
  styleUrls: ['./usuario.component.css']
})
export class UsuarioComponent implements OnInit {

  constructor(private usuarioService: UsuarioService) { }
  usuarios: UsuarioModel[] = [];
  ngOnInit() {
    this.usuarioService.getUsuarios(  )
    .subscribe( (res: any) => {
      if ( res.status === 'correcto') {
        this.usuarios.push(...res.usuarios);
      }
    });
  }

  eliminar(id: number, index: number) {



    Swal.fire({
      title: 'Está seguro?',
      text: 'Eliminaras este registro de usuario!',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Si',
      cancelButtonText: 'Cancelar'
    }).then((result) => {
      if (result.value) {
        this.usuarioService.eliminar(id)
        .subscribe( (res: any) => {
          console.log(res);
          if (res.status === 'correcto') {
            this.usuarios.splice(index, 1);
            Swal.fire(
              'Borrado!',
              res.mensaje,
              'success'
            );
          }
        });
      }
    });
    // this.usuarioService.eliminar(id)
    // .subscribe( (res: any) => {
    //   if ( res.status === 'correcto') {
    //     this.usuarios.splice(index, 1);
    //   }
    // });

  }
}
