export const useContenido = async () => {
    const { data, error } = await useFetch('')
  
    if (error.value) {
      console.error('Error al cargar el contenido', error.value)
    }
  
    return { data }
  }