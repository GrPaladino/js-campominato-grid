// - richiamo gli elementi da caricare al caricamento della pagina
// - alla pressione del tasto dovrò generare una griglia con le celle
// - al click sulla cella, la cella si colora di azzurro e stampo in console il numero della cella cliccata
// - applico gli eventuali bonus

// ## Al caricamento della pagina
const containerElement = document.getElementById("cell-container");
const playElement = document.getElementById("play");
generateGrid(containerElement);

// ## Alla pressione del tasto Play
playElement.addEventListener("click", function () {
  generateGrid(containerElement);
});
