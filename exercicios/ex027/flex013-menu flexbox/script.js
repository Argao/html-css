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


