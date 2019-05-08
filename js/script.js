$(window).ready(function(){
    const btnAside = $('.btn-aside');
    const asideMenu = $('.aside-menu');
    const botoesMenu = $('.menu-item');
    const btnTop = $('.btn-top');
    const servicosItem = $('.servicos-item');
    const servicosDesc = $('.servicos-desc');


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

    servicosItem.click(function() {
        let itemClicado = $(this);
        servicosItem.each((i, e) => $(e).removeClass('ativo'));
        let classe = $(this).data('desc');
        servicosDesc.each((i, e) => {
            if( $(e).hasClass(classe) ){
                if($(e).hasClass('exibe')){                  
                    $(e).css('height', '');
                    $(e).toggleClass('exibindo');
                    setTimeout(function() {
                        $(e).toggleClass('esconde');
                        $(e).toggleClass('exibe');
                        $(e).toggleClass('exibindo');
                    }, 500);
                }
                else {
                    $(e).toggleClass('esconde-fix');
                    let altura = $(e).height();                    
                    $(e).toggleClass('esconde-fix');
                    setTimeout(function() {
                        $(e).toggleClass('esconde');
                        $(e).toggleClass('exibindo');
                        $(e).toggleClass('exibe');
                    }, 40);
                    setTimeout(function() {
                        $(e).css('height', altura);
                        $(e).toggleClass('exibindo');
                    }, 50);
                    // setTimeout(function() {
                    //     $(e).css('height', '');
                    // }, 500);
                    itemClicado.addClass('ativo');
                }
            }
            else {
                $(e).addClass('esconde');
                $(e).removeClass('exibe');
                $(e).removeClass('exibindo');
                $(e).css('height', '');
            }
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