<template>
  <div class="p-4">
    <h1 class="text-2xl font-bold mb-4">Contenido Temático</h1>

    <v-alert v-if="store.pending" type="info" variant="tonal" class="mb-4">
      Cargando contenido...
    </v-alert>

    <v-alert v-if="store.error" type="error" variant="tonal" class="mb-4">
      {{ store.error }}
    </v-alert>

    <v-accordion v-if="!store.pending && !store.error">
      <v-accordion-item title="Introducción">
        <ContenidoItem :item="store.introduccion" />
      </v-accordion-item>

      <v-accordion-item title="¿Qué es STEM+?">
        <ContenidoItem :item="store.que_es_stem" />
      </v-accordion-item>

      <v-accordion-item title="Principios Orientadores">
        <ContenidoItem :item="store.principios_orientadores" />
      </v-accordion-item>

      <v-accordion-item title="Competencias Promovidas">
        <ContenidoItem :item="store.competencias_promovidas" />
      </v-accordion-item>

      <v-accordion-item title="Metodologías Activas">
        <ContenidoItem :item="store.metodologias_activas" />
      </v-accordion-item>

      <v-accordion-item title="Inclusión y Equidad">
        <ContenidoItem :item="store.inclusion_y_equidad" />
      </v-accordion-item>

      <v-accordion-item title="Aprendizaje Expandido">
        <ContenidoItem :item="store.aprendizaje_expandido" />
      </v-accordion-item>

      <v-accordion-item title="Objetivo General">
        <ContenidoItem :item="store.objetivo_general" />
      </v-accordion-item>
    </v-accordion>
  </div>
</template>

<script setup>
import { onMounted } from 'vue'
import { useContenidoStore } from '@/stores/contenido'
import ContenidoItem from '@/components/ContenidoItem.vue'

const store = useContenidoStore()

onMounted(() => {
  store.fetchContenido()
})
</script>