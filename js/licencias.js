// Obtener todas las tarjetas y botones
const cards = document.querySelectorAll('.card');
const buttons = document.querySelectorAll('.select-btn');

// Agregar evento click a cada botón
buttons.forEach((button, index) => {
  button.addEventListener('click', () => {
    // Quitar la clase 'selected' de todas las tarjetas
    cards.forEach((card) => card.classList.remove('selected'));

    // Agregar la clase 'selected' a la tarjeta correspondiente
    cards[index].classList.add('selected');
  });
});
