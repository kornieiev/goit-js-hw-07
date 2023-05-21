import { galleryItems } from "./gallery-items.js";
// Change code below this line

const gallery = document.querySelector(".gallery");
console.log(gallery);

const getMarkup = galleryItems
  .map(
    (img) => `
  <li class="gallery__item">
    <a class="gallery__link" href="${img.original}">
      <img class="gallery__image" src="${img.preview}" alt="${img.description}" />
    </a>
  </li>
  `
  )
  .join("");
console.log(getMarkup);

gallery.insertAdjacentHTML("beforeend", getMarkup);

gallery.addEventListener("click", getBigImg);
function getBigImg(e) {
  e.preventDefault();
  if (e.target.nodeName !== "IMG") {
    return;
  }
  console.log(e);
  const lightbox = new SimpleLightbox(".gallery a", {
    captionsData: "alt",
    captionDelay: 250,
    captionPosition: "outside",
  });
}
