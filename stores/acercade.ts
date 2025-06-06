import { defineStore } from 'pinia'

export const useAcercaStore = defineStore('acercade', {
  state: () => ({
    mensaje: '',
    profesor: null,
    integrantes: [],
    modulo: null,
    fecha_creacion: '',
    error: null,
    pending: false
  }),

  actions: {
    async fetchAcercaDe() {
      this.pending = true
      try {
        const response = await $fetch('/api/acercade')
        this.mensaje = response.mensaje
        this.profesor = response.profesor
        this.integrantes = response.integrantes
        this.modulo = response.modulo
        this.fecha_creacion = response.fecha_creacion
      } catch (e) {
        this.error = 'Error al cargar los datos'
        console.error(e)
      } finally {
        this.pending = false
      }
    }
  }
})