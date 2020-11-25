# `03`  Sistema de Grillas de Bootstrap

Ahora hablemos de la grilla: como sabes, cada fila tiene 12 cuadros con un ancho de ~ 8% del sitio web, una columna puede ocupar de 1 a 12 espacios de ancho, y todos dentro de la misma fila no pueden sumar más de 12 espacios.


Con Bootstrap 4, simplemente tienes que agregar la clase **.Col** y distribuirá automáticamente las columnas de manera uniforme en los 12 espacios dentro de la fila.
Si deseas que una columna ocupe un número específico de espacios, debes especificarla en la propiedad **class** del **div** que contiene la columna.
Por ejemplo:

```html
<div class="col-2">.col-2</div>
<div class="col-4">.col-4</div>
<div class="col-6">.col-6</div>

```


En Bootstrap 4, la propiedad "justify-content" se agrega a las clases para mover las columnas a la posición deseada.

Más información de la grilla:
https://tutorialzine.com/2016/11/boostrap-4-regular-vs-flex-grid



## 📝 Instrucciones:


1. Haz que la segunda fila tenga 3 columnas del mismo ancho (divida la fila en 3).
2. Agrega una tercera fila con solo una columna de 12 espacios.
3. Cambia el color de fondo(background-color) de esta última fila a rojo.
4. Cambia el principal **container** a **container-fluid**

![Example Image](https://github.com/4GeeksAcademy/bootstrap-exercises-tutorial/blob/master/.learn/assets/1509892918783_38dc765ee66d5d7e4258e43e5f5dde8d.png?raw=true)

## 💡Pista:
Establece las propiedades de clase de cada columna y especifica cuántos espacios deseas que tome cada columna.
Consulta la documentación de Bootstrap para cambiar el color de fondo a rojo.