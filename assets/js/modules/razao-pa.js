export default function razaoPa() {}
// MODAL

const card = document.querySelector('[data-card="razao-pa"]');
const botaoFechar = document.querySelector('[data-modal="fechar-razao-pa"]');
const containerModal = document.querySelector('[data-modal="razao-pa"]');

if (card && botaoFechar && containerModal) {
  function toggleModal(event) {
    event.preventDefault();
    containerModal.classList.toggle("ativo");
    resposta.classList.remove("ativo");
  }
  function cliqueForaModal(event) {
    if (event.target === this) {
      toggleModal(event);
    }
  }

  card.addEventListener("click", toggleModal);
  botaoFechar.addEventListener("click", toggleModal);
  containerModal.addEventListener("click", cliqueForaModal);
}

//RAZÃO DA PA

const an = document.querySelector("[data-an-razao-pa]");
const ax = document.querySelector("[data-ax-razao-pa]");
const n = document.querySelector("[data-n-razao-pa]");
const x = document.querySelector("[data-x-razao-pa]");
const botao = document.querySelector("[data-botao-razao-pa]");
const resposta = document.querySelector("[data-resposta-razao-pa]");
let resultado = 0;

function acharRazaoPa() {
  if (an.value === "" || ax.value === "" || n.value === "" || x.value === "") {
    window.alert("Preencha todos os campos");
  } else {
    resultado = (+an.value - +ax.value) / (+n.value - +x.value);

    resposta.classList.add("ativo");

    resposta.innerHTML = `A razão é: ${resultado.toFixed(2)}.`;

    an.value = "";
    ax.value = "";
    n.value = "";
    x.value = "";
  }
}
botao.addEventListener("click", acharRazaoPa);
