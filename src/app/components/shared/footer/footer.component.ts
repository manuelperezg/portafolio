import { Component, OnInit } from '@angular/core';

/**
 * =================================================================================
 * Archivo: footer.component.ts
 * Autor: José Manuel Pérez García
 * Descripción: Este componente representa el pie de página principal de la
 *              aplicación. Suele contener información de contacto, enlaces
 *              a redes sociales y avisos de copyright.
 * =================================================================================
 */

@Component({
  /**
   * El selector CSS que identifica a este componente.
   */
  selector: 'app-footer',

  /**
   * La ruta al archivo de plantilla HTML para este componente.
   */
  templateUrl: './footer.component.html',

  /**
   * Un array de rutas a los archivos de hojas de estilo para este componente.
   */
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {

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
