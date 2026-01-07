import { Component, OnInit } from '@angular/core';

/**
 * =================================================================================
 * Archivo: contact.component.ts
 * Autor: José Manuel Pérez García
 * Descripción: Este componente representa la página de contacto de la aplicación.
 *              Suele contener un formulario de contacto o información para
 *              ponerse en contacto con el autor.
 * =================================================================================
 */

@Component({
  /**
   * El selector CSS que identifica a este componente.
   */
  selector: 'app-contact',

  /**
   * La ruta al archivo de plantilla HTML para este componente.
   */
  templateUrl: './contact.component.html',

  /**
   * Un array de rutas a los archivos de hojas de estilo para este componente.
   */
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {

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
