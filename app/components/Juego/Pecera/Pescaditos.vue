<template>
  <!-- Renderiza un botón con icono de pez por cada elemento dentro del arreglo 'peces' -->
  <v-btn
    v-for="pez in peces"
    :key="pez.id"
    class="pez-animado"
    icon
    variant="text"
    @click="eliminar(pez.id)"
  >
    <!-- Icono visual del pez con tamaño óptimo para acomodarse bien en grupo -->
    <v-icon icon="mdi-fish" color="orange-darken-2" size="42" />
  </v-btn>
</template>









<script setup>
// Recibe desde el componente padre (Espacio.vue) el arreglo de peces a mostrar
defineProps({
  peces: {
    type: Array,
    required: true,
  },
});

// Declara el evento 'eliminar' para notificar al componente padre cuando se presiona un pez
const emit = defineEmits(['eliminar']);

// Ejecuta la emisión del evento 'eliminar' pasando el ID del pez seleccionado
const eliminar = (id) => {
  emit('eliminar', id);
};
</script>

















<style scoped>
/* Botón del pez con animación de entrada y nado sutil */
.pez-animado {
  width: 48px !important;
  height: 48px !important;
  min-width: 48px !important;
  filter: drop-shadow(0 3px 6px rgba(194, 65, 12, 0.25));
  animation: aparicionPez 0.35s ease-out, nadoPez 3s infinite ease-in-out;
  transition: transform 0.2s ease;
}

.pez-animado:hover {
  transform: scale(1.22) rotate(-8deg);
}

/* Animación de entrada al nacer el pez en la pecera */
@keyframes aparicionPez {
  0% {
    transform: scale(0);
    opacity: 0;
  }
  70% {
    transform: scale(1.25);
  }
  100% {
    transform: scale(1);
    opacity: 1;
  }
}

/* Animación de nado suave dentro del agua */
@keyframes nadoPez {
  0%, 100% {
    transform: translateY(0) rotate(0deg);
  }
  50% {
    transform: translateY(-4px) rotate(3deg);
  }
}
</style>
