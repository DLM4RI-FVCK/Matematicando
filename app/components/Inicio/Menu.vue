<template>
  <!-- Contenedor que centra el menú de inicio en pantalla -->
  <v-container class="contenedor-inicio" fluid>
    <v-row justify="center" align="center">
      <v-col cols="12" sm="8" md="6" lg="4">
        <div class="tarjeta-inicio">
          <!-- Título principal del juego -->
          <h1 class="titulo-juego">
            MATEMATICANDO
          </h1>

          <!-- Muestra el número total de estrellas acumuladas leídas desde el archivo JSON -->
          <div class="contador-estrellas">
            ⭐ Estrellas: {{ estrellas }}
          </div>

          <!-- Botones de navegación a las pantallas de juego y créditos -->
          <div class="caja-botones">
            <v-btn text="Jugar" class="boton-jugar" to="/videojuego" />
            <v-btn text="creditos" class="boton-creditos" to="creditos" />
          </div>
        </div>
      </v-col>
    </v-row>
  </v-container>
</template>






<script setup>
// onMounted ejecuta la carga al montar el componente; ref almacena el conteo reactivo
import { onMounted, ref } from 'vue';

// Variable reactiva que almacena las estrellas conseguidas por el usuario
const estrellas = ref(0);

// Al entrar al menú de inicio, consulta las estrellas guardadas en el JSON
onMounted(async () => {
  try {
    // Petición al endpoint del servidor para obtener el progreso guardado
    const progreso = await $fetch('http://localhost:3001/progreso');
    // Asigna el número de estrellas o 0 si no existe aún
    estrellas.value = Number(progreso?.estrellas || 0);
  } catch {
    // Si no hay conexión con el servidor, inicializa en 0
    estrellas.value = 0;
  }
});
</script>















<style scoped>
/* Contenedor con altura completa y centrado */
.contenedor-inicio {
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
}

/* Tarjeta principal con sombra 3D y animación de entrada */
.tarjeta-inicio {
  background: #ffffff;
  border-radius: 28px;
  padding: 40px 30px;
  text-align: center;
  border: 3px solid #e0f2fe;
  box-shadow: 0 12px 30px rgba(2, 132, 199, 0.12), 0 6px 0 #bae6fd;
  animation: aparicionTarjeta 0.5s ease-out;
}

/* Título con colores vivos y sutil animación flotante */
.titulo-juego {
  font-size: 2.3rem;
  font-weight: 900;
  color: #0284c7;
  letter-spacing: 1px;
  margin-bottom: 16px;
  text-shadow: 0 2px 4px rgba(2, 132, 199, 0.15);
  animation: flotarTitulo 3s ease-in-out infinite;
}

/* Insignia dorada de estrellas conseguidas con pulso suave */
.contador-estrellas {
  display: inline-block;
  background: #fef9c3;
  color: #854d0e;
  font-size: 1.25rem;
  font-weight: 800;
  padding: 10px 22px;
  border-radius: 50px;
  border: 2px solid #fde047;
  box-shadow: 0 4px 10px rgba(234, 179, 8, 0.2);
  margin-bottom: 28px;
  animation: brillarContador 2.5s infinite ease-in-out;
}

/* Contenedor vertical de los botones */
.caja-botones {
  display: flex;
  flex-direction: column;
  gap: 16px;
}

/* Botón 3D de Jugar con efecto de clic */
.boton-jugar {
  background-color: #22c55e !important;
  color: #ffffff !important;
  font-size: 1.15rem !important;
  font-weight: 800 !important;
  height: 54px !important;
  border-radius: 18px !important;
  box-shadow: 0 6px 0 #15803d !important;
  transition: all 0.15s ease-in-out !important;
}

.boton-jugar:hover {
  transform: translateY(-2px);
  box-shadow: 0 8px 0 #15803d !important;
}

.boton-jugar:active {
  transform: translateY(4px);
  box-shadow: 0 2px 0 #15803d !important;
}

/* Botón 3D de Créditos con efecto de clic */
.boton-creditos {
  background-color: #0ea5e9 !important;
  color: #ffffff !important;
  font-size: 1.05rem !important;
  font-weight: 700 !important;
  height: 48px !important;
  border-radius: 18px !important;
  box-shadow: 0 5px 0 #0284c7 !important;
  transition: all 0.15s ease-in-out !important;
}

.boton-creditos:hover {
  transform: translateY(-2px);
  box-shadow: 0 7px 0 #0284c7 !important;
}

.boton-creditos:active {
  transform: translateY(4px);
  box-shadow: 0 1px 0 #0284c7 !important;
}

/* Animaciones */
@keyframes aparicionTarjeta {
  0% {
    opacity: 0;
    transform: scale(0.92) translateY(20px);
  }
  100% {
    opacity: 1;
    transform: scale(1) translateY(0);
  }
}

@keyframes flotarTitulo {
  0%, 100% {
    transform: translateY(0);
  }
  50% {
    transform: translateY(-6px);
  }
}

@keyframes brillarContador {
  0%, 100% {
    transform: scale(1);
  }
  50% {
    transform: scale(1.04);
  }
}
</style>
