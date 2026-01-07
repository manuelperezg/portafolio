# Portafolio de José Manuel Pérez

Este proyecto es un portafolio web personal para mostrar las habilidades, experiencia y proyectos de José Manuel Pérez, un Desarrollador Full-Stack.

El proyecto fue generado con [Angular CLI](https://github.com/angular/angular-cli) versión 7.3.8.

## Tecnologías Utilizadas

*   **Angular:** v7.2.14
*   **TypeScript:** v3.2.4
*   **HTML5 y CSS3**
*   **RxJS:** v6.5.1
*   **FontAwesome:** Para los iconos.
*   **Google Fonts:** Para la tipografía.

## Configuración y Puesta en Marcha Local

Sigue estos pasos para clonar y ejecutar el proyecto en tu máquina local.

### Prerrequisitos

Asegúrate de tener instalado [Node.js](https://nodejs.org/) (que incluye npm) en tu sistema.

### Pasos

1.  **Clona el repositorio:**
    ```bash
    git clone https://github.com/usuario/nombre-del-repositorio.git
    ```
    *(Reemplaza la URL con la URL real del repositorio)*

2.  **Navega al directorio del proyecto:**
    ```bash
    cd nombre-del-repositorio
    ```

3.  **Instala las dependencias:**
    ```bash
    npm install
    ```

4.  **Ejecuta el servidor de desarrollo:**
    ```bash
    npm start
    ```
    o también puedes usar el comando de Angular CLI:
    ```bash
    ng serve
    ```

5.  **Abre tu navegador:**
    Navega a `http://localhost:4200/`. La aplicación se recargará automáticamente si realizas cambios en los archivos fuente.

## Scripts Disponibles

En el archivo `package.json`, encontrarás los siguientes scripts:

*   `"start"`: Inicia el servidor de desarrollo.
*   `"build"`: Compila la aplicación para producción. Los artefactos se almacenarán en el directorio `dist/`. Usa `ng build --prod` para una compilación de producción optimizada.
*   `"test"`: Ejecuta las pruebas unitarias a través de [Karma](https://karma-runner.github.io).
*   `"lint"`: Revisa el código en busca de errores de estilo con TSLint.
*   `"e2e"`: Ejecuta las pruebas de extremo a extremo a través de [Protractor](http.www.protractortest.org/).

## Arquitectura del Proyecto

El código fuente principal se encuentra en la carpeta `src/`.

*   `src/app/components/pages`: Contiene los componentes que representan las páginas principales del sitio (Home, Contacto, Resumen).
*   `src/app/components/shared`: Contiene componentes reutilizables como la barra de navegación (`navbar`) y el pie de página (`footer`).
*   `src/assets`: Contiene los recursos estáticos como imágenes, fuentes y hojas de estilo de plugins.
*   `src/styles.css`: Contiene los estilos globales de la aplicación.
*   `src/index.html`: Es el punto de entrada principal de la aplicación.
