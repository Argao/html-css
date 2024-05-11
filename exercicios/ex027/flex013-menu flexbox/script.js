var estaClicado = false

function clickMenu() {
    var itens = document.getElementById('itens')

    if (estaClicado) {
        itens.style.display = 'none'
        estaClicado = false
    } else {
        itens.style.display = 'flex'
        estaClicado = true
    }
}

function verificaTamanho() {
    var itens = document.getElementById('itens')

    if (window.innerWidth > 580 || estaClicado){
        itens.style.display = 'flex'
    } else {
       itens.style.display = 'none'
    }
}


