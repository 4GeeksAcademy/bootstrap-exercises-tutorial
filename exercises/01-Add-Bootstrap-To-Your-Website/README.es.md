# `01` Agrega Bootstrap a tu Website

Hay dos formas de agregar Bootstrap a tu sitio web: Remoto o Local (como cualquier otro archivo CSS), la única diferencia será la ruta URL que especifiques en la etiqueta <link> (para los archivos .CSS de Bootstrap) o <script> etiqueta (para los archivos .JS de Bootstrap).

Así es como se realiza una importación remota de Bootstrap CSS:

```html
<link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css"
		integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T" crossorigin="anonymous" />

```


Nota: No se preocupe por las propiedades como "integrity" y "crossorigin", son necesarias por razones de seguridad.

Así es como agrega bootstrap desde un archivo local (que está en su lugar de trabajo):

```html
<link href="camino/hacia/tu/archivo" rel="stylesheet">
```


Nota: es una buena idea asegurarse de que tu archivo exista en esa URL, puedes probarlo abriendo una nueva pestaña del navegador y pegando la ruta en la URL del navegador (verás el contenido del archivo en tu pantalla).

Bootstrap se compone de 2 archivos: la hoja de estilo CSS y el código fuente Javascript.

El Stylesheet de CSS de Bootstrap <link> se pega en la etiqueta <head> antes que cualquier otra Stylesheet de CSS.

Las etiquetas <link> del código fuente de Javascript se pegan justo antes de la etiqueta de cierre </body>.

Para más información:
https://getbootstrap.com/docs/4.0/getting-started/introduction/

## 📝 Instrucciones:


1. Agrega estos enlaces a tu archivo para importar Bootstrap con éxito:

Bootstrap CSS StyleSheet:

```html
<link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css"
		integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T" crossorigin="anonymous" />
```
Javascript Source Code:

```html
<script src="https://code.jquery.com/jquery-3.3.1.slim.min.js" integrity="sha384-q8i/X+965DzO0rT7abK41JStQIAqVgRVzpbzo5smXKp4YfRvH+8abtTE1Pi6jizo" crossorigin="anonymous"></script>
<script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.14.7/umd/popper.min.js" integrity="sha384-UO2eT0CpHqdSJQ6hJty5KVphtPhzWj9WO1clHTMGa3JDZwrnQq4sF86dIHNDz0W1" crossorigin="anonymous"></script>
<script src="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/js/bootstrap.min.js" integrity="sha384-JjSmVgyd0p3pXB1rRibZUAYoIIy6OrQ6VrjIEaFf/nJGzIxFDsf4x0xIM+B07jRM" crossorigin="anonymous"></script>

```
El anchor (enlace) debe ser un botón rojo si todo salió bien.

