const numeroLimite = 100;
let listaDeNumerosSorteados = [];
let numeroSecreto;
let tentativas;

function exibirTextoNaTela(tag, texto) {
    document.querySelector(tag).textContent = texto;
}

function exibirMensagem(mensagem) {
    exibirTextoNaTela('p', mensagem);
}

function exibirMensagemInicial() {
    exibirTextoNaTela('h1', 'Jogo do Número Secreto');
    exibirMensagem(`Escolha um número entre 1 e ${numeroLimite}`);
}

function exibirListaNumerosSorteados() {
    console.log('Lista de números sorteados:', listaDeNumerosSorteados.join(', '));
}

function verificarChute() {
    const chute = parseInt(document.querySelector('input').value);
    
    if (chute === numeroSecreto) {
        exibirTextoNaTela('h1', 'Acertou!');
        const plural = tentativas === 1 ? '' : 's';
        exibirMensagem(`Você descobriu o número secreto com ${tentativas} tentativa${plural}!`);
        exibirListaNumerosSorteados();
        document.getElementById('reiniciar').removeAttribute('disabled');
    } else {
        exibirMensagem(chute > numeroSecreto ? 'O número secreto é menor' : 'O número secreto é maior');
        tentativas++;
        limparCampo();
    }
}

function gerarNumeroAleatorio() {
    let numeroEscolhido;
    if (listaDeNumerosSorteados.length === numeroLimite) {
        listaDeNumerosSorteados = [];
    }
    do {
        numeroEscolhido = Math.floor(Math.random() * numeroLimite) + 1;
    } while (listaDeNumerosSorteados.includes(numeroEscolhido));
    listaDeNumerosSorteados.push(numeroEscolhido);
    return numeroEscolhido;
}

function limparCampo() {
    document.querySelector('input').value = '';
}

function reiniciarJogo() {
    numeroSecreto = gerarNumeroAleatorio();
    tentativas = 1;
    exibirMensagemInicial();
    document.getElementById('reiniciar').setAttribute('disabled', true);
}

exibirMensagemInicial();
reiniciarJogo();
