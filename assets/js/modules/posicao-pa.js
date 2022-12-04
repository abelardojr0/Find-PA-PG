export default function posicaoTermoPa() {
  // MODAL 2--------------------------------------------------------------

  const card = document.querySelector('[data-card="posicao-pa"]');
  const botaoFechar = document.querySelector(
    '[data-modal="fechar-posicao-pa"]'
  );
  const containerModal = document.querySelector('[data-modal="posicao-pa"]');

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

  //POSICAO DO TERMO DA PA

  const an = document.querySelector("[data-an-posicao-pa]");
  const ax = document.querySelector("[data-ax-posicao-pa]");
  const r = document.querySelector("[data-r-posicao-pa]");
  const x = document.querySelector("[data-x-posicao-pa]");
  const botao = document.querySelector("[data-botao-posicao-pa]");
  const resposta = document.querySelector("[data-resposta-posicao-pa]");
  let resultado = 0;

  function acharPosicaoTermo() {
    if (
      an.value === "" ||
      ax.value === "" ||
      r.value === "" ||
      x.value === ""
    ) {
      window.alert("Preencha todos os campos");
    } else {
      const primeiraParte = +an.value - ax.value;
      const segundaParte = +r.value * x.value;
      const terceiraParte = primeiraParte + segundaParte;

      resultado = terceiraParte / +r.value;

      resposta.classList.add("ativo");

      resposta.innerHTML = `O termo que você procura é: ${resultado.toFixed(
        2
      )}.`;

      an.value = "";
      ax.value = "";
      r.value = "";
      x.value = "";
    }
  }
  botao.addEventListener("click", acharPosicaoTermo);
}
