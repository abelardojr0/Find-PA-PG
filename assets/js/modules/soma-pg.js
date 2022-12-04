export default function somaPg() {
  // MODAL 7 -------------------------------------------------------------

  const card = document.querySelector('[data-card="soma-pg"]');
  const botaoFechar = document.querySelector('[data-modal="fechar-soma-pg"]');
  const containerModal = document.querySelector('[data-modal="soma-pg"]');

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
  const a1 = document.querySelector("[data-a1-soma-pg]");
  const q = document.querySelector("[data-q-soma-pg]");
  const n = document.querySelector("[data-n-soma-pg]");
  const botao = document.querySelector("[data-botao-soma-pg]");
  const resposta = document.querySelector("[data-resposta-soma-pg]");
  let resultado = 0;

  function somarPg() {
    if (a1.value === "" || q.value === "" || n.value === "") {
      window.alert("Preencha todos os campos");
    } else {
      resultado =
        (+a1.value * (+Math.pow(+q.value, +n.value) - 1)) / (+q.value - 1);

      resposta.classList.add("ativo");

      resposta.innerHTML = `O soma desta PG é: ${resultado.toFixed(2)}.`;

      a1.value = "";
      q.value = "";
      n.value = "";
    }
  }

  botao.addEventListener("click", somarPg);
}
