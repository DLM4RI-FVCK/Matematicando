<template>
  <!-- Contenedor alineado para el botón de regreso a la pantalla principal -->
  <div class="caja-regreso">
    <!-- Botón rojo con icono de flecha hacia la izquierda que navega a la ruta raíz '/' -->
    <v-btn class="boton-regreso" icon="mdi-arrow-left" to="/" />
  </div>
</template>















<script setup>
// Este componente no requiere lógica de script adicional porque la navegación la gestiona el prop 'to' de Vuetify
</script>














<style scoped>
/* Contenedor del botón */
.caja-regreso {
  display: flex;
  align-items: center;
  justify-content: center;
}

/* Botón 3D de regreso circular con animación de pulsación */
.boton-regreso {
  background-color: #ef4444 !important;
  color: #ffffff !important;
  width: 50px !important;
  height: 50px !important;
  border-radius: 16px !important;
  box-shadow: 0 5px 0 #b91c1c !important;
  transition: all 0.15s ease-in-out !important;
}

.boton-regreso:hover {
  transform: translateY(-2px);
  box-shadow: 0 7px 0 #b91c1c !important;
}

.boton-regreso:active {
  transform: translateY(3px);
  box-shadow: 0 2px 0 #b91c1c !important;
}
</style>
