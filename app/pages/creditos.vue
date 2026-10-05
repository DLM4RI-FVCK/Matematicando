<template>
  <!-- Contenedor que centra el contenido de créditos en pantalla -->
  <v-container class="contenedor-creditos" fluid>
    <v-row justify="center" align="center">
      <v-col cols="12" sm="8" md="6" lg="5">
        <!-- Tarjeta centrada con la lista de desarrolladores -->
        <v-card class="tarjeta-creditos">
          <!-- Título de la sección -->
          <h2 class="titulo-creditos">
            Desarrolladores
          </h2>

          <!-- Lista de nombres de los desarrolladores -->
          <v-list class="lista-autores">
            <v-list-item class="item-autor">
              <v-list-item-title class="nombre-autor">
                Mario Castro
              </v-list-item-title>
            </v-list-item>

            <v-list-item class="item-autor">
              <v-list-item-title class="nombre-autor">
                Kiara Corena
              </v-list-item-title>
            </v-list-item>

            <v-list-item class="item-autor">
              <v-list-item-title class="nombre-autor">
                Andrea Hernández
              </v-list-item-title>
            </v-list-item>
          </v-list>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>














<script setup>
// Define el diseño 'otros' para incluir la barra superior con botón de regreso
definePageMeta({
  layout: 'otros',
});
</script>











<style scoped>
/* Contenedor centrado */
.contenedor-creditos {
  min-height: calc(100vh - 150px);
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: none  ;
}

/* Tarjeta de créditos estilizada con sombra y bordes suaves */
.tarjeta-creditos {
  background: #ffffff !important;
  border-radius: 28px !important;
  border: 3px solid #e0f2fe !important;
  padding: 36px 28px !important;
  text-align: center !important;
  box-shadow: 0 12px 30px rgba(2, 132, 199, 0.12), 0 6px 0 #bae6fd !important;
}

/* Título de créditos */
.titulo-creditos {
  font-size: 2rem;
  font-weight: 900;
  color: #0284c7;
  margin-bottom: 24px;
}

/* Lista transparente */
.lista-autores {
  background: transparent !important;
  display: flex;
  flex-direction: column;
  gap: 12px;
  overflow: none  ;
}

/* Cada desarrollador con tarjeta individual */
.item-autor {
  background: #f8fafc !important;
  border: 2px solid #e2e8f0 !important;
  border-radius: 16px !important;
  transition: all 0.2s ease !important;
}

.item-autor:hover {
  cursor: grab;
  border-color: #38bdf8 !important;
  background: #f0f9ff !important;
}

/* Nombre del autor */
.nombre-autor {
  font-size: 1.15rem !important;
  font-weight: 800 !important;
  color: #1e293b !important;
}


</style>
