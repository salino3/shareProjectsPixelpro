import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';
import { BrowserModule } from '@angular/platform-browser';
import { LibroclickedService } from './libroclicked.service'
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TesteoComponent } from './testeo/testeo.component';
import { RandomComponent } from './random/random.component';
import { ColoresComponent } from './colores/colores.component';
import { FirmaComponent } from './firma/firma.component';
import { SobreNosotrosComponent } from './sobre-nosotros/sobre-nosotros.component';
import { LibrosComponent } from './libros/libros.component';
import { CabeceraComponent } from './cabecera/cabecera.component';
import { InicioComponent } from './inicio/inicio.component';
import { InformacionComponent } from './informacion/informacion.component';

const rutas: Routes = [
  { path: '', component: InicioComponent, pathMatch: 'full' },
  { path: 'listado-libros', component: LibrosComponent },  
  { path: 'informacion/:libroId', component: InformacionComponent },
  { path: 'informacion', redirectTo: '/' },
  { path: '**', redirectTo: '/' },
];




@NgModule({
  declarations: [
    AppComponent,
    TesteoComponent,
    RandomComponent,
    ColoresComponent,
    FirmaComponent,
    SobreNosotrosComponent,
    LibrosComponent,
    CabeceraComponent,
    InicioComponent,
    InformacionComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    RouterModule.forRoot(rutas),
  ],
  providers: [
    LibroclickedService
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
