# Computational Thinking Scale Software

Plataforma web de consolidación y estudio de observaciones en la aplicación de las siguientes escalas para medir habilidades del siglo 21. 

0. Pensamiento computacional: adaptación al español de “The Computational Thinking Scale 
for Computer Literacy Education” desarrollada por los autores Tsai, M.-J., Liang, J.-C., & Hsu, 
C.-Y. (2021). Anexo D
1. Colaboración: Aplicación del simulador web desarrollado en la tesis doctoral del autor Matías 
Rojas. 
2. Grit: adaptación al español de la escala corta para medir grit propuesta por la autora Angela 
Lee Duckworth. Anexo A.
3. Creatividad: Aplicación de instrumento desarrollado por estudiantes de doctorado del 
profesor Nussbaum. Anexo B 
4. Pensamiento crítico: Aplicación del instrumento “A Procedure to Design Critical Thinking 
Assessment Instruments for Specific Cultures” propuesto por Felipe López, Et al. Anexo C. 

Proyecto en desarrollo de MVE (Minimum Viable Experiment)

![image of the home](/public/CTS_home.png)


### DOCKER-COMPOSE INSTRUCTIONS:

Al correr el docker-compose del directorio raiz, se levantarán contenedores para:

- Monolito de app web (Next.js + prisma ORM)
- Base de datos de postgres (prisma)

### Modelación del sistema

¿Cuál es el objetivo principal del sistema que deseas modelar?

El objetivo principal del sistema es registrar y analizar las respuestas de los estudiantes a quienes se les aplicará un instrumento de evaluación de habilidades.

¿Cuáles son las entidades u objetos clave dentro del sistema?

Estudio
Instrumentos
Ítems
Estudiantes
Investigadores
Profesores
Escuelas
Usuarios

¿Qué atributos o propiedades están asociados con cada entidad? 

Estudio: ID, name, instrumentos asociados.
Instrumentos: ID, título, descripción.
Ítems: ID, pregunta, puntuación.
Estudiantes: ID, nombre, apellido, fecha de nacimiento.
Investigadores: ID, nombre, apellido, área de investigación.
Profesores: ID, nombre, apellido, materia impartida.
Escuelas: ID, nombre, dirección.
Usuarios: ID, nombre de usuario, correo electrónico, contraseña.

(FALTA ACTUALIZAR EL ESCHEMA - actualmente es más básico)

¿Existen relaciones entre las entidades? 

El sistema debe registrar y analizar diferentes casos de estudio. Un estudio está compuesto por diferentes instrumentos aplicados a los estudiantes (un instrumento es una encuesta con preguntas de opción múltiple, donde cada pregunta tiene una puntuación entre 1 y 5). El estudio es llevado a cabo por un grupo de investigadores y profesores que observan diferentes grupos de estudiantes en una escuela. Los estudiantes, investigadores y profesores son personas que tienen un usuario para iniciar sesión.

¿Existen requisitos o restricciones específicas que deban considerarse al diseñar la base de datos? Un usuario solo tiene un tipo de persona relacionada, por ejemplo, un usuario solo está relacionado con un estudiante o un investigador, no ambos. Dos usuarios no pueden tener el mismo correo electrónico.

¿Tienes alguna preferencia por el sistema de gestión de bases de datos (por ejemplo, MySQL, PostgreSQL, MongoDB) que se utilizará? PostgreSQL con Prisma ORM.