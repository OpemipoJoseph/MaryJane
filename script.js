const card = document.getElementById('card');
const envelope = document.getElementById('envelope');
const noteTrigger = document.getElementById('noteTrigger');
const backBtn = document.getElementById('backBtn');
const galleryTrigger = document.getElementById('galleryTrigger');
const backBtnGallery = document.getElementById('backBtnGallery');
 
envelope.addEventListener('click', () => {
  card.classList.add('opened');
});
 
noteTrigger.addEventListener('click', () => {
  card.classList.add('show-note');
});
 
backBtn.addEventListener('click', () => {
  card.classList.remove('show-note');
});
 
galleryTrigger.addEventListener('click', () => {
  card.classList.add('show-gallery');
});
 
backBtnGallery.addEventListener('click', () => {
  card.classList.remove('show-gallery');
});
 const songTrigger = document.querySelector('.item-3');
const backBtnSong = document.getElementById('backBtnSong');

songTrigger.addEventListener('click', () => {
  card.classList.add('show-song');
});

backBtnSong.addEventListener('click', () => {
  card.classList.remove('show-song');
});
const lightbox = document.getElementById('lightbox');
const lightboxImg = document.getElementById('lightboxImg');

document.querySelectorAll('.polaroid img').forEach(img => {
  img.addEventListener('click', () => {
    lightboxImg.src = img.src;
    lightbox.classList.add('active');
  });
});

lightbox.addEventListener('click', () => {
  lightbox.classList.remove('active');
});