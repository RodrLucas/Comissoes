//SELEÇÃO DO DOM
var titulo = document.querySelector(".titulo")
titulo.textContent = "Comissões"


var clientes = document.querySelectorAll(".cliente")

for(var i = 0; i < clientes.length; i++){
    var cliente = clientes[i]

    var tdValor = cliente.querySelector(".info-valor")
    var valor = parseInt(tdValor.textContent)

    var tdPorcentagem = cliente.querySelector(".info-porcentagem")
    var porcentagem = parseInt(tdPorcentagem.textContent)

    var tdComissao = cliente.querySelector(".info-comissao")

    var valorEhValido = validaValor(valor)
    var porcentagemEhValida = validarPorcentagem(porcentagem)


    if(!valorEhValido){
        console.log("Valor inválido")
        valorEhValido = false
        tdComissao.textContent = "Valor inválido"
        cliente.classList.add("cliente-invalido")
    }

    if(!porcentagemEhValida){
        console.log("Porcentagem inválida")
        porcentagemEhValida = false
        tdComissao.textContent = "Porcentagem inválida"
        cliente.classList.add("cliente-inválido")
    }

    if(valorEhValido && porcentagemEhValida) {
        var comissao = calculaComissao(valor, porcentagem)
        tdComissao.textContent = comissao
    }
}




//FUNÇÕES
function validaValor(valor){
    if(valor > 0) {
        return true
    } else {
        return false
    }
}

function validarPorcentagem(porcentagem){
    if (porcentagem >= 2){
        return true
    } else {
        return false
    }
}

function calculaComissao(valor, porcentagem){
    var comissao = 0
    comissao = (valor * porcentagem) / 100

    return parseFloat(comissao)
}