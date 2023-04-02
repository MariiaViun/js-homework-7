import { galleryItems } from './gallery-items.js';
// Change code below this line

// console.log(galleryItems);

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


  const instance = basicLightbox.create(`<img src="${source}">`,
    {
      onShow: (instance) => {document.addEventListener("keydown", onKey);},
      onClose: (instance) => {document.removeEventListener("keydown", onKey);}
    })

  function onKey(evt) {
    evt.code === "Escape";
    instance.close();
  }
  
  instance.show();
}


