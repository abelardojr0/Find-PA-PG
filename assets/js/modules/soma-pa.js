export default function somaPa() {
  // MODAL 3 -------------------------------------------------------------

  const card = document.querySelector('[data-card="soma-pa"]');
  const botaoFechar = document.querySelector('[data-modal="fechar-soma-pa"]');
  const containerModal = document.querySelector('[data-modal="soma-pa"]');

  if (card && botaoFechar && containerModal) {
    function toggleModal(event) {
      event.preventDefault();
      containerModal.classList.toggle("ativo");
      respostaSoma.classList.add("ativo");
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

  // SOMA DA PA
  const ax = document.querySelector("[data-ax-soma-pa]");
  const ay = document.querySelector("[data-ay-soma-pa");
  const n = document.querySelector("[data-n-soma-pa]");
  const botao = document.querySelector("[data-botao-soma-pa]");
  const respostaSoma = document.querySelector("[data-resposta-soma-pa]");
  let resultado = 0;

  function somaDaPa() {
    if (ax.value === "" || ay.value === "" || n.value === "") {
      window.alert("Preencha todos os campos");
    } else {
      resultado = ((+ax.value + +ay.value) * +n.value) / 2;
      respostaSoma.classList.add("ativo");

      respostaSoma.innerHTML = `O soma desta PA é: ${resultado.toFixed(2)}.`;

      ay.value = "";
      ax.value = "";
      n.value = "";
    }
  }

  botao.addEventListener("click", somaDaPa);
}
