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

const handleClickWindow = e => {
  console.log(e.target);
  e.target === modalContainer ? modalContainer.classList.add(HIDDEN) : false;
};

function init() {
  signUpBtn.addEventListener("click", handleClickSignUpBtn);
  modalCloseBtn.addEventListener("click", handleCloseBtn);
  window.addEventListener("click", handleClickWindow);
}

init();
