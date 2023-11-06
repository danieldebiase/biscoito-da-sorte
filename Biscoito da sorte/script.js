// variáveis
const screen1 = document.querySelector(".screen1")
const screen2 = document.querySelector(".screen2")
const btnReset = document.querySelector("#btnReset")
const btnPassed = document.querySelector("#btnPassed")
const fortune = document.querySelector(".screen2 p")


// Eventos
btnPassed.addEventListener('click', function() {
  screen2.style.setProperty("display", "flex")
  screen1.style.setProperty("display", "none")
    // escolhe uma frase de sorte aleatória do array
    let randomFortune = fortunes[Math.floor(Math.random() * fortunes.length)];
    // coloca a frase de sorte no elemento p
    fortune.textContent = randomFortune;
  
})

// cria um array com algumas frases de sorte
const fortunes = [
  "Se alguém está tão cansado que não possa te dar um sorriso, deixa-lhe o teu.",
  "A vida trará coisas boas se tiveres paciência.",
  "Demonstre amor e alegria em todas as oportunidades e verás que a paz nasce dentro de você.",
  "Não compense na ira o que lhe falta na razão.",
  "Defeitos e virtudes são apenas dois lados da mesma moeda.",
  "A maior de todas as torres começa no solo.",
  "Não há que ser forte. Há que ser flexível.",
  "A gente todo dia arruma os cabelos, por que não o coração?",
  "Há três coisas que jamais voltam; a flecha lançada, a palavra dita e a oportunidade perdida.",
  "A juventude não é uma época da vida, é um estado de espírito."
]

// adiciona um evento de click no botão reset
btnReset.addEventListener("click", function() {
  // muda o valor da propriedade display para block
  screen1.style.setProperty("display", "flex");
  // muda o valor da propriedade display para none
  screen2.style.setProperty("display", "none");
})