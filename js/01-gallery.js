import { galleryItems } from "./gallery-items.js";
// Change code below this line
const galleryList = document.querySelector(".gallery");

const galleryItemsMarkup = galleryItems
  .map(
    (img) => `
      <li class="gallery__item">
      <a class="gallery__link" href="${img.original}">
        <img
          class="gallery__image"
          src="${img.preview}"
          data-source="${img.original}"
          alt="${img.description}" 
          />
      </a>
      </li>
        `
  )
  .join("");

galleryList.insertAdjacentHTML("beforeend", galleryItemsMarkup);

galleryList.addEventListener("click", getBigImg);

function getBigImg(evt) {
  evt.preventDefault();
  if (evt.target.nodeName !== "IMG") {
    return;
  }
  const modalImg = basicLightbox.create(`
  <img src="${evt.target.dataset.source}">
`);
  modalImg.show();

  window.addEventListener("keydown", closeBigImg);
}

function closeBigImg(evt) {
  evt.preventDefault();
  if (evt.code === "Escape" || evt.code === "Enter" || evt.code === "Space") {
    modalImg.close();
    window.removeEventListener("keydown", closeBigImg);
  }
}

// ПИТАННЯ: ДЕ Я МОЖУ БАЧИТИ НАКОПИЧЕННЯ ОБРОБНИКІВ ПРО ЯКЕ ВИ ГОВОРИЛИ?
