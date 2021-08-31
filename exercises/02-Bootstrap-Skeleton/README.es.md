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

2. Introduce el contenido del sitio web dentro de un `div` con una clase `container`.

3. **Compila** y luego **Vista previa** del ejercicio y compara las diferencias.

4. Ahora cambia la clase del `div` que acabas de crear a `container-fluid`.

5. **Compila** y luego **Vista previa** del ejercicio y compara las diferencias.


## :mag_right: Importante:

Para comprender la diferencia entre ambas clases `container`, debes hacer que el `div` del `container` (el azul, en la parte inferior izquierda de la pantalla) sea más grande. 

La clase `container` no tiene márgenes (margins); mientras que en la clase `container-fluid` el contenido abarca todo el container.



