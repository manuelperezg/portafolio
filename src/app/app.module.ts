import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/shared/navbar/navbar.component';
import { FooterComponent } from './components/shared/footer/footer.component';
import { HomeComponent } from './components/pages/home/home.component';
import { ContactComponent } from './components/pages/contact/contact.component';
import { ResumenComponent } from './components/pages/resumen/resumen.component';

/**
 * =================================================================================
 * Archivo: app.module.ts
 * Autor: José Manuel Pérez García
 * Descripción: Este es el módulo raíz de la aplicación (AppModule).
 *              NgModule describe cómo las partes de la aplicación encajan entre sí.
 *              Todo módulo de Angular está decorado con @NgModule.
 * =================================================================================
 */

@NgModule({
  /**
   * declarations: Un array de componentes, directivas y pipes que pertenecen a este módulo.
   * Aquí se registran todos los componentes que la aplicación utilizará.
   */
  declarations: [
    AppComponent,
    NavbarComponent,
    FooterComponent,
    HomeComponent,
    ContactComponent,
    ResumenComponent
  ],
  /**
   * imports: Un array de otros módulos cuyas clases exportadas son necesarias
   * para las plantillas de componentes declaradas en este módulo.
   * BrowserModule: Proporciona servicios esenciales para iniciar y ejecutar una aplicación de navegador.
   * AppRoutingModule: Gestiona las rutas de la aplicación.
   */
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  /**
   * providers: Un array de proveedores de servicios de inyección de dependencias.
   * Los servicios registrados aquí estarán disponibles para toda la aplicación.
   */
  providers: [],
  /**
   * bootstrap: El componente raíz de la aplicación que Angular crea e inserta
   * en la página anfitriona (index.html).
   */
  bootstrap: [AppComponent]
})
export class AppModule { }
