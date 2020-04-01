const signUpBtn = document.querySelector(".signUp");
const modalCloseBtn = document.querySelector(".modal__header__closeBtn");

const HIDDEN = "hidden";
const modalContainer = document.querySelector(".modal-container");

const handleClickSignUpBtn = () => {
  modalContainer.classList.toggle(HIDDEN);
};

const handleCloseBtn = () => {
  modalContainer.classList.toggle(HIDDEN);
};

function init() {
  signUpBtn.addEventListener("click", handleClickSignUpBtn);
  modalCloseBtn.addEventListener("click", handleCloseBtn);
}

init();
