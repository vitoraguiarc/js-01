const titulo = document.getElementById('titulo');
const nome = document.getElementById('nome');
const vermelho = document.getElementById('vermelho');
const azul = document.getElementById('azul');
const verde = document.getElementById('verde');

function trocarTitulo () { 
    titulo.textContent = nome.value
    titulo.className= "";
    titulo.classList.add('vermelho')
    
}

vermelho.addEventListener('click', trocarTitulo)

function trocarAzul () {
    titulo.textContent = nome.value
    titulo.className = "";
    titulo.classList.add('azul')
}

azul.addEventListener('click', trocarAzul)

function trocarVerde () {
    titulo.textContent = nome.value
    titulo.className = "";
    titulo.classList.add('verde')
}

verde.addEventListener("click", trocarVerde)