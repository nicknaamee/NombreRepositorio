# NombreRepositorio
Descripcion

## Ejecutar
Requiere Node.js 20.19 o superior (recomendado Node.js 22 LTS).

```bash
npm install
npm run dev
```
Abre la dirección que muestra Vite. No abrir los HTML con doble clic.

```bash
npm run build
npm run preview
```
`dist/` contiene la compilación para alojar en un servidor estático.

## Atomic Design
- `src/components/atoms/`: Boton, Entrada e Imagen.
- `src/components/molecules/`: CampoFormulario y TarjetaSugerencia.
- `src/components/organisms/`: navegación, encabezado, pie, formularios, modales y contenido.
- `src/components/templates/`: PlantillaPagina compone la estructura compartida.
- `src/components/pages/`: Inicio, Contacto, OtraPagina y BuzonSugerencias.
- `src/services/sugerencias.js`: persistencia y filtro original.
- `src/styles/style.css`: estilos originales; aislados del buzón, que originalmente solo usaba Bulma.
- `public/img/foca.jpeg`: imagen original sin modificaciones.

## Conservación del proyecto
Se mantienen textos, placeholders, imágenes, GIF, video, colores y clases originales. Bulma 1.0.2 se instala por npm para todas las páginas (el buzón original usaba 1.0.0). No se usa Bootstrap. React administra los eventos, campos y modales sin innerHTML ni listeners manuales de formularios. Las sugerencias siguen usando `misSugerencias` en localStorage; React las muestra como texto para evitar ejecutar HTML del usuario. Los enlaces a la segunda página se unifican en `pag2.html` para funcionar también en servidores que distinguen mayúsculas.

El contacto conserva la validación y confirmación local original: no envía correos ni requiere servidor. Los GIF y el video mantienen sus URL y necesitan Internet y disponibilidad de sus proveedores. Comic Sans se conserva; su disponibilidad depende del sistema del visitante.
