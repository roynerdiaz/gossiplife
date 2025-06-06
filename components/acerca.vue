<script setup>
const { data } = await useFetch('/api/txt')
</script>

<template>
  <div class="p-4 bg-white rounded-lg shadow-md">
    <h2 class="text-xl font-bold mb-2">Mensaje del OVA</h2>
    <p class="mb-4">{{ data?.mensaje }}</p>

    <h3 class="text-lg font-semibold mb-1">Integrantes:</h3>
    <ul class="list-disc pl-6">
      <li v-for="(nombre, index) in data?.integrantes" :key="index">
        {{ nombre }}
      </li>
    </ul>
  </div>
</template>