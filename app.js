let amigos = []

function adicionarAmigo() {
    const input = document.getElementById('amigo');
    let nome = input.value.trim();

    if (nome === '' || !isNaN(nome)) {
        alert('Por favor, insira um nome válido.');
        return;
    }

    amigos.push(nome);
    
}