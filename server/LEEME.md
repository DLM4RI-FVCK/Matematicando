# Servidor de ejercicios

## Qué es el servidor

El servidor es un programa pequeño que entrega los ejercicios guardados en
`db.json` cuando la aplicación se los pide. No crea ejercicios nuevos: lee los
que ya están escritos en ese archivo. JSON Server hace ese trabajo sin que
tengamos que programar otro servidor.

## Cómo iniciarlo

1. Abre una terminal dentro de la carpeta del proyecto.
2. Ejecuta `npm run json-server`. Esto inicia JSON Server y le indica que lea
   `server/db.json` y use el puerto `3001`.
3. Deja esa terminal abierta: si la cierras, el servidor deja de responder.
4. Abre otra terminal y ejecuta `npm run dev` para iniciar la aplicación Nuxt.
5. En el navegador, abre la dirección que muestre Nuxt.

`localhost` significa "esta misma computadora". El número `3001` distingue al
servidor de ejercicios de Nuxt, que normalmente usa el puerto `3000`. La dirección
`http://localhost:3001/niveles` es el lugar al que la aplicación pide la lista de
temas y ejercicios. Si la abres en el navegador mientras JSON Server está activo,
puedes ver la lista completa.

En `package.json`, el texto después de `"json-server"` es el comando que se ejecuta:

- `json-server` inicia el programa JSON Server.
- `--watch server/db.json` le dice qué archivo debe leer y vigilar si lo editas.
- `--port 3001` le dice en qué puerto debe estar disponible.

El botón "Jugar" abre el diálogo, y el diálogo pide la lista al servidor. Al elegir
un tema y dificultad, la aplicación pone sus IDs en la dirección de la página del
juego. El juego lee esos IDs, vuelve a pedir la lista y muestra el ejercicio
correspondiente.

## Qué significa cada dato de `db.json`

- `niveles`: la lista de temas que aparecen en el menú.
- `id` del nivel: el nombre corto que usa el juego para encontrar ese tema.
- `nombre`: el nombre que ve la persona en pantalla.
- `dificultades`: las cinco opciones que aparecen al elegir un tema.
- `id` de dificultad: el nombre corto que permite encontrar esa dificultad.
- `nombre` de dificultad: el texto que aparece en el botón.
- `ejercicio`: la pregunta que se muestra en la página del juego.

Cada tema tiene un ejercicio sencillo de ejemplo en cada dificultad. El archivo
`db.json` se mantiene como JSON válido: ese formato no permite comentarios dentro
del propio archivo, por eso esta guía explica sus campos.

Para cambiar una pregunta, edita el texto de `ejercicio` en la dificultad que
quieras. Para agregar otra, copia una línea de dificultad dentro de `dificultades`
y cambia su `id`, su `nombre` y su `ejercicio`. Para agregar un tema, copia un
bloque de nivel y cambia su `id`, su `nombre` y la lista de dificultades. Respeta
las comas entre los elementos para que el archivo siga siendo JSON válido.
