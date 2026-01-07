import { Component, OnInit } from '@angular/core';

/**
 * =================================================================================
 * Archivo: home.component.ts
 * Autor: José Manuel Pérez García
 * Descripción: Este componente representa la página de inicio de la aplicación.
 *              Es la primera vista que el usuario ve al visitar el sitio.
 * =================================================================================
 */

@Component({
  /**
   * El selector CSS que identifica a este componente.
   */
  selector: 'home-component',

  /**
   * La ruta al archivo de plantilla HTML para este componente.
   */
  templateUrl: './home.component.html',

  /**
   * Un array de rutas a los archivos de hojas de estilo para este componente.
   */
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  /**
   * El constructor del componente. Se utiliza para la inyección de dependencias.
   */
  constructor() { }

  /**
   * Un hook del ciclo de vida que se llama después de que Angular ha inicializado
   * todas las propiedades del componente.
   */
  ngOnInit() {
  }

}
