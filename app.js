let amigos = [];

function nomeExibido(tag, texto) {
    let elemento = document.querySelector(tag);
    elemento.innerHTML = texto; 
}

function MsgInicial() {
    nomeExibido("h1", "Jogo do Amigo Secreto");
}

MsgInicial();

function adicionarAmigo() {
    let input = document.querySelector("input");
    let amigo = input.value.trim();

    if (amigo === "") return;

    if (amigos.includes(amigo)) {
        alert("Esse nome já foi adicionado.");
        return;
    }

    amigos.push(amigo);
    atualizarLista();
    input.value = "";
}

function atualizarLista() {
    const ul = document.getElementById("listaAmigos");
    ul.innerHTML = ""; 

    amigos.forEach(amigo => {
        const li = document.createElement("li");
        li.textContent = amigo;
        ul.appendChild(li);
    });
}

function sortearAmigo() {
    const resultado = document.getElementById("resultado");
    resultado.innerHTML = ""; 

    
    if (amigos.length < 3) {
        alert("Adicione pelo menos 3 amigos para sortear.");
        return;
    }


    const indiceSorteado = Math.floor(Math.random() * amigos.length);
    const nomeSorteado = amigos[indiceSorteado];

   
    const li = document.createElement("li");
    li.textContent = `🎉 ${nomeSorteado} foi sorteado(a)!`;
    li.style.color = "green";
    li.style.fontWeight = "bold";
    resultado.appendChild(li);

    
    amigos = [];
    atualizarLista(); 
}
