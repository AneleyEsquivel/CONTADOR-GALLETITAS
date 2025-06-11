
let clics = 0;
const maxClics = 1;

const galletita = document.getElementById("galletita");
const contador = document.getElementById("contador");
const barraProgreso = document.getElementById("barraProgreso");
const mensaje = document.getElementById("mensaje");
const botonReiniciar = document.getElementById("reiniciar");

galletita.addEventListener("click", () => {
  if (clics >= maxClics) return;

  clics++;
    // Cambiar imagen según el número de clics
  galletita.src = `galleta${clics}.png`;
  contador.textContent = `Galletitas comidas: ${clics}`;
  barraProgreso.style.width = (clics * 10) + "%";



  if (clics === maxClics) {
    barraProgreso.style.backgroundColor = "#4caf50"; // Cambia a verde
    mensaje.style.display = "block";
    galletita.style.pointerEvents = "none"; // Desactiva clics
    galletita.style.opacity = "0.5";
    botonReiniciar.style.display = "inline-block";
  }
});

botonReiniciar.addEventListener("click", () => {
  clics = 0;
  contador.textContent = "Galletitas comidas: 0";
  barraProgreso.style.width = "0%";
  barraProgreso.style.backgroundColor = "#ff9800";
  mensaje.style.display = "none";
  galletita.style.pointerEvents = "auto";
  galletita.style.opacity = "1";
  botonReiniciar.style.display = "none";

  // Reiniciar imagen
  galletita.src = `galleta${clics}.png`;
});

 