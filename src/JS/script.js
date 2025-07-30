let status_do_menu = true;
let coluna_1 = document.getElementById('colunas_1')
let coluna_2 = document.getElementById('colunas_2')
let coluna_3 = document.getElementById('colunas_3')
let caixa_de_nav = document.getElementById('Caixa_de_navegacao')
let link_menu = document.getElementsByClassName('link_alteravel')
let linksArray = Array.from(link_menu);
const radioButtons = document.querySelectorAll('input[name="radio_btn_slid"]');
const btn_manual = document.getElementsByName('btn_manual');
const slideLargura = window.innerWidth;
const carrossel = document.getElementById('slides');


carrossel.addEventListener('scroll', () => {
    console.log('Scroll horizontal atual:', carrossel.scrollLeft);
    switch (carrossel.scrollLeft) {
        case 0:
            document.querySelector('.slides').scrollTo({
                left: 0,
                behavior: 'smooth'
            });
            remover_marcacao()
            btn_manual[0].classList.add('manual-btn-selected')
            break;
        case slideLargura*1:
            document.querySelector('.slides').scrollTo({
                left: slideLargura*1,
                behavior: 'smooth'
            });
            remover_marcacao()
            btn_manual[1].classList.add('manual-btn-selected')
            break;
        case slideLargura*2:
            document.querySelector('.slides').scrollTo({
                left: slideLargura*2,
                behavior: 'smooth'
            });
            remover_marcacao()
            btn_manual[2].classList.add('manual-btn-selected')
            break;
        case slideLargura*3:
            document.querySelector('.slides').scrollTo({
                left: slideLargura*3,
                behavior: 'smooth'
            });
            remover_marcacao()
            btn_manual[3].classList.add('manual-btn-selected')
            break;

        default:
            console.log("Erro, esse indice é inexistente")
            break;
    }
});

function Abre_e_fecha_menu() {
    //Abrindo o menu
    if (status_do_menu) {
        status_do_menu= !status_do_menu
        coluna_1.classList.add('coluna_1_open')
        coluna_1.classList.remove('coluna_1_closed')
        coluna_2.classList.add('coluna_2_open')
        coluna_2.classList.remove('coluna_2_closed')
        coluna_3.classList.add('coluna_3_open')
        coluna_3.classList.remove('coluna_3_closed')

        caixa_de_nav.classList.add('caixa_M_open')
        caixa_de_nav.classList.remove('caixa_M_closed')
        caixa_de_nav.classList.remove('desativo')

        linksArray.forEach(function(link) {
            link.classList.add('link_alteravel_open');
            link.classList.remove('link_alteravel_closed');
        });

    } else{
    // Fechando o menu
        coluna_1.classList.add('coluna_1_closed')
        coluna_1.classList.remove('coluna_1_open')
        coluna_2.classList.add('coluna_2_closed')
        coluna_2.classList.remove('coluna_2_open')
        coluna_3.classList.add('coluna_3_closed')
        coluna_3.classList.remove('coluna_3_open')


        caixa_de_nav.classList.add('caixa_M_closed')
        caixa_de_nav.classList.remove('caixa_M_open')


        linksArray.forEach(function(link) {
            link.classList.add('link_alteravel_closed');
            link.classList.remove('link_alteravel_open');
        });

        status_do_menu= !status_do_menu
    }
}

function remover_marcacao() {
    for (let i = 0; i < btn_manual.length; i++) {
        btn_manual[i].classList.remove('manual-btn-selected')
    }
}

function selecionar_slide(){
// Adiciona o event listener a cada radio button
radioButtons.forEach((radio, index) => {
    radio.addEventListener('change', function() {
        if (this.checked) {
            for (let i = 0; i < btn_manual.length; i++) {
                btn_manual[i].classList.remove('manual-btn-selected')
            }
            btn_manual[index].classList.add('manual-btn-selected')
            switch (index) {
                case 0:
                    document.querySelector('.slides').scrollTo({
                        left: 0,
                        behavior: 'smooth'
                    });
                    btn_manual[0].classList.add('manual-btn-selected')
                    break;
                case 1:
                    document.querySelector('.slides').scrollTo({
                        left: slideLargura*1,
                        behavior: 'smooth'
                    });
                    btn_manual[1].classList.add('manual-btn-selected')
                    break;
                case 2:
                    document.querySelector('.slides').scrollTo({
                        left: slideLargura*2,
                        behavior: 'smooth'
                    });
                    btn_manual[2].classList.add('manual-btn-selected')
                    break;
                case 3:
                    document.querySelector('.slides').scrollTo({
                        left: slideLargura*3,
                        behavior: 'smooth'
                    });
                    btn_manual[3].classList.add('manual-btn-selected')
                    break;

                default:
                    console.log("Erro, esse indice é inexistente")
                    break;
            }
        }
    });
});
}
