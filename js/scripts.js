/*INSTRUCCIONES

- Localizar los elementos implicados del DOM
- Crear los datos del programa necesarios

FLUJO DEL PROGRAMA
 
  - Detectar dónde hacemos click (Si tenéis problemas al hacer click
porque detectáis cosas que no os interesan, podéis usar la propiedad
"pointer-events:none" en CSS para facilitaros la vida)
    - Guardar nuestra jugada done 
    - Generar una jugada aleatoria para el ordenador y guardarla done 
    - Comparar jugadas
    - Mostrar resultado
    - Asignar puntos*/

/*botones*/

const gameContainerElement = document.getElementById("game");
const playagainElement = document.getElementById("playagain");
/*tu resultado*/

const yourChoiceElement = document.getElementById("your-choice");
const pcChoiceElement = document.getElementById("pc-choice");
/*pc resultado*/
const scissorsResPcElement = document.getElementById("scissors-res-pc");
const paperResPcElement = document.getElementById("paper-res-pc");
const rockResPcElement = document.getElementById("rock-res-pc");
/*puntuaciones*/
const resultElement = document.getElementById("result-text");
const yourScoreElement = document.getElementById("your-score");
const pcScoreElement = document.getElementById("pc-score");
/*cajas*/
const startElement = document.getElementById("start");
const endElement = document.getElementById("end");
/*modal*/
const modalElement = document.getElementById("modal");
const rulesbuttonElement = document.getElementById("rulesbutton");

const rules = {
  scissors: {
    paper: true,
    rock: false,
  },
  rock: {
    scissors: true,
    paper: false,
  },
  paper: {
    rock: true,
    scissors: false,
  },
};

const gameIcons = {
  paper: "../assets/images/icon-paper.svg",
  rock: "../assets/images/icon-rock.svg",
  scissors: "../assets/images/icon-scissors.svg",
};

const pcOptions = ["paper", "rock", "scissors"];
/*Pc aleatorio*/

let youChoice = "";
let pcPlay = "";
let pcPoints = 0;
let youPoints = 0;

/*empezar*/
const showStart = () => {
  startElement.classList.remove("hidewindow");
  endElement.classList.add("hidewindow");
};

showStart();

const randomPlay = () => {
  /*genera la jugada aleatoria*/
  const random = Math.floor(Math.random() * pcOptions.length);
  pcPlay = pcOptions[random];
  pcChoiceElement.src = gameIcons[pcPlay];

  result();
};

/*muestre tu pick*/

const setPlayerChoice = (event) => {
  youChoice = event.target.dataset.item;
  yourChoiceElement.src = gameIcons[youChoice];

  console.log(youChoice);
  randomPlay();
};

/*Comparar jugadas */

const result = () => {
  if (youChoice === pcPlay) {
    resultElement.textContent = `IT'S A TIE`;
    return;
  }

  if (rules[youChoice][pcPlay]) {
    // GANAR
    console.log("GANAS");
  } else {
    // PERDER
    console.log("PIERDES");
  }

  startElement.classList.add("hidewindow");
  endElement.classList.remove("hidewindow");
};

gameContainerElement.addEventListener("click", setPlayerChoice);

/*mostrar y ocultar las cajas*/

playagainElement.addEventListener("click", showStart);
/*mostrar y ocultar las cajas*/

playagainElement.addEventListener("click", showStart);

/*modal*/

const showModal = () => {
  modalElement.classList.add("modal-show");
};

const hideModal = () => {
  modalElement.classList.remove("modal-show");
};

rulesbuttonElement.addEventListener("click", showModal);
modalElement.addEventListener("click", hideModal);
