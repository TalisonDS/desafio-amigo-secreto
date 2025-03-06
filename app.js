let amigos = [];

function adicionarAmigo() {
    const input = document.getElementById('amigo');
    let nome = input.value.trim();

    if (nome === '' || !isNaN(nome)) {
        alert('Por favor, insira um nome válido.');
        return;
    }

    amigos.push(nome);
    atualizarLista();
    document.getElementById('amigo').value ='';
}

function atualizarLista() {
    let listaAtualizada = document.getElementById("listaAmigos");
    listaAtualizada.innerHTML = "";
    for (let i = 0; i < amigos.length; i++) {
        let itemLista = document.createElement("li");
        itemLista.innerHTML = amigos[i];
        listaAtualizada.appendChild(itemLista);
    }
}

function sortearAmigo() {
    if (amigos.length == 0) {
        alert('Por favor, insira um nome');
        return;
    }
    
    let indiceAleatorio = Math.floor(Math.random() * amigos.length);
    let sorteado = amigos[indiceAleatorio];
    document.getElementById('resultado').innerHTML = `O amigo secreto sorteado é: ${sorteado}`;
}

