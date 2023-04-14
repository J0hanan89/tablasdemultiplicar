// Declarar variables globales
let tablaActual = 0;
let respuestaCorrecta = 0;

// Función para generar una pregunta aleatoria
function generarPregunta() {
  tablaActual = Math.floor(Math.random() * 9) + 2; // Generar número aleatorio entre 2 y 10
  let multiplicador = Math.floor(Math.random() * 9) + 1; // Generar número aleatorio entre 1 y 9
  respuestaCorrecta = tablaActual * multiplicador;
  let pregunta = `¿Cuánto es ${tablaActual} x ${multiplicador}?`;
  document.getElementById("pregunta").innerHTML = pregunta;
}

// Función para comprobar la respuesta del usuario
function comprobarRespuesta() {
  let respuestaUsuario = parseInt(document.getElementById("respuesta").value);
  let resultado = document.getElementById("resultado");
  if (respuestaUsuario === respuestaCorrecta) {
    resultado.innerHTML = "¡Felicidades, respuesta correcta!";
    resultado.style.color = "green";
    document.getElementById("siguiente").style.display = "block"; // Mostrar botón para siguiente pregunta
  } else {
    resultado.innerHTML = `Lo siento, respuesta incorrecta. La respuesta correcta es ${respuestaCorrecta}.`;
    resultado.style.color = "red";
  }
}

// Asignar eventos a los elementos de la página
document.addEventListener("DOMContentLoaded", function(event) {
  generarPregunta();
  document.querySelector("form").addEventListener("submit", function(event) {
    event.preventDefault(); // Evitar que el formulario se envíe
    comprobarRespuesta();
  });
  document.getElementById("siguiente").addEventListener("click", function(event) {
    event.preventDefault();
    document.getElementById("respuesta").value = ""; // Borrar la respuesta anterior
    generarPregunta();
    document.getElementById("resultado").innerHTML = ""; // Borrar el resultado anterior
    document.getElementById("siguiente").style.display = "none"; // Ocultar botón para siguiente pregunta
  });
});
