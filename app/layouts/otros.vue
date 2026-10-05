<template>
  <!-- Estructura de plantilla con barra superior fija de navegación -->
  <v-app>
    <!-- Barra superior con espacio para los componentes de navegación -->
    <v-app-bar class="px-16" elevation="0" height="150">
      <OtrosNavPage />
    </v-app-bar>
    <!-- Contenido principal inyectado por las páginas hijas -->
    <v-main>
      <slot />
    </v-main>
  </v-app>
</template>

<script setup>
// Layout utilizado por las pantallas secundarias como videojuego y créditos
</script>

<style scoped>
</style>
