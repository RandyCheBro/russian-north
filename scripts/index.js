const openButton = document.querySelector(".photo__button");
const closeButton = document.querySelector(".popup__close");
const popup = document.querySelector(".popup");

function openPopup() {
  popup.classList.add("popup_is-opened");
}

function closePopup() {
  popup.classList.remove("popup_is-opened");
}

openButton.addEventListener("click", openPopup);
closeButton.addEventListener("click", closePopup);
