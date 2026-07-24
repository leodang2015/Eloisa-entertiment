// --- CARRUSEL DE SERVICIOS ---

// Seleccionamos todas las tarjetas y los botones de flecha
const cards = document.querySelectorAll('.card');
const btnNext = document.querySelector('.next');
const btnPrev = document.querySelector('.prev');
let currentIndex = 0; // Índice de la tarjeta que se está viendo

// Función para quitar la clase 'activo' de todas y ponérsela a la actual
function updateCards(index) {
    cards.forEach(card => card.classList.remove('activo'));
    cards[index].classList.add('activo');
}

// Al hacer clic en 'Siguiente'
btnNext.addEventListener('click', () => {
    currentIndex = (currentIndex + 1) % cards.length; // Si llega al final, vuelve a 0
    updateCards(currentIndex);
});

// Al hacer clic en 'Anterior'
btnPrev.addEventListener('click', () => {
    currentIndex = (currentIndex - 1 + cards.length) % cards.length; // Si baja de 0, va al final
    updateCards(currentIndex);
});


// --- MODO DÍA / NOCHE ---

const themeToggle = document.getElementById('theme-toggle');

function toggleTheme() {
    // Agrega o quita la clase 'oscuro' al body
    document.body.classList.toggle('oscuro');
    
    // Cambia el icono del botón
    const isDark = document.body.classList.contains('oscuro');
    themeToggle.textContent = isDark ? '🌙' : '☀️';
}

// Ejecución automática por horario
const currentHour = new Date().getHours();
if (currentHour >= 18 || currentHour <= 6) {
    document.body.classList.add('oscuro'); // Si es tarde/noche, activa el modo oscuro
    themeToggle.textContent = '🌙';
}

themeToggle.addEventListener('click', toggleTheme);


// --- GALERÍA Y MODAL ---

const modal = document.getElementById('modal-galeria');
const modalImg = document.getElementById('modal-img');
const modalTitle = document.getElementById('modal-title');
const modalText = document.getElementById('modal-text');
const closeBtn = document.querySelector('.close-modal');

// Para cada imagen de la galería, escuchamos el clic
document.querySelectorAll('.gal-img').forEach(img => {
    img.addEventListener('click', () => {
        modal.style.display = 'flex'; // Mostramos el modal
        modalImg.src = img.src;      // Copiamos la ruta de la imagen
        modalTitle.textContent = img.dataset.titulo; // Leemos el título del HTML
        modalText.textContent = img.dataset.desc;    // Leemos la descripción
    });
});

// Cerrar al pulsar la X
closeBtn.addEventListener('click', () => {
    modal.style.display = 'none';
});

// Cerrar al pulsar en el fondo negro
window.onclick = (event) => {
    if (event.target == modal) {
        modal.style.display = 'none';
    }
};
