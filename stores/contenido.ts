import { defineStore } from 'pinia'

export const useContenidoStore = defineStore('contenido', {
  state: () => ({
    titulo: '',
    fuente: '',
    introduccion: null,
    que_es_stem: null,
    principios_orientadores: null,
    competencias_promovidas: null,
    metodologias_activas: null,
    inclusion_y_equidad: null,
    aprendizaje_expandido: null,
    objetivo_general: null,
    error: null,
    pending: false
  }),

  actions: {
    async fetchContenido() {
      this.pending = true
      try {
        const response = await $fetch('/api/contenido')
        this.titulo = response.titulo
        this.fuente = response.fuente
        this.introduccion = response.introduccion
        this.que_es_stem = response['que_es_stem+']
        this.principios_orientadores = response.principios_orientadores
        this.competencias_promovidas = response.competencias_promovidas
        this.metodologias_activas = response.metodologias_activas
        this.inclusion_y_equidad = response.inclusion_y_equidad
        this.aprendizaje_expandido = response.aprendizaje_expandido
        this.objetivo_general = response.objetivo_general
      } catch (e) {
        this.error = 'Error al cargar el contenido'
        console.error(e)
      } finally {
        this.pending = false
      }
    }
  }
})