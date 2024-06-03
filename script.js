// script.js

const preguntas = {
  facil: [
    {
      pregunta: "¿Cuál es la capital de España?",
      opciones: ["Madrid", "Barcelona", "Sevilla", "Valencia"],
      respuestaCorrecta: "Madrid",
      explicacionCorrecta: "Madrid es la capital de España desde 1561.",
      explicacionesIncorrectas: {
        "Barcelona": "Barcelona es la capital de Cataluña.",
        "Sevilla": "Sevilla es la capital de Andalucía.",
        "Valencia": "Valencia es la capital de la Comunidad Valenciana.",
      },
    },
    // ... más preguntas fáciles
  ],
  medio: [
    // ... preguntas de nivel medio
  ],
  dificil: [
    // ... preguntas de nivel difícil
  ],
};

let nivelDificultad = "";
let preguntaActual = 0;
let respuestasCorrectas = 0;

// Funciones para manejar eventos de los botones, mostrar preguntas, verificar respuestas, etc.
// ... (Este código se agregará en los siguientes pasos)
