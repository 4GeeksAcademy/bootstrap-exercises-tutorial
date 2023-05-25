# `02` Esqueleto Bootstrap

Si quieres importar Bootstrap a tu sitio web, puedes usar esta URL pública que está disponible para todo el mundo:

```html
<link href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-EVSTQN3/azprG1Anm3QDgpJLIm9Nao0Yz1ztcQTwFspd3yD65VohhpuuCOmLASjC" crossorigin="anonymous">
```


Al usar Bootstrap, debes incluir todo su contenido dentro de las siguientes clases `container`:

```html
<div class="container"></div>
```
**O**

```html
<div class="container-fluid"></div>
```


## 📝 Instrucciones:


1. Vincula el hoja de estilos CSS de Bootstrap con el documento usando la etiqueta `link` que encuentras arriba.

2. Introduce el contenido del sitio web dentro de un `div` con clases de `container` y `bg-secondary`.

3. **Compila** y luego **Vista previa** del ejercicio y compara las diferencias.

4. Ahora cambia la clase del `div` que acabas de crear con las clases de `container-fluid` y `bg-secondary`.

5. **Compila** y luego **Vista previa** del ejercicio y compara las diferencias.


## :mag_right: Importante:

Para entender la diferencia entre ambas clases de `container`, debes hacer el contenedor `div` más pequeño y más grande. Hay `margin-left: auto` y `margin-right: auto` para centrar el contenedor; mientras que el contenido en la clase `container-fluid` se extiende a lo largo de todo el ancho de la página.



