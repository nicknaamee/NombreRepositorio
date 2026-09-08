document.addEventListener("DOMContentLoaded", function () {
    var formContacto = document.getElementById("formContacto");
    var modalExito = document.getElementById("modalExito");
    var cerrarModal = document.getElementById("cerrarModal");
    var modalBackground = modalExito ? modalExito.querySelector(".modal-background") : null;

    if (formContacto) {
        formContacto.addEventListener("submit", function (event) {
            event.preventDefault();

            var nombre = document.getElementById("nombre").value.trim();
            var email = document.getElementById("email").value.trim();
            var asunto = document.getElementById("asunto").value.trim();
            var mensaje = document.getElementById("mensaje").value.trim();

            var errorNombre = document.getElementById("errorNombre");
            var errorEmail = document.getElementById("errorEmail");
            var errorAsunto = document.getElementById("errorAsunto");
            var errorMensaje = document.getElementById("errorMensaje");

            // Reset errores
            if (errorNombre) errorNombre.textContent = "";
            if (errorEmail) errorEmail.textContent = "";
            if (errorAsunto) errorAsunto.textContent = "";
            if (errorMensaje) errorMensaje.textContent = "";

            var esValido = true;

            if (nombre === "") {
                if (errorNombre) errorNombre.textContent = "Por favor, ingresa tu nombre completo.";
                esValido = false;
            }

            if (email === "") {
                if (errorEmail) errorEmail.textContent = "Por favor, ingresa tu correo electrónico.";
                esValido = false;
            } else if (!email.includes("@")) {
                if (errorEmail) errorEmail.textContent = "Por favor, ingresa un correo válido.";
                esValido = false;
            }

            if (asunto === "") {
                if (errorAsunto) errorAsunto.textContent = "Por favor, ingresa un asunto.";
                esValido = false;
            }

            if (mensaje === "") {
                if (errorMensaje) errorMensaje.textContent = "Por favor, ingresa tu mensaje.";
                esValido = false;
            }

            if (esValido) {
                // Mostrar el modal agregando la clase 'is-active' de Bulma
                if (modalExito) {
                    modalExito.classList.add("is-active");
                }
                formContacto.reset();
            }
        });
    }

    // Ocultar modal al hacer clic en el botón Entendido
    if (cerrarModal && modalExito) {
        cerrarModal.addEventListener("click", function () {
            modalExito.classList.remove("is-active");
        });
    }

    // Ocultar modal al hacer clic en el fondo oscuro
    if (modalBackground && modalExito) {
        modalBackground.addEventListener("click", function () {
            modalExito.classList.remove("is-active");
        });
    }
});
