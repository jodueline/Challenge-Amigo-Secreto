// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.

const campoEntrada = document.getElementById("amigo");
const listaAmigos = document.getElementById("listaAmigos");
const resultado = document.getElementById("resultado");

let amigos = [];

function agregarAmigo() {
  const nuevoAmigo = campoEntrada.value.trim();

  if (!nuevoAmigo) {
    alert("Por favor, inserte un nombre");
    return;
  }

  // Evitar duplicados (opcional)
  if (amigos.includes(nuevoAmigo)) {
    alert("Ese amigo ya está en la lista");
    limpiarCampoEntrada();
    return;
  }

  amigos.push(nuevoAmigo);
  agregarAmigoALaLista(nuevoAmigo);
  limpiarCampoEntrada();
}

function agregarAmigoALaLista(nombre) {
  const li = document.createElement("li");
  li.textContent = nombre;
  listaAmigos.appendChild(li);
}

function sortearAmigo() {
  if (amigos.length === 0) {
    alert("No hay amigos para sortear");
    return;
  }

  const indice = Math.floor(Math.random() * amigos.length);
  const amigoSorteado = amigos[indice];

  resultado.textContent = `Tu amigo secreto es: ${amigoSorteado}`;
}

function limpiarCampoEntrada() {
  campoEntrada.value = "";
}