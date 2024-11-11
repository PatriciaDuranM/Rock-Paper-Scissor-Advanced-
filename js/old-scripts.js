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
const rockButtonElement = document.getElementById("rockbutton");
const paperButtonElement = document.getElementById("paperbutton");
const scissorsButtonElement = document.getElementById("scissorsbutton");
const playagainElement = document.getElementById("playagain");
/*tu resultado*/
const scissorsResYouElement = document.getElementById("scissors-res-you");
const paperResYouElement = document.getElementById("paper-res-you");
const rockResYouElement = document.getElementById("rock-res-you");
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
const rulebuttonElement = document.getElementById("rulesbutton");

/*Pc aleatorio*/

let youChoice = "";
let pcPlay = "";
let pcPoints = 0;
let youPoints = 0;

const pcOptions = ["paper", "rock", "scissors"];

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
  console.log(pcPlay);
  /*Muestre el resultado del pc*/
  if (pcPlay === "scissors") {
    scissorsResPcElement.classList.remove("hide");
    rockResPcElement.classList.add("hide");
    paperResPcElement.classList.add("hide");
  }
  if (pcPlay === "rock") {
    scissorsResPcElement.classList.add("hide");
    rockResPcElement.classList.remove("hide");
    paperResPcElement.classList.add("hide");
  }
  if (pcPlay === "paper") {
    scissorsResPcElement.classList.add("hide");
    rockResPcElement.classList.add("hide");
    paperResPcElement.classList.remove("hide");
  }

  result();
};

/*muestre tu pick*/

const showYouRock = () => {
  startElement.classList.add("hidewindow");
  endElement.classList.remove("hidewindow");
  paperResYouElement.classList.add("hide");
  scissorsResYouElement.classList.add("hide");
  rockResYouElement.classList.remove("hide");
  youChoice = "rock";
  randomPlay();
};

rockButtonElement.addEventListener("click", showYouRock);

const showYouPaper = () => {
  startElement.classList.add("hidewindow");
  endElement.classList.remove("hidewindow");
  rockResYouElement.classList.add("hide");
  scissorsResYouElement.classList.add("hide");
  paperResYouElement.classList.remove("hide");
  youChoice = "paper";
  randomPlay();
};

paperButtonElement.addEventListener("click", showYouPaper);

const showYouScissors = () => {
  startElement.classList.add("hidewindow");
  endElement.classList.remove("hidewindow");
  rockResYouElement.classList.add("hide");
  paperResYouElement.classList.add("hide");
  scissorsResYouElement.classList.remove("hide");
  youChoice = "scissors";
  randomPlay();
};

scissorsButtonElement.addEventListener("click", showYouScissors);

/*Comparar jugadas */

const result = () => {
  if (youChoice === pcPlay) {
    resultElement.textContent = `IT'S A TIE`;
  } else if (
    (youChoice === "rock" && pcPlay === "scissors") ||
    (youChoice === "scissors" && pcPlay === "paper") ||
    (youChoice === "paper" && pcPlay === "rock")
  ) {
    youPoints = youPoints + 1;
    yourScoreElement.textContent = youPoints;
    resultElement.textContent = `YOU WIN`;
  } else {
    pcPoints = pcPoints + 1;
    resultElement.textContent = `YOU LOSE`;
    pcScoreElement.textContent = pcPoints;
  }
};

/*mostrar y ocultar las cajas*/

playagainElement.addEventListener("click", showStart);

/*modal*/

const showModal = () => {
  modalElement.classList.add("modal-show");
};

const hideModal = () => {
  modalElement.classList.remove("modal-show");
};

rulebuttonElement.addEventListener("click", showModal);
modalElement.addEventListener("click", hideModal);
