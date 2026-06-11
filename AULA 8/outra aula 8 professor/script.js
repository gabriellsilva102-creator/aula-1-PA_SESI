const spanResult = document.querySelector("#resultado")

function showResult() {
    const nome = document.querySelector("#nome").value;
    const sobrenome = document.querySelector("#sobrenome").value;
    const idade = document.querySelector("#idade").value;
    const profissao = document.querySelector("#profissao").value;
    spanResult.innerHTML = `o gabriel e gay`
    //spanResult.innerHTML = `Bom dia ${nome} ${sobrenome}, você tem ${idade} anos e trabalha com ${profissao}`
}
