$(window).ready(function(){
    const btnAside = $('.btn-aside');
    const asideMenu = $('.aside-menu');
    const botoesMenu = $('.menu-item');
    const btnTop = $('.btn-top');
    const servicosItem = $('.servicos-item');
    const servicosDesc = $('.servicos-desc');
    organizaDesc();


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

    $(window).resize(function(){
        organizaDesc();
    })

    function organizaDesc() {
        if($(window).width() < 375){
            for(let i = 0; i < servicosDesc.length; i++) {
                $(servicosItem[i]).append(servicosDesc[i]);
            }
        }
        if($(window).width() >= 375){
            for(let i = 0; i < servicosDesc.length; i++) {
                if(i == 0 || i == 1) $(servicosDesc[i]).insertAfter(servicosItem[1]);
                if(i == 2 || i == 3) $(servicosDesc[i]).insertAfter(servicosItem[3]);
                if(i == 4 || i == 5) $(servicosDesc[i]).insertAfter(servicosItem[5]);
            }
        }
        if($(window).width() >= 769){
            for(let i = 0; i < servicosDesc.length; i++) {
                if(i == 0 || i == 1 || i == 2) $(servicosDesc[i]).insertAfter(servicosItem[2]);
                if(i == 3 || i == 4 || i == 5) $(servicosDesc[i]).insertAfter(servicosItem[5]);
            }
        }
    }

    servicosItem.click(function(){
        let clicado = $(this);
        let alvo = $(this).data('desc');
        servicosDesc.each(function(i, e){
            if( !$(e).hasClass(alvo) && $(e).css('display') == 'block' ) {
                $(e).slideToggle(200);
            }
        });
        $('.'+alvo).slideToggle({
            queue: false
        });
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