export default defineEventHandler(() => {
  const banco =  {
      preguntas: [
        {
          id: 1,
          enunciado: "¿Cuál de las siguientes disciplinas hace parte del modelo STEM+?",
          opciones: [
            "Literatura",
            "Filosofía",
            "Tecnología",
            "Historia"
          ],
          correcta: 2
        },
        {
          id: 2,
          enunciado: "¿Cuál es el objetivo principal del modelo STEM+?",
          opciones: [
            "Fomentar la lectura clásica",
            "Desarrollar competencias en ciencia, tecnología, ingeniería, arte y matemáticas",
            "Promover el deporte",
            "Reducir el uso de tecnología en el aula"
          ],
          correcta: 1
        }
      ]
    }

    return banco;
  })