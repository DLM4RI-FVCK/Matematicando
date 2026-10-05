<template>
  <v-row justify="center">
    <v-col cols="12">
      <!-- Tarjeta centrada que presenta el texto de la operación matemática al usuario -->
      <v-card class="tarjeta-ejercicio"> 
        <p class="texto-ejercicio">{{ ejercicio || 'No hay ejercicio' }}</p>
      </v-card>
    </v-col>
  </v-row>
</template>

<script setup>
// Define la propiedad 'ejercicio', que recibe el enunciado matemático en forma de texto
defineProps({
  ejercicio: {
    type: String,
  },
});
</script>

<style scoped>
/* Tarjeta de ejercicio con bordes redondeados y relieve */
.tarjeta-ejercicio {
  background: linear-gradient(135deg, #ffffff 0%, #f0f9ff 100%) !important;
  border: 3px solid #bae6fd !important;
  border-radius: 24px !important;
  padding: 18px 24px !important;
  text-align: center !important;
  box-shadow: 0 8px 20px rgba(14, 165, 233, 0.1), 0 4px 0 #7dd3fc !important;
  animation: aparicionPregunta 0.4s ease-out;
}

/* Texto de la operación matemática en tamaño grande y visible */
.texto-ejercicio {
  font-size: 2.1rem;
  font-weight: 900;
  color: #0369a1;
  letter-spacing: 2px;
  margin: 0;
}

@keyframes aparicionPregunta {
  0% {
    opacity: 0;
    transform: translateY(-10px);
  }
  100% {
    opacity: 1;
    transform: translateY(0);
  }
}
</style>
