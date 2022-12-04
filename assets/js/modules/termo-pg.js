export default function termoPg() {
  // MODAL 5 -------------------------------------------------------------

  const card = document.querySelector('[data-card="termo-pg"]');
  const botaoFechar = document.querySelector('[data-modal="fechar-termo-pg"]');
  const containerModal = document.querySelector('[data-modal="termo-pg"]');

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

  //TERMO DE UMA PG
  const a1 = document.querySelector("[data-a1-termo-pg]");
  const q = document.querySelector("[data-q-termo-pg]");
  const n = document.querySelector("[data-n-termo-pg]");
  const botao = document.querySelector("[data-botao-termo-pg]");
  const resposta = document.querySelector("[data-resposta-termo-pg]");
  let resultado = 0;

  function encontrarTermoPg() {
    if (a1.value === "" || q.value === "" || n.value === "") {
      window.alert("Preencha todos os campos");
    } else {
      resultado = +a1.value * Math.pow(+q.value, +n.value - 1);
      resposta.classList.add("ativo");

      resposta.innerHTML = `O termo que você procura é: ${resultado.toFixed(
        2
      )}.`;

      a1.value = "";
      q.value = "";
      n.value = "";
    }
  }
  botao.addEventListener("click", encontrarTermoPg);
}
