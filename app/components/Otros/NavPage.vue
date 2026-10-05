<template>
  <!-- Barra de navegación superior con botón para retroceder y título del juego -->
  <v-row class="barra-navegacion">
    <!-- Componente del botón para regresar al inicio -->
    <OtrosBackbutton />
    <!-- Título principal en la barra superior -->
    <h1 class="titulo-navegacion">MATEMATICANDO</h1>
  </v-row>
</template>

<script setup>
// Componente de navegación visual
</script>

<style scoped>
/* Barra superior alineada con espacio */
.barra-navegacion {
  display: flex;
  align-items: center;
  gap: 20px;
}

/* Título de la barra de navegación */
.titulo-navegacion {
  font-size: 2rem;
  font-weight: 900;
  color: #0284c7;
  letter-spacing: 1px;
}
</style>
