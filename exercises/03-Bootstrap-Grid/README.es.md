---
tutorial: "https://youtu.be/OikbBoNvvps"
---

# `03` Bootstrap Grid

Ahora hablemos del *grid* (sistema de columnas y filas): como sabes, cada fila tiene **12 cajas** con un ancho de **8.33%** del sitio web, una columna puede ocupar de **1 a 12 espacios** de ancho, y todos dentro de la misma fila no pueden sumar más de **12 espacios**.

Con Bootstrap 5, simplemente tienes que agregar la clase `.col` y distribuirá automáticamente las columnas de manera uniforme en los 12 espacios dentro de la fila.

Si deseas que una columna ocupe un número específico de espacios, debes especificarlo en la propiedad `class` del `<div>` que contiene la columna.

Por ejemplo:

```html
<div class="col-2">.col-2</div>
<div class="col-4">.col-4</div>
<div class="col-6">.col-6</div>
```

En Bootstrap 5, la propiedad `justify-content` se agrega a las clases para mover las columnas a la posición deseada.

> Más información sobre el *grid*: https://getbootstrap.com/docs/5.0/layout/grid/


## 📝 Instrucciones:

1. Haz que la segunda fila tenga 3 columnas del mismo ancho (`width`) (divida la fila en 3).

2. Agrega una tercera fila con solo una columna de 12 espacios.

3. Cambia el color de fondo (`background-color`) de la fila recién creada a rojo (`red`), y agrega tu nombre adentro del `<div>`.

4. Cambia la clase del `<div>` principal de `container` a `container-fluid`.


## 💡 Pistas:

+ Establece las propiedades de clase de cada columna y especifica cuántos espacios deseas que tome cada columna.

+ Consulta la documentación de Bootstrap para cambiar el color de fondo a rojo.


## 💻 Resultado Esperado:

![Example Image](../../.learn/assets/03-bootstrap-grid-result.png?raw=true)
