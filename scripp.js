let currentPlayer = "X";
let gameEnd = false;

const inicioBtn = document.getElementById('inicio');
inicioBtn.addEventListener('click', inicio);

const reinicioBtn = document.getElementById('reinicio');
reinicioBtn.addEventListener('click', reinicio);
function inicio() {
  jugadorActual = 'X';
  tablero = ['', '', '', '', '', '', '', '', ''];
  
  const celdas = document.querySelectorAll('.celda');
  for (let i = 0; i < celdas.length; i++) {
    celdas[i].textContent = '';
  }
}

function inicio() {
  jugador1 = document.getElementById('nombre-jugador-1').value;
  jugador2 = document.getElementById('nombre-jugador-2').value;
  
  jugadorActual = 'X';
  tablero = ['', '', '', '', '', '', '', '', ''];
    document.getElementById('nombre-jugador-1-texto').textContent = jugador1;
  document.getElementById('nombre-jugador-2-texto').textContent = jugador2;
  
  const celdas = document.querySelectorAll('.celda');
  for (let i = 0; i < celdas.length; i++) {
    celdas[i].textContent = '';
  }
}

let jugador1 = '';
let jugador2 = '';

function inicio() {
  jugador1 = document.getElementById('nombre-jugador-1').value;
  jugador2 = document.getElementById('nombre-jugador-2').value;
  
  jugadorActual = 'X';
  tablero = ['', '', '', '', '', '', '', '', ''];
  
  const celdas = document.querySelectorAll('.celda');
  for (let i = 0; i < celdas.length; i++) {
    celdas[i].textContent = '';
  }
}

function reinicio() {
  const celdas = document.querySelectorAll('.celda');
  for (let i = 0; i < celdas.length; i++) {
    celdas[i].textContent = '';
  }
}
const cells = document.querySelectorAll(".cells");
const winConditions = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
  ];
  

cells.forEach(cell => {
  cell.addEventListener("click", () => {
    if (gameEnd) {
      return;
    }
    if (cell.textContent === "") {
      cell.textContent = currentPlayer;
      if (checkWin()) {
        gameEnd = true;
        alert(`${currentPlayer} es el ganador!`);
      } else if (checkTie()) {
        gameEnd = true;
        alert("Excelente juego, es un empate!");
      } else {
        currentPlayer = currentPlayer === "X" ? "O" : "X";
      }
    }
  });
});

function checkWin() {
  return winConditions.some(condition => {
    return condition.every(index => {
      return cells[index].textContent === currentPlayer;
    });
  });
}

function checkTie() {
  return Array.from(cells).every(cell => {
    return cell.textContent !== "";
  });
}

let victoriasX = 0;
let victoriasO = 0;
function actualizarVictorias() {
  document.getElementById('victorias-x').textContent = victoriasX;
  document.getElementById('victorias-o').textContent = victoriasO;
}
function almacenarVictorias() {
  localStorage.setItem('victorias-x', victoriasX);
  localStorage.setItem('victorias-o', victoriasO);
}
function victoria(ficha) {
  if (ficha === 'X') {
    victoriasX++;
  } else {
    victoriasO++;
  }
  actualizarVictorias();
  almacenarVictorias();
  reiniciarJuego();
}
function cargarVictorias() {
  if (localStorage.getItem('victorias-x')) {
    victoriasX = parseInt(localStorage.getItem('victorias-x'));
    actualizarVictorias();
  }
  if (localStorage.getItem('victorias-o')) {
    victoriasO = parseInt(localStorage.getItem('victorias-o'));
    actualizarVictorias();
  }
}
function inicio() {
  cargarVictorias();
}
