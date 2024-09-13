let bird = new Audio("./sounds/birdl-37075.mp3");
let horse = new Audio("./sounds/caballo-ajedrez-95114.mp3");
let cat = new Audio("./sounds/cat-meow-14536.mp3");
let dog = new Audio("./sounds/dog-barking-70772.mp3");
let chicken = new Audio("./sounds/gallina-101521.mp3");
let sheep = new Audio("./sounds/sheep-sound-234960.mp3");

// Función para reproducir sonido
function playSound(sound) {
  sound.play();
  setTimeout(() => {
    sound.pause();
    sound.currentTime = 0;
  }, 1200);
}

// Eventos para los botones
document
  .getElementById("bird-btn")
  .addEventListener("click", () => playSound(bird));
document
  .getElementById("horse-btn")
  .addEventListener("click", () => playSound(horse));
document
  .getElementById("cat-btn")
  .addEventListener("click", () => playSound(cat));
document
  .getElementById("dog-btn")
  .addEventListener("click", () => playSound(dog));
document
  .getElementById("chicken-btn")
  .addEventListener("click", () => playSound(chicken));
document
  .getElementById("sheep-btn")
  .addEventListener("click", () => playSound(sheep));
