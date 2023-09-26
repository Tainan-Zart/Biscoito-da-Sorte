const button = document.querySelector("#open")
const screen1 = document.querySelector('.screen1')
const screen2 = document.querySelector('.screen2')
const fraseAleatoriaDiv = document.querySelector("#fraseAleatoria"); 
const retornabiscoito = document.querySelector("#finish"); 

const frases = [
    "A vida trará coisas boas se tiver paciência",
    "Demonstre amor e alegria em todas as oportunidades e verá que a paz nasce dentro de si.",
    "Todos os dias organiza os seus cabelos, por que não faz o mesmo com o coração",
    "Espere pelo mais sábio dos conselhos: o tempo.",
    "O amor está mais próximo do que você imagina."
  ];

button.addEventListener('click', clickCk)

function clickCk() {
  screen1.classList.toggle('hide')
  screen2.classList.toggle('hide')
}

button.addEventListener('click', mostrarFraseAleatoria);

    function mostrarFraseAleatoria() {
      // Gerar um número aleatório para selecionar uma frase
      const numeroAleatorio = Math.floor(Math.random() * frases.length);
      const fraseSelecionada = frases[numeroAleatorio];

      // Exibir a frase na caixa div
      fraseAleatoriaDiv.textContent = fraseSelecionada;
    }

    retornabiscoito.addEventListener('click' , retornar);

    function retornar() {
        screen1.classList.toggle('hide')
        screen2.classList.toggle('hide')

    }





