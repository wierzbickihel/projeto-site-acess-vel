document.addEventListener('DOMContentLoaded', function(){
    const botaoAumentar = document.getElementById('aumentar-fonte');
    let tamanhoFonte = 1;

    botaoAumentar.addEventListener('click', function(){
        tamanhoFonte = tamanhoFonte + 0.1;
        document.body.style.fontSize = `${tamanhoFonte}rem`
    })
})