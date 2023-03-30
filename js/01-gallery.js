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
      data-source="${original}"
      alt="${description}"/>
  </a>
</li>`);
gallery.insertAdjacentHTML('beforeend', markup.join(''))
}) ()

gallery.addEventListener("click", onClick);

function onClick(evt) {
    evt.preventDefault();

    if (!evt.target.classList.contains('gallery__image')) {
        return;
    }

    const currentCard = evt.target.closest('.gallery__image');
    const { source } = currentCard.dataset;
    const data = galleryItems.find(({ sourceImg }) => sourceImg === source);

    // console.log(source);

    const instance = basicLightbox.create(
        `<img class="gallery__image"
      src="${data.preview}"
      data-source="${data.original}"
      alt="${data.description}"/>
  </a>`)
    instance.show() 
}

