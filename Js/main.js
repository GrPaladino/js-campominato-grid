// ## Al caricamento della pagina
const containerElement = document.getElementById("cell-container");
const playElement = document.getElementById("play");
const selectInput = document.getElementById("select-input");
const easyLevel = document.getElementById("input-100");
const mediumLevel = document.getElementById("input-81");
const hardLevel = document.getElementById("input-49");

const formInput = selectInput.value;
const easy = parseInt(easyLevel.value);
const medium = parseInt(mediumLevel.value);
const hard = parseInt(hardLevel.value);

let difficultyValue = easy;
generateGrid(containerElement);

// ## VARIABILE GAMEOVER
let isGameOver = false;

// ## Alla pressione del tasto Play
playElement.addEventListener("click", function () {
  generateGrid(containerElement);
  isGameOver = false;
});

// ## ALLA SCELTA DELLA DIFFICOLTA'

easyLevel.addEventListener("click", function () {
  difficultyValue = easy;
  console.log(difficultyValue);
  generateGrid(containerElement);
  isGameOver = false;
});

mediumLevel.addEventListener("click", function () {
  difficultyValue = medium;
  console.log(difficultyValue);
  generateGrid(containerElement);
  isGameOver = false;
});

hardLevel.addEventListener("click", function () {
  difficultyValue = hard;
  console.log(difficultyValue);
  generateGrid(containerElement);
  isGameOver = false;
});

// ## CREAZIONE ARRAY DI BOMBE
const myArrayBomb = [];

const min = 1;
const max = difficultyValue;
const offset = max - min;
const elementsNumber = 16;

if (offset > elementsNumber) {
  while (myArrayBomb.length < 16) {
    let generateNumber = getRandomNumber(1, difficultyValue);

    if (!myArrayBomb.includes(generateNumber)) {
      myArrayBomb.push(generateNumber);
    }
  }
  console.table(myArrayBomb);
}

// ## CONTEGGIO DELLE CASELLE CLICCATE
let score = 0;
