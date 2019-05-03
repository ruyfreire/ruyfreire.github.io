window.addEventListener('load', function(){
    const btnAside = document.querySelector('.btn-aside');
    const asideMenu = document.querySelector('.aside-menu');
    const botoesMenu = document.querySelectorAll(".menu-item");
    const btnTop = document.querySelector('.btn-top');
    let topPagina = document.body.scrollTop;
    botaoTopo();


    // evento click, links do menu
    for(let i = 0; i < botoesMenu.length; i++) {
        botoesMenu[i].addEventListener('click', function(event){
            event.preventDefault();
            let alvo = document.querySelector(this.children[0].getAttribute('href'));
            scrollSuave(alvo.offsetTop); 
        })
    }

    // evento click botao topo
    btnTop.addEventListener('click', function() {
        scrollSuave(0);
    })


    // evento click para abrir/fechar menu
    btnAside.addEventListener('click', function(){
        btnAside.classList.toggle('btn-aside-aberto');
        asideMenu.classList.toggle('aside-menu-aberto');
    });

    

    // evento scroll no body para exibir botao topo
    document.body.addEventListener('scroll', function() {
        topPagina = document.body.scrollTop;
        botaoTopo();
    });

    // executa scroll suuave
    function scrollSuave(alvo) {
        document.body.scrollTo({
            top: alvo,
            behavior: 'smooth'
        })
    }

    // inserir ou remover classe que esconde botao top
    function botaoTopo() {
        if(topPagina <= window.innerHeight) {
            btnTop.classList.add('invisivel');
        }
        if(topPagina > window.innerHeight) {
            btnTop.classList.remove('invisivel');
            btnAside.classList.remove('btn-aside-aberto');
            asideMenu.classList.remove('aside-menu-aberto');
        }
    }
});