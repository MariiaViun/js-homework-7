import { galleryItems } from './gallery-items.js';
// Change code below this line

console.log(galleryItems);

const gallery = document.querySelector(".gallery");
(function () {
const markup = galleryItems.map(({ preview, original, description }) =>
    `<li class="gallery__item">
  <a class="gallery__link" href="${original}">
    <img
      class="gallery__image"
      src="${preview}"
      alt="${description}"/>
  </a>
</li>`);
    
gallery.insertAdjacentHTML('beforeend', markup.join(''))
})()

gallery.addEventListener("click", onClick);

function onClick(evt) {
    evt.preventDefault();
    
      if (!evt.target.classList.contains('gallery__image')) {
        return;
    }

  const lightbox = new SimpleLightbox('.gallery a', { captionsData: "alt",
    animationSpeed: 250,
    nav: true,
    close: true,
    animationSlide: true
  });
}
