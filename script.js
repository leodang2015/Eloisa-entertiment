const cards = document.querySelectorAll(".card");

// Botones de flechas
const btnIzquierda = document.querySelector(".columna-1");
const btnDerecha = document.querySelector(".columna-2");

// Índice actual
let indice = 0;

// Función para mostrar tarjeta
function mostrarCard(index) {

    // Oculta todas
    cards.forEach(card => {
        card.classList.remove("activo");
    });

    // Muestra la actual
    cards[index].classList.add("activo");
}

// Flecha derecha
btnDerecha.addEventListener("click", () => {

    indice++;

    // Si llega al final vuelve al inicio
    if (indice >= cards.length) {
        indice = 0;
    }

    mostrarCard(indice);
});

// Flecha izquierda
btnIzquierda.addEventListener("click", () => {

    indice--;

    // Si pasa del inicio va al final
    if (indice < 0) {
        indice = cards.length - 1;
    }

    mostrarCard(indice);
});

let esNoche = false;

const boton = document.getElementById("cambiodedia");

function actualizarModo() {
    document.body.classList.toggle("oscuro", esNoche);

    const hero = document.querySelector(".hero");
    if (hero) {
        hero.classList.toggle("noche", esNoche);
    }

    boton.textContent = esNoche ? "☀️" : "🌙";
}

function aplicarModoNoche() {
    const hora = new Date().getHours();
    esNoche = hora >= 15 || hora <= 6;
    actualizarModo();
}

aplicarModoNoche();

boton.addEventListener("click", () => {
    esNoche = !esNoche;
    actualizarModo();
});

// ===========================
// MODAL GALERÍA
// ===========================
const galeriaImgs = document.querySelectorAll(".galeria-img");
const modalGaleria = document.getElementById("modal-galeria");
const modalImagen = document.getElementById("modal-imagen");
const modalTitulo = document.getElementById("modal-titulo");
const modalDesc = document.getElementById("modal-desc");
const modalCerrar = document.querySelector(".modal-cerrar");

galeriaImgs.forEach(img => {
    img.addEventListener("click", () => {
        modalImagen.src = img.getAttribute('src');
        modalImagen.alt = img.alt;
        modalTitulo.textContent = img.dataset.titulo;
        modalDesc.textContent = img.dataset.desc;
        modalGaleria.classList.add("activo");
        document.body.style.overflow = "hidden";
    });
});

modalCerrar.addEventListener("click", () => {
    modalGaleria.classList.remove("activo");
    document.body.style.overflow = "";
});

modalGaleria.addEventListener("click", (e) => {
    if (e.target === modalGaleria) {
        modalGaleria.classList.remove("activo");
        document.body.style.overflow = "";
    }
});
