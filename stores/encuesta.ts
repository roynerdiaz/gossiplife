import { defineStore } from 'pinia'

export const useEncuestaStore = defineStore('encuesta', {
  state: () => ({
    preguntas: [],
    respuestas: {},
    calificacion: null,
    cargando: false,
  }),

  actions: {
    // Cargar las preguntas desde la API
    async fetchPreguntas() {
      this.cargando = true
      try {
        const response = await $fetch('/api/encuesta', { method: 'GET' })
        this.preguntas = response.preguntas
      } catch (error) {
        console.error('Error al cargar las preguntas:', error)
      } finally {
        this.cargando = false
      }
    },

    // Guardar una respuesta
    responder(preguntaId, opcionSeleccionada) {
      this.respuestas[preguntaId] = opcionSeleccionada
    },

    // Enviar respuestas para calificación (si decides hacerlo en el backend)
    async enviarRespuestas() {
      try {
        const response = await $fetch('/api/encuesta/respuestas', {
          method: 'POST',
          body: this.respuestas
        })
        this.calificacion = response.calificacion
      } catch (error) {
        console.error('Error al enviar respuestas:', error)
      }
    },

    // Reiniciar encuesta
    resetEncuesta() {
      this.respuestas = {}
      this.calificacion = null
    }
  }
})