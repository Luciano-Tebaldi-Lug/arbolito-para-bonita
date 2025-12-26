// Sincronizar las letras con la canción
var audio = document.querySelector("audio");
var lyrics = document.querySelector("#lyrics");

// Array de objetos que contiene cada línea y su tiempo de aparición en segundos
var lyricsData = [
  { text: "I'm sure you feel it coming", time: 3},
  { text: "There's something on the breeze", time: 5},
  { text: "It mighht be slightly snowing", time:9},
  { text: "Or 70 degrees", time: 11 },
  { text: "Regardless of your hemisphere", time: 14 },
  { text: "The holidays are here", time: 17 },
  { text: "And with them come the tidings of", time: 21 },
  { text: "This special time of year", time: 25 },
  { text: "A bucket of fried chicken", time: 29 },
  { text: "A costume for your dad", time: 31 },
  { text: "A demon who will stuff you", time: 34 },
  { text: "In a sack if you've been bad", time: 36 },
  { text: "A reindeer gets promoted", time: 40 },
  { text: "An old man confronts his fear", time: 43},
  { text: "Of karma and mortality", time: 46 },
  { text: "This special time of year", time: 48 },
  { text: "Whatever makes you happy", time: 53 },
  { text: "Whatever gets you through", time: 56 },
  { text: "Whatever lets you know", time: 59 },
  { text: "That I am feeling this with you", time: 61 },
  { text: "If you believe it's special", time: 65 },
  { text: "Then that's what makes it special", time: 67 },
  { text: "It's a special", time: 71 },
  { text: "It's a special", time: 75 },
  { text: "It's our special time of year", time: 80 },
  { text: "Te amo ", time: 82},
  { text: "mi princesa", time: 84 },
  { text: "mi bonita", time:86 },
  { text: "espero que siempre puedas avanzar te amo", time: 88 },
];

// Animar las letras
function updateLyrics() {
  var time = Math.floor(audio.currentTime);
  var currentLine = lyricsData.find(
    (line) => time >= line.time && time < line.time + 4
  );

  if (currentLine) {
    // Calcula la opacidad basada en el tiempo en la línea actual
    var fadeInDuration = 0.1; // Duración del efecto de aparición en segundos
    var opacity = Math.min(1, (time - currentLine.time) / fadeInDuration);

    // Aplica el efecto de aparición
    lyrics.style.opacity = opacity;
    lyrics.innerHTML = currentLine.text;
  } else {
    // Restablece la opacidad y el contenido si no hay una línea actual
    lyrics.style.opacity = 0;
    lyrics.innerHTML = "";
  }
}

setInterval(updateLyrics, 1000);

//funcion titulo
// Función para ocultar el título después de 216 segundos
function ocultarTitulo() {
  var titulo = document.querySelector(".titulo");
  titulo.style.animation =
    "fadeOut 3s ease-in-out forwards"; /* Duración y función de temporización de la desaparición */
  setTimeout(function () {
    titulo.style.display = "none";
  }, 3000); // Espera 3 segundos antes de ocultar completamente
}

// Llama a la función después de 216 segundos (216,000 milisegundos)
setTimeout(ocultarTitulo, 216000);