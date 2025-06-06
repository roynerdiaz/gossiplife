<template>
  <div class="pa-6">
    <h1 class="text-h5 font-weight-bold mb-4">Acerca del OVA</h1>
    <p class="mb-4">Información general sobre el proyecto, el profesor y los integrantes.</p>

    <!-- Estado de carga -->
    <v-alert type="info" variant="tonal" v-if="acercaStore.pending">
      Cargando datos del OVA...
    </v-alert>

    <!-- Estado de error -->
    <v-alert type="error" variant="tonal" v-else-if="acercaStore.error">
      {{ acercaStore.error }}
    </v-alert>

    <!-- Contenido principal -->
    <div v-else>
      <v-card class="mb-6" outlined v-if="acercaStore.mensaje">
        <v-card-title class="font-weight-bold">Mensaje</v-card-title>
        <v-card-text>{{ acercaStore.mensaje }}</v-card-text>
      </v-card>

      <v-card class="mb-6" outlined v-if="acercaStore.profesor">
        <v-card-title class="font-weight-bold">Profesor</v-card-title>
        <v-card-text>
          {{ acercaStore.profesor.nombre }} – {{ acercaStore.profesor.rol }}
        </v-card-text>
      </v-card>

      <v-card class="mb-6" outlined v-if="acercaStore.integrantes.length">
        <v-card-title class="font-weight-bold">Integrantes del equipo</v-card-title>
        <v-list>
          <v-list-item v-for="(nombre, i) in acercaStore.integrantes" :key="i">
            <v-list-item-content>{{ nombre }}</v-list-item-content>
          </v-list-item>
        </v-list>
      </v-card>

      <v-card class="mb-6" outlined v-if="acercaStore.modulo">
        <v-card-title class="font-weight-bold">Módulo</v-card-title>
        <v-card-text>
          <p><strong>Título:</strong> {{ acercaStore.modulo.titulo }}</p>
          <p><strong>Objetivo:</strong> {{ acercaStore.modulo.objetivo }}</p>
          <strong>Contenido:</strong>
          <v-list density="compact" v-if="acercaStore.modulo.contenido">
            <v-list-item v-for="(item, i) in acercaStore.modulo.contenido" :key="i">
              <v-list-item-content>{{ item }}</v-list-item-content>
            </v-list-item>
          </v-list>
        </v-card-text>
      </v-card>

      <div class="text-caption text-grey" v-if="acercaStore.fecha_creacion">
        Fecha de creación: {{ acercaStore.fecha_creacion }}
      </div>
    </div>
  </div>
</template>

<script setup>
import { onMounted } from 'vue'
import { useAcercaStore } from '@/stores/acercade'

const acercaStore = useAcercaStore()

onMounted(() => {
  acercaStore.fetchAcercaDe()
})
</script>
