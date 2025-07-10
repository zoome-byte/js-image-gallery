const mainImage = document.getElementById('mainImage');
const thumbnails = document.querySelectorAll('.thumbnails img');

thumbnails.forEach(thumbnail => {
  thumbnail.addEventListener('click', () => {
    const newSrc = thumbnail.getAttribute('src');
    mainImage.setAttribute('src', newSrc);
  });
});
