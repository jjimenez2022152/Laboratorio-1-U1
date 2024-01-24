// script.js

// Función para redireccionar al archivo seleccionado
function irA(archivo) {
    if (archivo) {
      window.location.href = archivo;
    }
  }
  
  // Asignar la función al evento onchange del menú desplegable
  document.getElementById('menuDesplegable').onchange = function () {
    irA(this.value);
  };
  