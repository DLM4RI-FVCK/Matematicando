# MATEMATICANDO

MATEMATICANDO es una aplicación web educativa para practicar operaciones
matemáticas de forma visual e interactiva. En cada ronda aparece un ejercicio
aleatorio de suma, resta, multiplicación o división. La persona responde
agregando peces a una pecera hasta que la cantidad coincida con el resultado.
Al acertar, gana una estrella y puede continuar con otro ejercicio.

La aplicación también incluye una pantalla de inicio con el contador de
estrellas y una página de créditos. Está construida con Nuxt 4, Vue 3 y Vuetify.

## Cómo funciona

- La página **Inicio** presenta el contador de estrellas y permite abrir el
  juego o los créditos.
- La página **Juego** carga los ejercicios y escoge uno al azar. Se pueden
  agregar o quitar peces antes de comprobar la respuesta.
- Al responder correctamente, se intenta incrementar el progreso guardado y se
  puede avanzar al siguiente ejercicio.
- Los ejercicios y el progreso se sirven actualmente con JSON Server desde
  `server/db.json`.

## Requisitos

- Node.js y npm.
- Una copia del repositorio.

## Ejecutar localmente

Instala las dependencias:

```bash
npm install
```

Abre una terminal para iniciar la API local:

```bash
npm run json-server
```

Déjala ejecutándose. En otra terminal, desde la raíz del proyecto, inicia Nuxt:

```bash
npm run dev
```

Abre la dirección local que muestre Nuxt (normalmente
`http://localhost:3000`). La API JSON Server escucha en el puerto `3001`.

Para comprobar la compilación de producción:

```bash
npm run build
```

## Publicar en Vercel

Vercel puede desplegar la aplicación Nuxt desde el repositorio Git:

1. Sube el proyecto a GitHub, GitLab o Bitbucket. Comprueba que
   `package-lock.json` esté incluido en el repositorio.
2. Inicia sesión en [Vercel](https://vercel.com/) y selecciona **Add New... >
   Project**.
3. Importa el repositorio de MATEMATICANDO.
4. En la configuración del proyecto, deja la carpeta raíz como `./` (la raíz
   del repositorio) y selecciona el preset **Nuxt.js** si Vercel no lo detecta
   automáticamente.
5. Usa estos ajustes si necesitas configurarlos manualmente:
   - **Install Command:** `npm install`
   - **Build Command:** `npm run build`
   - **Output Directory:** deja el valor automático de Nuxt/Vercel; no escribas
     `public` ni `dist`.
6. No se requieren variables de entorno para la configuración actual del
   proyecto. Selecciona **Deploy**.
7. Al terminar, Vercel mostrará la URL pública. Puedes asociar un dominio
   propio desde **Settings > Domains**.

Los siguientes cambios enviados a la rama conectada también pueden generar
nuevos despliegues automáticamente.

### Importante: API necesaria para que el juego funcione en producción

El despliegue anterior publica el frontend, pero **no publica ni inicia
JSON Server**. Actualmente el juego y el contador llaman a
`http://localhost:3001`; en la web publicada, `localhost` es el dispositivo de
cada visitante, no tu computadora. Por eso, aunque el sitio se despliegue, los
ejercicios y el guardado de estrellas no funcionarán correctamente en Vercel.

Para que el juego funcione en producción, antes necesitas:

1. Alojar una API accesible públicamente que proporcione los ejercicios y el
   progreso. Debe soportar las operaciones `GET /ejercicios` (o
   `GET /sumas` como alternativa) y `GET`/`PATCH /progreso`.
2. Usar almacenamiento persistente para el progreso. No conviene depender de un
   archivo JSON dentro del despliegue: los despliegues y funciones serverless no
   deben tratarse como un disco persistente.
3. Configurar la aplicación para solicitar la URL pública de esa API, en vez de
   `http://localhost:3001`, y permitir desde la API las solicitudes del dominio
   de Vercel (CORS).
4. Volver a desplegar en Vercel y probar el juego desde la URL pública.

Este repositorio aún no tiene esa API de producción ni una variable de entorno
para su URL. Publicar solo el frontend permite ver la interfaz, pero no ofrece
una versión completa y funcional del juego. No pegues claves privadas en el
código del frontend; las credenciales, si las requiere el servicio de API,
deben gestionarse como variables de entorno en Vercel o en el backend.

## Datos del juego

Los ejercicios locales están en `server/db.json`, dentro de la colección
`ejercicios`. Cada elemento tiene un `id`, el texto del ejercicio y su
`respuesta` numérica. El objeto `progreso` guarda el total de estrellas en el
modo local. Para agregar o cambiar ejercicios, edita esa colección y conserva
el formato JSON válido.

## Tecnologías

- [Nuxt 4](https://nuxt.com/)
- [Vue 3](https://vuejs.org/)
- [Vuetify](https://vuetifyjs.com/)
- [JSON Server](https://github.com/typicode/json-server) para desarrollo local
