document.addEventListener("DOMContentLoaded", function() {

    var formulario = document.getElementById("formContacto");

    if (!formulario) {
        console.error("Error: No se encontró el formulario con id 'formContacto'");
        return;
    }

    formulario.addEventListener("submit", function(event) {
        // Evita que la página se recargue
        event.preventDefault();


        limpiarTexto("errorNombre");
        limpiarTexto("errorEmail");
        limpiarTexto("errorAsunto");
        limpiarTexto("errorMensaje");
        
        var cajaExito = document.getElementById("mensajeExito");
        if (cajaExito) {
            cajaExito.style.display = "none";
            cajaExito.textContent = "";
        }


        var nombre = obtenerValor("nombre");
        var email = obtenerValor("email");
        var asunto = obtenerValor("asunto");
        var mensaje = obtenerValor("mensaje");

        var esValido = true;

        if (nombre === "") {
            mostrarMensaje("errorNombre", "Por favor, escribe tu nombre.");
            esValido = false;
        } else if (nombre.length < 3) {
            mostrarMensaje("errorNombre", "El nombre debe tener al menos 3 caracteres.");
            esValido = false;
        }

        if (email === "") {
            mostrarMensaje("errorEmail", "El correo es obligatorio.");
            esValido = false;
        } else if (!email.includes("@") || !email.includes(".")) {
            mostrarMensaje("errorEmail", "Ingresa un correo válido.");
            esValido = false;
        }

        if (asunto === "") {
            mostrarMensaje("errorAsunto", "Por favor, ingresa un asunto.");
            esValido = false;
        }

        if (mensaje === "") {
            mostrarMensaje("errorMensaje", "El mensaje no puede estar vacío.");
            esValido = false;
        }else if (mensaje.length < 10) {
            mostrarMensaje("errorMensaje", "El mensaje debe tener al menos 10 caracteres.");
            esValido = false;
        }

        if (esValido) {
            if (cajaExito) {
                cajaExito.textContent = "¡Gracias! Tu mensaje ha sido enviado.";
                cajaExito.style.display = "block";
            }
            formulario.reset();
        }
    });

    function obtenerValor(id) {
        var el = document.getElementById(id);
        return el ? el.value.trim() : "";
    }

    function mostrarMensaje(id, texto) {
        var el = document.getElementById(id);
        if (el) el.textContent = texto;
    }

    function limpiarTexto(id) {
        var el = document.getElementById(id);
        if (el) el.textContent = "";
    }

});