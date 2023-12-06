
const images = document.querySelectorAll('.image-gallery img');
const modal = document.querySelector('.modal');
const modalImg = document.getElementById('modal-img');
const toggleButton = document.getElementById('toggleImages');

// Função para exibir ou ocultar as imagens
function toggleImages() {
  const imageGallery = document.querySelector('.image-gallery');
  if (imageGallery.style.display === 'none') {
    imageGallery.style.display = 'flex';
    toggleButton.textContent = 'Esconder Imagens';
  } else {
    imageGallery.style.display = 'none';
    toggleButton.textContent = 'Mostrar Imagens';
  }
}
toggleButton.addEventListener('click', toggleImages);




images.forEach(img => {
  img.addEventListener('click', () => {
    modal.style.display = 'block';
    modalImg.src = img.src;
  });
});


const closeModal = document.querySelector('.close');
closeModal.addEventListener('click', () => {
  modal.style.display = 'none';
});


window.addEventListener('click', event => {
  if (event.target === modal) {
    modal.style.display = 'none';
  }
});

