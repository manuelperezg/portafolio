import { Component, OnInit } from '@angular/core';

/**
 * =================================================================================
 * Archivo: resumen.component.ts
 * Autor: José Manuel Pérez García
 * Descripción: Este componente representa la página de resumen o currículum.
 *              Muestra la experiencia profesional, habilidades y educación del autor.
 * =================================================================================
 */

@Component({
  /**
   * El selector CSS que identifica a este componente.
   */
  selector: 'app-resumen',

  /**
   * La ruta al archivo de plantilla HTML para este componente.
   */
  templateUrl: './resumen.component.html',

  /**
   * Un array de rutas a los archivos de hojas de estilo para este componente.
   */
  styleUrls: ['./resumen.component.css']
})
export class ResumenComponent implements OnInit {

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
