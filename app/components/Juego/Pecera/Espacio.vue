<template>
  <v-row justify="center">
    <v-col cols="12">
      <!-- Tarjeta que funciona como la pecera visual -->
      <v-card class="pecera">
        <!-- Componente que dibuja los peces dentro de la pecera y escucha cuando se pulsa uno para eliminarlo -->
        <JuegoPeceraPescaditos :peces="peces" @eliminar="eliminar" />
      </v-card>
      
      <!-- Contenedor centrado para los botones de acción del juego -->
      <div class="caja-acciones">
        <!-- Botón para añadir un nuevo pez a la pecera -->
        <JuegoBoton texto="Agregar" class="boton-agregar" @agregar="agregar" />
        <!-- Botón para verificar si la cantidad de peces coincide con la respuesta del ejercicio -->
        <v-btn class="boton-comprobar" @click="comprobar">Comprobar</v-btn>
      </div>
    </v-col>
  </v-row>
</template>









<script setup>
// ref permite crear variables reactivas que actualizan la vista cuando su valor cambia
import { ref } from 'vue';

// Lista reactiva que almacena los peces actualmente presentes en la pecera
const peces = ref([]);

// Contador secuencial para asignar un identificador numérico único a cada pez
let siguienteId = 1;

// Declaración del evento personalizado 'comprobar' que se emite hacia el componente padre (videojuego.vue)
const emit = defineEmits(['comprobar']);

// Agrega un nuevo pez con su ID único al arreglo reactivo de peces
const agregar = () => {
  peces.value.push({ id: siguienteId++ });
};

// Filtra la lista de peces para eliminar únicamente el pez cuyo ID coincide con el recibido
const eliminar = (id) => {
  peces.value = peces.value.filter((pez) => pez.id !== id);
};

// Emite el evento 'comprobar' enviando la cantidad total actual de peces en la pecera
const comprobar = () => {
  emit('comprobar', peces.value.length);
};
</script>





















<style scoped>
/* Estilos de la pecera con gradiente de agua, efecto de profundidad y agrupación centrada */
.pecera {
  min-height: 290px;
  background: linear-gradient(180deg, #e0f2fe 0%, #bae6fd 60%, #7dd3fc 100%) !important;
  border: 4px solid #38bdf8 !important;
  border-radius: 26px !important;
  box-shadow: inset 0 6px 15px rgba(255, 255, 255, 0.6), 0 10px 24px rgba(2, 132, 199, 0.15) !important;
  display: flex !important;
  justify-content: center;
  align-items: center;
  align-content: center;
  flex-wrap: wrap;
  gap: 10px 14px;
  padding: 22px;
  transition: all 0.3s ease;
}

/* Contenedor de botones centrados */
.caja-acciones {
  display: flex;
  justify-content: center;
  gap: 16px;
  margin-top: 18px;
}

/* Botón 3D de Agregar pez */
.boton-agregar {
  background-color: #10b981 !important;
  color: #ffffff !important;
  font-weight: 800 !important;
  border-radius: 16px !important;
  height: 48px !important;
  padding: 0 24px !important;
  box-shadow: 0 5px 0 #059669 !important;
  transition: all 0.15s ease-in-out !important;
}

.boton-agregar:hover {
  transform: translateY(-2px);
  box-shadow: 0 7px 0 #059669 !important;
}

.boton-agregar:active {
  transform: translateY(3px);
  box-shadow: 0 2px 0 #059669 !important;
}

/* Botón 3D de Comprobar respuesta */
.boton-comprobar {
  background-color: #3b82f6 !important;
  color: #ffffff !important;
  font-weight: 800 !important;
  border-radius: 16px !important;
  height: 48px !important;
  padding: 0 24px !important;
  box-shadow: 0 5px 0 #1d4ed8 !important;
  transition: all 0.15s ease-in-out !important;
}

.boton-comprobar:hover {
  transform: translateY(-2px);
  box-shadow: 0 7px 0 #1d4ed8 !important;
}

.boton-comprobar:active {
  transform: translateY(3px);
  box-shadow: 0 2px 0 #1d4ed8 !important;
}
</style>
