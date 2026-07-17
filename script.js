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

function aplicarModoNoche() {
    const hora = new Date().getHours();
    const esNoche = hora >= 15 || hora <= 6;
    
    document.body.classList.toggle("oscuro", esNoche);
    const hero = document.querySelector(".hero");
    if (hero) hero.classList.toggle("noche", esNoche);
}

aplicarModoNoche();
});
