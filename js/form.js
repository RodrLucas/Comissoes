var botaoAdicionar = document.querySelector("#adicionar-cliente")

botaoAdicionar.addEventListener("click", function(event){
    event.preventDefault() //Essa função irá previnir que ao clicar no botão a página reinicie

    var form = document.querySelector("#form-adiciona")

    var cliente = obtemCLienteDoFormulario(form)

    var erros = validaCliente(cliente)
    console.log(erros)

    if(erros.length > 0){
        exibeMensagemDeErro(erros)
        return
    }

    adicionaClienteNaTabela(cliente)

    form.reset()
    var mensagensErro = document.querySelector("#mensagens-erro")
    mensagensErro.innerHTML = ""
})





//FUNÇÕES
function adicionaClienteNaTabela(cliente){
    var clienteTr = montaTr(cliente)
    
    var tabela = document.querySelector("#tabela-clientes")
    tabela.appendChild(clienteTr)
}

function obtemCLienteDoFormulario(form){

    var cliente = {
        nome: form.nome.value,
        valor: form.valor.value,
        porcentagem: form.porcentagem.value,
        comissao: calculaComissao(parseInt(form.valor.value), parseInt(form.porcentagem.value))
    }
    return cliente
}

function montaTr(cliente){
    var clienteTr = document.createElement("tr")
    clienteTr.classList.add("cliente")

    clienteTr.appendChild(montaTd(cliente.nome, "info-nome"))
    clienteTr.appendChild(montaTd(cliente.valor, "info-valor"))
    clienteTr.appendChild(montaTd(cliente.porcentagem, "info-porcentagem"))
    clienteTr.appendChild(montaTd(cliente.comissao, "info-comissao"))

    return clienteTr
}

function montaTd(dado, classe){
    var td = document.createElement("td")
    td.textContent = dado
    td.classList.add(classe)

    return td
}

function validaCliente(cliente){
 var erros = [] //Declarar array

 if(cliente.nome.length == 0){
     erros.push("O nome não pode ser em branco")
 }
 if(!validaValor(cliente.valor)){
     erros.push("Valor inválido!")
 }
 if(cliente.valor.length == 0){
     erros.push("O valor não pode ser em branco")
 }
 if(!validarPorcentagem(cliente.porcentagem)){
     erros.push("Porcentagem inválida!")
 }
 if(cliente.porcentagem.length == 0){
    erros.push("A porcentagem não pode ser em branco")
 }



 return erros
}

function exibeMensagemDeErro(erros){
    var ul = document.querySelector("#mensagens-erro")
    ul.innerHTML = ""

    erros.forEach(function(erro){
        var li = document.createElement("li")
        li.textContent = erro
        ul.appendChild(li)
    })
}