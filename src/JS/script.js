let status_do_menu = true;

let coluna_1 = document.getElementById('colunas_1')
let coluna_2 = document.getElementById('colunas_2')
let coluna_3 = document.getElementById('colunas_3')
let caixa_de_nav = document.getElementById('Caixa_de_navegacao')
let link_menu = document.getElementsByClassName('link_alteravel')
let linksArray = Array.from(link_menu);


function Abre_e_fecha_menu() {
    //Abrindo o menu
    if (status_do_menu) {
        console.log("Menu Esta Aberto")
        status_do_menu= !status_do_menu
        coluna_1.classList.add('coluna_1_open')
        coluna_1.classList.remove('coluna_1_closed')
        coluna_2.classList.add('coluna_2_open')
        coluna_2.classList.remove('coluna_2_closed')
        coluna_3.classList.add('coluna_3_open')
        coluna_3.classList.remove('coluna_3_closed')

        caixa_de_nav.classList.add('caixa_M_open')
        caixa_de_nav.classList.remove('caixa_M_closed')

        linksArray.forEach(function(link) {
            link.classList.add('link_alteravel_open');
            link.classList.remove('link_alteravel_closed');
        });

    } else{
    // Fechando o menu
        console.log("Menu Esta fechado")
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
