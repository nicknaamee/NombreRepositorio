document.getElementById("miFormulario").addEventListener("submit", function (event) {
    event.preventDefault();

    var campoTexto = document.getElementById("campoTexto");
    var inputTexto = campoTexto.value;
    var mensajeError = document.getElementById("mensajeError");

    if (inputTexto.trim() === "") {
        mensajeError.style.display = "block";
        return;
    } else {
        mensajeError.style.display = "none";
    }

    var palabrasProhibidas = ["tonto", "feo", "malo", "pesado", "wea", "guea", "huea", "mierda", "mueranse", "matense", "malos"];
    var textoMinusculas = inputTexto.toLowerCase();
    var tienePalabraMala = false;

    for (var i = 0; i < palabrasProhibidas.length; i++) {
        if (textoMinusculas.indexOf(palabrasProhibidas[i]) !== -1) {
            tienePalabraMala = true;
            break;
        }
    }

    if (tienePalabraMala) {
        document.getElementById("modalAdvertencia").classList.add("is-active");
        return;
    }

    var sugerencias = JSON.parse(localStorage.getItem("misSugerencias")) || [];
    sugerencias.push(inputTexto);
    localStorage.setItem("misSugerencias", JSON.stringify(sugerencias));

    campoTexto.value = "";
    document.getElementById("modalExito").classList.add("is-active");
});

document.getElementById("cerrarModal").addEventListener("click", function () {
    document.getElementById("modalExito").classList.remove("is-active");
});

document.getElementById("cerrarAdvertencia").addEventListener("click", function () {
    document.getElementById("modalAdvertencia").classList.remove("is-active");
});