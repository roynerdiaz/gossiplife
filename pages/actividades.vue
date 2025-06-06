<template>
  <div>
    <h1>Actividades de Aprendizaje</h1>
    <p>Refuerza tus conocimientos a través de juegos y retos.</p>

    <v-alert type="info" variant="tonal" v-if="encuestaStore.preguntas.length === 0">
      Cargando preguntas o aún no disponibles.
    </v-alert>

    <div v-else>
      <div v-for="pregunta in encuestaStore.preguntas" :key="pregunta.id" class="my-6">
        <h3 class="font-bold">{{ pregunta.enunciado }}</h3>
        <v-radio-group
          v-model="encuestaStore.respuestas[pregunta.id]"
          @change="(val) => encuestaStore.responder(pregunta.id, val)"
        >
          <v-radio
            v-for="(opcion, index) in pregunta.opciones"
            :key="index"
            :label="opcion"
            :value="index"
          />
        </v-radio-group>
      </div>

      <v-btn color="primary" @click="encuestaStore.enviarRespuestas">
        Enviar Respuestas
      </v-btn>

      <div v-if="encuestaStore.calificacion !== null" class="mt-4">
        <v-alert type="success">
          Calificación: {{ encuestaStore.calificacion }} / {{ encuestaStore.preguntas.length }}
        </v-alert>
      </div>
    </div>
  </div>
</template>

<script setup>
import { onMounted } from 'vue'
import { useEncuestaStore } from '@/stores/encuesta'

const encuestaStore = useEncuestaStore()

onMounted(() => {
  encuestaStore.fetchPreguntas()
})
</script>