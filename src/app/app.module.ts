import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule} from '@angular/forms';
import { HomeComponent } from './pages/home/home.component';
import { ComponentsModule } from './components/components.module';
import { IngresoComponent } from './pages/ingreso/ingreso.component';
import { HttpClientModule } from '@angular/common/http';
import { RegistroComponent } from './pages/registro/registro.component';
import { ModelosComponent } from './pages/modelos/modelos.component';
import { LoginComponent } from './pages/login/login.component';
import { UsuarioComponent } from './pages/usuario/usuario.component';
import { DetalleComponent } from './pages/usuario/detalle/detalle.component';
import { DetalleMotoComponent } from './pages/registro/detalle-moto/detalle-moto.component';
import { InventarioComponent } from './pages/inventario/inventario.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    IngresoComponent,
    RegistroComponent,
    ModelosComponent,
    LoginComponent,
    UsuarioComponent,
    DetalleComponent,
    DetalleMotoComponent,
    InventarioComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ComponentsModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [ComponentsModule],
  bootstrap: [AppComponent]
})
export class AppModule { }
