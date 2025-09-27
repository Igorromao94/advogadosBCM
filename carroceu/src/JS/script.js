const radio_slide_selected = document.querySelectorAll('input[name="selecao_do_slide"]');
const container_slides = document.getElementById('slide_container')
const slideLargura = window.innerWidth;
const btn_manual = document.getElementsByName('btn_slide');

let indice_selecionado = 0;

function remover_selecao(indice_selecionado) {
    btn_manual[indice_selecionado].classList.remove('botao_slide_selecionado')
}

function adicionar_selecao(indice_selecionado) {
    btn_manual[indice_selecionado].classList.add('botao_slide_selecionado')
}

container_slides.addEventListener('scroll', () => {
    atualizarSlideSelecionado(container_slides.scrollLeft, slideLargura);
});

function atualizarSlideSelecionado(scrollPosition, slideWidth) {
    remover_selecao(indice_selecionado);
    
    const novoIndice = Math.round(scrollPosition / slideWidth);
    indice_selecionado = novoIndice;
    
    adicionar_selecao(indice_selecionado);
}

function proximo_slide() {
    remover_selecao(indice_selecionado);
    indice_selecionado = indice_selecionado++ >= 3 ? 0 : indice_selecionado++;
    container_slides.scrollLeft = (slideLargura*indice_selecionado);
    adicionar_selecao(indice_selecionado);
}

function voltar_slide() {
    remover_selecao(indice_selecionado);
    indice_selecionado = indice_selecionado-- <= 0 ? 3 : indice_selecionado--;
    container_slides.scrollLeft = slideLargura*indice_selecionado;
    adicionar_selecao(indice_selecionado);
}
let funcao_ja_chamada = 0;
const timerSlides = setInterval(proximo_slide, 3000);
console.log('primeiro',timerSlides)
function pausarERetomar(tempoDePausaEmSegundos) {
  // 1. Pausa o timer atual
  if (funcao_ja_chamada = 0) {
      clearInterval(timerSlides);
      
      // 2. Agenda a retomada após o tempo de pausa
      setTimeout(() => {
        console.log(`Retomando slideshow após ${tempoDePausaEmSegundos} segundos...`);
        timerSlides = setInterval(proximo_slide, 3000); // Reinicia
        proximo_slide(); // Avança imediatamente ao retomar (opcional)
        funcao_ja_chamada = 0;
      }, tempoDePausaEmSegundos * 1000); // Converte segundos para ms
  } else {
    console.log('A função ja foi execultada')
  }

  console.log(`quantidade de timeout ${timerSlides}`)
}

