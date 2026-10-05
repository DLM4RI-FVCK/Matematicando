<template>
  <!-- Botón reutilizable de Vuetify que muestra el texto recibido y dispara el evento al hacer clic -->
  <v-btn :text="texto" @click="agregar" />
</template>

<script setup>
// Define las propiedades de entrada del botón; permite personalizar el texto que muestra
defineProps({
  texto: {
    type: String,
    default: 'BotonSinTexto',
  },
});

// Declara el evento 'agregar' que se enviará al componente padre al hacer clic
const emit = defineEmits(['agregar']);

// Emite el evento 'agregar' hacia el componente padre
const agregar = () => {
  emit('agregar');
};
</script>

<style scoped>
</style>
