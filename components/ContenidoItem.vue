<template>
    <div v-if="item && item.contenido">
      <h2 class="text-xl font-bold mb-2">{{ item.titulo || 'Sin título' }}</h2>
      <p class="mb-4">{{ item.contenido }}</p>
      <p v-if="item.tipo" class="text-sm italic text-gray-500">Tipo: {{ item.tipo }}</p>
    </div>
    <div v-else>
      <p class="text-red-500">No hay contenido disponible.</p>
    </div>
  </template>
  
  <script setup>
  const props = defineProps({
    item: {
      type: Object,
      default: () => ({})
    }
  })
  </script>