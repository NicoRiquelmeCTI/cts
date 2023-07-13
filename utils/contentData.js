const contentData = [
  {
    title: 'objetivo principal del sistema',
    link: 'https://dcc.uc.cl',
    description:
      'El objetivo principal del sistema es registrar y analizar las respuestas de los estudiantes a quienes se les aplicará un instrumento de evaluación de habilidades.'
  },
  {
    title: 'Entidades u objetos clave dentro del sistema',
    link: 'https://dcc.uc.cl',
    description:
      'Estudio, Instrumentos, Ítems, Estudiantes, Investigadores, Profesores, Escuelas, Usuarios.'
  },
  {
    title: 'Relaciones entre las entidades',
    link: 'https://dcc.uc.cl',
    description:
      'El sistema debe registrar y analizar diferentes casos de estudio. Un estudio está compuesto por diferentes instrumentos aplicados a los estudiantes (un instrumento es una encuesta con preguntas de opción múltiple, donde cada pregunta tiene una puntuación entre 1 y 5). El estudio es llevado a cabo por un grupo de investigadores y profesores que observan diferentes grupos de estudiantes en una escuela. Los estudiantes, investigadores y profesores son personas que tienen un usuario para iniciar sesión..'
  },
  {
    title: 'Requisitos o restricciones específicas',
    link: 'https://auth0.com/docs/rules',
    description:
      "Un usuario solo tiene un tipo de persona relacionada, por ejemplo, un usuario solo está relacionado con un estudiante o un investigador, no ambos. Dos usuarios no pueden tener el mismo correo electrónico."
  }
];

export default contentData;
