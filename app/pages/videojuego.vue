<template>
  <!-- Contenedor principal que ocupa toda la pantalla y centra los elementos vertical y horizontalmente -->
  <v-container
    fluid
    class="fill-height d-flex align-center justify-center"
  >
    <v-row justify="center" align="center">
      <v-col cols="12" sm="10" md="8" lg="6">
        <v-row>
          <!-- Muestra el enunciado de la operación matemática actual -->
          <v-col cols="12">
            <JuegoEjercicios :ejercicio="mensajeejercicio" />
          </v-col>

          <!-- Componente de la pecera interactiva; se reinicia al cambiar peceraKey -->
          <v-col cols="12">
            <JuegoPeceraEspacio :key="peceraKey" @comprobar="comprobar" />
          </v-col>

          <!-- Mensaje de retroalimentación (verde si es correcto, rojo si es incorrecto) -->
          <v-col cols="12" v-if="mensaje" class="text-center">
            <h2 :class="esCorrecto ? 'text-green' : 'text-red'">
              {{ mensaje }}
            </h2>

            <!-- Botón para avanzar al siguiente ejercicio aleatorio cuando la respuesta es correcta -->
            <div v-if="esCorrecto" class="mt-4">
              <v-btn color="green" size="large" @click="siguienteEjercicio">
                Siguiente
              </v-btn>
            </div>
          </v-col>
        </v-row>
      </v-col>
    </v-row>
  </v-container>
</template>



































<script setup>
// onMounted ejecuta código al cargarse el componente; ref crea variables de estado reactivas
import { onMounted, ref } from "vue";

// Texto que muestra la pregunta u operación matemática actual
const mensajeejercicio = ref("Cargando ejercicio...");

// Almacena el número entero correspondiente a la solución correcta del ejercicio en pantalla
const respuestaCorrecta = ref(null);

// Texto de retroalimentación para el jugador ('¡Correcto! ⭐' o '¡Incorrecto!')
const mensaje = ref("");

// Bandera booleana que indica si el jugador resolvió con éxito el ejercicio actual
const esCorrecto = ref(false);

// Clave reactiva utilizada para forzar el reinicio limpio de la pecera al avanzar de ejercicio
const peceraKey = ref(0);

// Arreglo en memoria que guarda la lista completa de ejercicios descargados desde db.json
let listaEjercicios = [];

// Selecciona al azar un ejercicio de la lista, evitando repetir de inmediato el mismo ejercicio
const generarEjercicioAleatorio = () => {
  if (listaEjercicios && listaEjercicios.length > 0) {
    // Filtra para preferir ejercicios diferentes al que está actualmente en pantalla
    const disponibles =
      listaEjercicios.length > 1
        ? listaEjercicios.filter((s) => s.ejercicio !== mensajeejercicio.value)
        : listaEjercicios;
    
    // Obtiene un índice aleatorio dentro de las opciones disponibles
    const ejercicioAleatorio =
      disponibles[Math.floor(Math.random() * disponibles.length)];
    
    // Actualiza la pregunta visible y la respuesta numérica esperada
    if (ejercicioAleatorio) {
      mensajeejercicio.value = ejercicioAleatorio.ejercicio;
      respuestaCorrecta.value = ejercicioAleatorio.respuesta;
    }
  }
};

// Al montarse la página en el navegador, solicita los ejercicios al servidor local
onMounted(async () => {
  try {
    // Consulta la lista de ejercicios al json-server (puerto 3001)
    const ejercicios = await $fetch("http://localhost:3001/ejercicios").catch(() =>
      $fetch("http://localhost:3001/sumas")
    );
    listaEjercicios = ejercicios;
    // Genera el primer reto matemático aleatorio
    generarEjercicioAleatorio();
  } catch {
    // Manejo de error en caso de que el servidor no esté disponible
    mensajeejercicio.value = "No se pudo cargar el ejercicio.";
  }
});

// Compara si la cantidad de peces colocados coincide con la respuesta esperada
const comprobar = async (peces) => {
  if (peces === respuestaCorrecta.value) {
    // Respuesta correcta: muestra el mensaje de victoria y activa el botón de siguiente
    mensaje.value = "¡Correcto! ⭐";
    esCorrecto.value = true;
    
    try {
      // Consulta el total actual de estrellas en el archivo db.json
      const progreso = await $fetch("http://localhost:3001/progreso");
      const nuevasEstrellas = Number(progreso?.estrellas || 0) + 1;
      
      // Guarda el nuevo total de estrellas directamente en el archivo db.json mediante PATCH
      await $fetch("http://localhost:3001/progreso", {
        method: "PATCH",
        body: { estrellas: nuevasEstrellas },
      });
    } catch (e) {
      // Registro de error si la petición al servidor falla
      console.error("No se pudo guardar en el JSON:", e);
    }
  } else {
    // Respuesta incorrecta: muestra mensaje de error y redirige a la pantalla de inicio tras 1 segundo
    mensaje.value = "¡Incorrecto!";
    esCorrecto.value = false;
    setTimeout(() => {
      navigateTo("/");
    }, 1000);
  }
};

// Avanza a un nuevo reto manteniendo la victoria acumulada en el JSON
const siguienteEjercicio = () => {
  // Limpia el mensaje de retroalimentación
  mensaje.value = "";
  // Oculta el botón 'Siguiente' hasta la próxima comprobación
  esCorrecto.value = false;

  // Incrementa la clave para vaciar la pecera y dejarla con 0 peces
  peceraKey.value++;

  // Elige una nueva operación matemática aleatoria
  generarEjercicioAleatorio();
};

// Asigna la plantilla de diseño 'otros' (con barra superior y botón de retorno) a esta página
definePageMeta({
  layout: "otros",
});
</script>



























<style scoped>
</style>
