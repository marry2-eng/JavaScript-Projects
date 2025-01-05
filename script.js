let currentIndex = 0; 
const images = document.querySelectorAll('.gallery img');
const lightbox = document.getElementById('lightbox'); 
const lightboxImage = document.getElementById('lightboxImage');
function openLightbox(index)  {
 currentIndex = index;
  lightbox.style.display = 'flex';
  lightboxImage.src = images[currentIndex].src;
}
function closeLightbox() { 
  lightbox.style.display = 'none';
}
function prevImage() { 
  currentIndex = (currentIndex - 1 + images.length) % images.length; 
  lightboxImage.src = images[currentIndex].src;
}
function nextImage() { currentIndex = (currentIndex + 1) % images.length; 
                      lightboxImage.src = images[currentIndex].src; 
                     }
