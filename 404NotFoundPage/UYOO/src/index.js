const textBody = document.querySelector(".text-body");
const textColor = textBody.querySelector(".text-color");
const inputColorRange = document.querySelector(".color-range-slider");
const searchBtn = document.querySelector(".searchBtn");
const searchInput = document.querySelector(".searchInput");

// modal
const contact = document.querySelector(".contact");
const modal = document.querySelector(".modal");
const closeBtn = document.querySelector(".closeBtn");
const modalOverlay = document.querySelector(".modal-overlay");
const HIDDEN = "hidden";

// notFoundCard
const notFoundCard = document.querySelector(".notFoundCard h1");

//hsl to hex
const COLOR_HSL_MAX = 360;

const handleSearchBtn = event => {
  searchInput.focus();
};

const handleColorSlider = event => {
  const value = event.target.value;
  const hexValue = HSLToHex(value, 100, 50);
  textColor.innerText = hexValue;
  notFoundCard.style.color = hexValue;
};

const HSLToHex = (h, s, l) => {
  s /= 100;
  l /= 100;

  let c = (1 - Math.abs(2 * l - 1)) * s,
    x = c * (1 - Math.abs(((h / 60) % 2) - 1)),
    m = l - c / 2,
    r = 0,
    g = 0,
    b = 0;

  if (0 <= h && h < 60) {
    r = c;
    g = x;
    b = 0;
  } else if (60 <= h && h < 120) {
    r = x;
    g = c;
    b = 0;
  } else if (120 <= h && h < 180) {
    r = 0;
    g = c;
    b = x;
  } else if (180 <= h && h < 240) {
    r = 0;
    g = x;
    b = c;
  } else if (240 <= h && h < 300) {
    r = x;
    g = 0;
    b = c;
  } else if (300 <= h && h <= 360) {
    r = c;
    g = 0;
    b = x;
  }

  // Having obtained RGB, convert channels to hex
  r = Math.round((r + m) * 255).toString(16);
  g = Math.round((g + m) * 255).toString(16);
  b = Math.round((b + m) * 255).toString(16);

  // Prepend 0s, if necessary
  if (r.length == 1) r = "0" + r;
  if (g.length == 1) g = "0" + g;
  if (b.length == 1) b = "0" + b;

  return "#" + r + g + b;
};

const handleContactBtn = () => {
  modal.classList.remove(HIDDEN);
};

const handleCloseBtn = () => {
  modal.classList.add(HIDDEN);
};

function init() {
  const currInputValue = inputColorRange.value;
  const currentColorHex = HSLToHex(currInputValue, 100, 50);
  textColor.innerText = currentColorHex;
  //notFoundCard.style.color = currentColorHex;

  inputColorRange.addEventListener("input", handleColorSlider);
  searchBtn.addEventListener("click", handleSearchBtn);
  contact.addEventListener("click", handleContactBtn);
  closeBtn.addEventListener("click", handleCloseBtn);
  modalOverlay.addEventListener("click", handleCloseBtn);
}
init();
