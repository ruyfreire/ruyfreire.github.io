$(window).ready(function(){
    const btnAside = $('.btn-aside');
    const asideMenu = $('.aside-menu');
    const botoesMenu = $('.menu-item');
    const btnTop = $('.btn-top');
    let topPagina = $('body').scrollTop();
    botaoTopo();


    // evento click, links do menu
    botoesMenu.each(function(i, e) {
        $(e).click(function(event){
            event.preventDefault();
            let alvo = $(this).children().attr('href');
            scrollSuave($(alvo).offset().top);
        });
    });

    // evento click botao topo
    btnTop.click(function(){scrollSuave(0)});


    // evento click para abrir/fechar menu
    btnAside.click(function() {
        btnAside.toggleClass('btn-aside-aberto');
        asideMenu.toggleClass('aside-menu-aberto');
    });

    

    // evento scroll no body para exibir botao topo
    $('body').scroll(function() {
        topPagina = $('body').scrollTop();
        botaoTopo();
    });

    // executa scroll suuave
    function scrollSuave(alvo) {
        $('html, body').animate({scrollTop: alvo}, 500);
    }

    // inserir ou remover classe que esconde botao top
    function botaoTopo() {
        if(topPagina < $(window).height()) {
            btnTop.addClass('invisivel');
        }
        if(topPagina >= $(window).height()) {
            btnTop.removeClass('invisivel');
            btnAside.removeClass('btn-aside-aberto');
            asideMenu.removeClass('aside-menu-aberto');
        }
    }
});