import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { IngresoComponent } from './pages/ingreso/ingreso.component';
import { RegistroComponent } from './pages/registro/registro.component';
import { ModelosComponent } from './pages/modelos/modelos.component';
import { LoginComponent } from './pages/login/login.component';
import { UsuarioComponent } from './pages/usuario/usuario.component';
import { AuthGuard } from './guards/auth.guard';
import { DetalleComponent } from './pages/usuario/detalle/detalle.component';
import { DetalleMotoComponent } from './pages/registro/detalle-moto/detalle-moto.component';
import { InventarioComponent } from './pages/inventario/inventario.component';


const routes: Routes = [
  { path: 'inicio', component: HomeComponent, canActivate: [ AuthGuard]},
  { path: 'ingreso', component: IngresoComponent, canActivate: [ AuthGuard]},
  { path: 'registro', component: RegistroComponent, canActivate: [ AuthGuard]},
  { path: 'inventario', component: InventarioComponent, canActivate: [ AuthGuard]},
  { path: 'registro/moto/:id', component: DetalleMotoComponent, canActivate: [ AuthGuard]},
  { path: 'modelos', component: ModelosComponent, canActivate: [ AuthGuard]},
  { path: 'login', component: LoginComponent},
  { path: '', component: HomeComponent, canActivate: [ AuthGuard]},
  { path: 'usuario', component: UsuarioComponent, canActivate: [ AuthGuard]},
  { path: 'usuario/detalle/:id', component: DetalleComponent, canActivate: [ AuthGuard]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
