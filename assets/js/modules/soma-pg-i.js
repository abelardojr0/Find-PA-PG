export default function somaPgI() {
  // MODAL 7 -------------------------------------------------------------

  const card = document.querySelector('[data-card="soma-pg-i"]');
  const botaoFechar = document.querySelector('[data-modal="fechar-soma-pg-i"]');
  const containerModal = document.querySelector('[data-modal="soma-pg-i"]');

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

  //SOMA DE UMA PG
  const a1 = document.querySelector("[data-a1-soma-pg-i]");
  const q = document.querySelector("[data-q-soma-pg-i]");
  const botao = document.querySelector("[data-botao-soma-pg-i]");
  const resposta = document.querySelector("[data-resposta-soma-pg-i]");
  let resultado = 0;

  function somarPg() {
    if (a1.value === "" || q.value === "") {
      window.alert("Preencha todos os campos");
    } else {
      resultado = +a1.value / (1 - +q.value);

      resposta.classList.add("ativo");

      resposta.innerHTML = `O soma desta PG é: ${resultado.toFixed(2)}.`;

      a1.value = "";
      q.value = "";
      n.value = "";
    }
  }

  botao.addEventListener("click", somarPg);
}
