export default function termoPa() {
  // MODAL
  const card = document.querySelector('[data-card="termo-pa"]');
  const botaoFechar = document.querySelector('[data-modal="fechar-termo-pa"]');
  const containerModal = document.querySelector('[data-modal="termo-pa"]');
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
  //SECTION

  const ax = document.querySelector("[data-ax-termo-pa]");
  const n = document.querySelector("[data-n-termo-pa]");
  const x = document.querySelector("[data-x-termo-pa]");
  const r = document.querySelector("[data-r-termo-pa]");
  const botao = document.querySelector("[data-botao-termo-pa]");
  const resposta = document.querySelector("[data-resposta-termo-pa]");
  let resultado = 0;

  function encontrarTermoPa() {
    if (ax.value === "" || n.value === "" || x.value === "" || r.value === "") {
      window.alert("Preencha todos os campos");
    } else {
      resultado = +ax.value + (+n.value - +x.value) * +r.value;

      resposta.classList.add("ativo");

      resposta.innerHTML = `O termo que você procura é: ${resultado.toFixed(
        2
      )}.`;

      ax.value = "";
      n.value = "";
      x.value = "";
      r.value = "";
    }
  }

  botao.addEventListener("click", encontrarTermoPa);
}
