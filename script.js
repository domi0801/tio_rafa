
// ===== ELEMENTOS DE LA PÁGINA =====
const sobre = document.getElementById("sobre");
const fotoGrande = document.getElementById("fotoGrande");
const cerrar = document.getElementById("cerrar");
const instruccion = document.getElementById("instruccion");

// ===== ABRIR Y CERRAR LA CARTA =====
function abrirCarta() {
    sobre.classList.add("abierto");
    sobre.setAttribute("aria-expanded", "true");
    instruccion.textContent = "Una pequeña sorpresa para ti ♡";
}

function cerrarCarta() {
    sobre.classList.remove("abierto");
    sobre.setAttribute("aria-expanded", "false");
    instruccion.textContent = "Toca el sobre para abrir tu cartita ♡";
}

// Al tocar el sobre, se abre la carta
sobre.addEventListener("click", function(event) {

    // Si se toca la X, se cierra la imagen
    if (event.target.closest("#cerrar")) {
        cerrarCarta();
        return;
    }

    // Si la carta ya está abierta, no hacer nada
    if (sobre.classList.contains("abierto")) {
        return;
    }

    abrirCarta();
});

// Permitir cerrar con la tecla Escape
document.addEventListener("keydown", function(event) {
    if (event.key === "Escape") {
        cerrarCarta();
    }
});
