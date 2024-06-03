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
// ... (código anterior del objeto 'preguntas')

// Función para mostrar una pregunta
function mostrarPregunta() {
  const pregunta = preguntas[nivelDificultad][preguntaActual];
  document.getElementById("pregunta").textContent = pregunta.pregunta;
  const opciones = document.getElementById("opciones");
  opciones.innerHTML = ""; // Limpiar opciones anteriores
  pregunta.opciones.forEach((opcion) => {
    const button = document.createElement("button");
    button.textContent = opcion;
    button.addEventListener("click", verificarRespuesta);
    opciones.appendChild(button);
  });
}

// Función para verificar la respuesta seleccionada
function verificarRespuesta(event) {
  const respuestaSeleccionada = event.target.textContent;
  const pregunta = preguntas[nivelDificultad][preguntaActual];
  if (respuestaSeleccionada === pregunta.respuestaCorrecta) {
    respuestasCorrectas++;
  }
  mostrarExplicacion(pregunta, respuestaSeleccionada);
  preguntaActual++;
  if (preguntaActual < preguntas[nivelDificultad].length) {
    mostrarPregunta();
  } else {
    mostrarResultados();
  }
}

// Función para mostrar la explicación de la respuesta
function mostrarExplicacion(pregunta, respuestaSeleccionada) {
  const explicacion = document.getElementById("explicacion");
  explicacion.innerHTML = "";
  if (respuestaSeleccionada === pregunta.respuestaCorrecta) {
    explicacion.textContent = pregunta.explicacionCorrecta;
  } else {
    explicacion.textContent = pregunta.explicacionesIncorrectas[respuestaSeleccionada];
  }
}

// Función para mostrar los resultados finales
function mostrarResultados() {
  // ... (Código para mostrar los resultados en la página)
}

// Event listeners para los botones de nivel de dificultad
document.getElementById("facil").addEventListener("click", () => {
  nivelDificultad = "facil";
  preguntaActual = 0;
  respuestasCorrectas = 0;
  mostrarPregunta();
});

// ... (Event listeners similares para los botones "medio" y "dificil")
// ... (código anterior)

function mostrarResultados() {
  const resultados = document.getElementById("resultados");
  resultados.innerHTML = `<h2>Resultados:</h2>
    <p>Respuestas correctas: ${respuestasCorrectas}/${preguntas[nivelDificultad].length}</p>`;
  // Puedes agregar más detalles a los resultados, como mostrar las preguntas y respuestas correctas/incorrectas.
}

// ... (resto del código)
