# Ejercicio de Evaluación Final

#### (Módulo 2 -> Java Script)

[![Autor](https://img.shields.io/badge/github-Laura%20Carbajales-pink?style=for-the-badge&logo=github)](https://github.com/Laura-Carbajales)

### Enunciado

El ejercicio consiste en desarrollar una aplicación web de búsqueda de series de anime, que nos permite des/marcar las series como favoritas y guardarlas en local storage.

El ejercicio también tiene una parte de maquetación con HTML y Sass, os recomendamos dedicar esfuerzo a la maquetación una vez terminada la parte de JavaScript, ya que los criterios de evaluación están relacionados con esta última.

Vamos de definir los distintos hitos del ejercicio:

#### 1. Estructura básica

En primer lugar hay que realizar una estructura básica sobre este modelo. No hay que preocuparse por las medidas, colores ni tipografía hasta un hito posterior.

La aplicación de búsqueda de serie consta de dos partes:

- Un campo de texto y un botón para buscar series por su título.

- Un listado de resultados de búsqueda donde aparece el cartel de la serie y el título.

![diseño_buscador_series](https://user-images.githubusercontent.com/93197904/148049602-edab970d-518f-4a65-bdff-855c4e95c573.png)

#### 2. Búsqueda

Al hacer clic sobre el botón de Buscar, la aplicación debe conectarse al API abierto de Jikan para la búsqueda de series de anime. Para construir la URL de búsqueda hay que recoger el texto que ha introducido la usuaria en el campo de búsqueda.

Por cada serie contenido en el resultado de la búsqueda hay que pintar una tarjeta donde mostramos una imagen de la serie y el título.

Algunas de las series que devuelve el API no tienen imagen. En ese caso hay que mostrar una imagen de relleno.

Para pintar la información en la página se puede elegir entre hacerlo de forma básica coninnerHTML o manipulando de forma avanzada el DOM.

#### 3. Favoritos

Una vez aparecen los resultados de búsqueda, la usuaria puede indicar cuáles son sus series favoritas. Para ello, al hacer clic sobre una serie debe pasar lo siguiente:

- El color de fondo y el de fuente se intercambian, indicando que es una serie favorita.

- Hay que mostrar un listado en la parte izquierda de la pantalla, debajo del formulario de búsqueda, con las series favoritas. Os recomendamos crear un variable o constante de tipo array en JS para almacenar las series favoritas.

- Las series favoritas deben seguir apareciendo a la izquierda aunque la usuaria realice otra búsqueda.

#### 4. Almacenamiento Local

Hay que almacenar el listado de favoritos en el localStorage. De esta forma, al recargar la página el listado de favoritos se debe mostrarse.

#### 5. BONUS: Borrar favoritos

Como bonus, os proponemos la opción de borrar favoritos. Al hacer clic sobre el icono de una 'x' al lado de cada favorito, hay que borrar el favorito clicado de la lista y del localStorage.

Para terminar de rematar nuestra app de series, nos gustaría poder añadir/quitar como favorito al hacer clic sobre una serie del lado de la derecha. Y que, si realizamos una nueva búsqueda y sale una serie que ya es favorita, aparezca ya resaltada en los resultados de búsqueda (con colores de fondo y texto intercambiados).

Y ya sería fantástico si al final de la lista de favoritos hay un botón para borrarlos todos los favoritos a la vez.

#### 6. BONUS: Afinar maquetación

Una vez terminada la parte de interacción, podemos centrarnos en la parte de maquetación donde tenéis libertad para decidir los estilo. En cualquier caso os dejamos una propuesta gráfica.
