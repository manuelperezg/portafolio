import { Component, OnInit } from '@angular/core';

/**
 * =================================================================================
 * Archivo: navbar.component.ts
 * Autor: José Manuel Pérez García
 * Descripción: Este componente representa la barra de navegación principal de la
 *              aplicación. Incluye enlaces a las diferentes secciones del sitio.
 * =================================================================================
 */

@Component({
  /**
   * El selector CSS que identifica a este componente.
   */
  selector: 'navba-component',

  /**
   * La ruta al archivo de plantilla HTML para este componente.
   */
  templateUrl: './navbar.component.html',

  /**
   * Un array de rutas a los archivos de hojas de estilo para este componente.
   */
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

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
