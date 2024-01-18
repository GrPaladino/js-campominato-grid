// ## Al caricamento della pagina
const containerElement = document.getElementById("cell-container");
const playElement = document.getElementById("play");
const selectInput = document.getElementById("select-input");
const easyLevel = document.getElementById("input-100");
const mediumLevel = document.getElementById("input-81");
const hardLevel = document.getElementById("input-49");

generateGrid(containerElement);

const formInput = selectInput.value;
const easy = parseInt(easyLevel.value);
const medium = parseInt(mediumLevel.value);
const hard = parseInt(hardLevel.value);

// ## Alla pressione del tasto Play
playElement.addEventListener("click", function () {
  generateGridAdaptive(containerElement);
});

// ## ALLA SCELTA DELLA DIFFICOLTA'
let difficultyValue;

easyLevel.addEventListener("click", function () {
  difficultyValue = easy;
  console.log(difficultyValue);
  generateGridAdaptive(containerElement);
});

mediumLevel.addEventListener("click", function () {
  difficultyValue = medium;
  console.log(difficultyValue);
  generateGridAdaptive(containerElement);
});

hardLevel.addEventListener("click", function () {
  difficultyValue = hard;
  console.log(difficultyValue);
  generateGridAdaptive(containerElement);
});
