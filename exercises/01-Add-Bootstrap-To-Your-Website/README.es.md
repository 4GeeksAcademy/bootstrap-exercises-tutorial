# `01` Agrega Bootstrap a tu sitio web

Hay dos formas de agregar Bootstrap a tu sitio web: **Remoto** o **Local** (como cualquier otro archivo CSS), la única diferencia será la ruta URL que especifiques en la etiqueta <link> (para los archivos .CSS de Bootstrap) o la etiqueta <script> (para los archivos .JS de Bootstrap).

+ Así es como se realiza una importación **remota** de Bootstrap CSS:

```html
<link href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-EVSTQN3/azprG1Anm3QDgpJLIm9Nao0Yz1ztcQTwFspd3yD65VohhpuuCOmLASjC" crossorigin="anonymous">
```

### :mag_right: Importante:

 No te preocupes por las propiedades como `integrity` y `crossdomain`, son necesarias por razones de seguridad.

Así es como agrega bootstrap desde un archivo **local** (que está en su lugar de trabajo):

```html
<link href="camino/hacia/tu/archivo" rel="stylesheet">
```

### :mag_right: Importante

Es buena idea asegurarse de que tu archivo exista en esa URL, puedes probarlo abriendo una nueva pestaña del navegador y pegando la ruta en la URL del navegador (verás el contenido del archivo en tu pantalla).



Bootstrap se compone de 2 archivos: la hoja de estilo CSS y el código fuente Javascript.

La hoja de estilos CSS de Bootstrap se pega en la etiqueta <head> antes que cualquier otra hoja de estilos CSS.

Las etiquetas <link> del código fuente de Javascript se pegan justo antes de la etiqueta de cierre </body>.


### Para más información:

https://getbootstrap.com/docs/5.0/getting-started/introduction/


## 📝 Instrucciones:

1. Agrega estos enlaces a tu archivo para importar Bootstrap con éxito:

+ Hoja de estilos CSS Bootstrap:

```html
<link href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-EVSTQN3/azprG1Anm3QDgpJLIm9Nao0Yz1ztcQTwFspd3yD65VohhpuuCOmLASjC" crossorigin="anonymous">
```

+ Código fuente Javascript:

```html
<script src="https://cdn.jsdelivr.net/npm/@popperjs/core@2.9.2/dist/umd/popper.min.js" integrity="sha384-IQsoLXl5PILFhosVNubq5LC7Qb9DXgDA9i+tQ8Zj3iwWAwPtgFTxbJ8NT4GN1R8p" crossorigin="anonymous"></script>
<script src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/js/bootstrap.min.js" integrity="sha384-cVKIPhGWiC2Al4u+LWgxfKTRIcfu0JTxR+EQDz/bgldoEyl4H0zUF0QKbrJ0EcQF" crossorigin="anonymous"></script>
```

### :bulb: Pista:

El anchor (enlace) debe ser un botón rojo si todo salió bien.

