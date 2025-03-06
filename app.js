let amigos = []

function adicionarAmigo() {
    const input = document.getElementById('amigo');
    let nome = input.value.trim();

    if (nome === '' || !isNaN(nome)) {
        alert('Por favor, insira um nome válido.');
        return;
    }

    amigos.push(nome);
    atualizarLista();
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