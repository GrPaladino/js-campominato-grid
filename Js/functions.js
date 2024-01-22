// ## CHIEDI UN NUMERO
/**
 *
 * @param {string} msg Messaggio da stampare nel prompt
 * @returns {number} Numero fornito dall'utente
 */
function askNumber(msg = "Inserisci un numero") {
  let userNumber = parseInt(prompt(msg));

  while (isNaN(userNumber)) {
    userNumber = parseInt(prompt("Il numero inserito non é valido"));
  }

  return userNumber;
}

// ## GENERA UN NUMERO RANDOMICO
/**
 *
 * @param {number} min Il numero minimo
 * @param {number} max Il numero massimo
 * @returns Numero randomico tra il minimo e il massimo
 */
function getRandomNumber(min, max) {
  min = parseInt(min);
  max = parseInt(max);

  if (isNaN(min) || isNaN(max)) {
    console.error("I valori inseriti devono essere numerici");
    return;
  }

  if (min >= max) {
    console.error("Il valore massimo deve essere maggiore del valore minimo");
    return;
  }
  const randomNumber = Math.floor(Math.random() * (max - min + 1) + min);
  return randomNumber;
}

// ## ADDIZIONA
/**
 *
 * @param {numero} primoAddendo Il primo numero dell'addizione
 * @param {numero} secondoAddendo Il secondo numero dell'addizione
 * @returns
 */
function addiziona(primoAddendo, secondoAddendo) {
  const somma = primoAddendo + secondoAddendo;
  return somma;
}

// ## MOLTIPLICAZIONE
/**
 *
 * @param {numero} primoFattore Il primo numero da moltiplicare
 * @param {numero} secondoFattore Il secondo numero da moltiplicare
 * @returns Il risultato della moltiplicazione
 */
function moltiplica(primoFattore, secondoFattore) {
  let risultato = 0;

  for (let i = 0; i < secondoFattore; i++) {
    risultato = addiziona(risultato, primoFattore);
  }
  return risultato;
}

// ## GENERA CELLA NUMERATA ADAPTIVE
function generateGrid(container) {
  container.innerHTML = "";

  for (let i = 1; i <= difficultyValue; i++) {
    const cellElement = generateCellAdaptive(i);

    container.append(cellElement);
  }
}

// ## GENERA UNA GRIGLIA ADAPTIVE
function generateCellAdaptive(index) {
  const cell = document.createElement("div");

  cell.classList.add("cell-" + difficultyValue);
  cell.setAttribute("data-index", index);

  cell.addEventListener("click", function () {
    if (!isGameOver) {
      this.innerText = index;

      if (myArrayBomb.includes(index)) {
        this.classList.add("fail");
        alert("Hai perso!!1 Il tuo punteggio é: " + score);

        const allCells = document.getElementsByClassName(
          "cell-" + difficultyValue
        );
        for (let i = 0; i < allCells.length; i++) {
          const cell = allCells[i];
          const cellIndex = parseInt(cell.getAttribute("data-index"));
          if (myArrayBomb.includes(cellIndex)) {
            cell.classList.add("fail");
            cell.innerText = cellIndex;
          }
        }

        isGameOver = true;
      } else {
        this.classList.add("win");
        score++;
        if (score == difficultyValue - myArrayBomb.length) {
          alert("Hai vinto!!!!! Il tuo punteggio  é: " + score);
          isGameOver = true;
        }
      }
    }
  });

  return cell;
}
