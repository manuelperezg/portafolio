import { Component } from '@angular/core';

/**
 * =================================================================================
 * Archivo: app.component.ts
 * Autor: José Manuel Pérez García
 * Descripción: Este es el componente raíz de la aplicación. Actúa como el
 *              contenedor principal para todos los demás componentes.
 * =================================================================================
 */

@Component({
  /**
   * El selector CSS que identifica a este componente en una plantilla.
   * En este caso, se usará como <app-root></app-root> en index.html.
   */
  selector: 'app-root',

  /**
   * La ruta al archivo de plantilla HTML para este componente.
   */
  templateUrl: './app.component.html',

  /**
   * Un array de rutas a los archivos de hojas de estilo para este componente.
   */
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  /**
   * El título de la aplicación. Aunque no se usa actualmente en la plantilla,
   * es una propiedad que podría ser utilizada para mostrar un título dinámico.
   */
	title = 'portafolio2';
}
