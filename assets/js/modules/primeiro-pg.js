export default function primeiroPg() {
  // MODAL 6 -------------------------------------------------------------

  const card = document.querySelector('[data-card="primeiro-pg"]');
  const botaoFechar = document.querySelector(
    '[data-modal="fechar-primeiro-pg"]'
  );
  const containerModal = document.querySelector('[data-modal="primeiro-pg"]');

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

  // PRIMEIRO TERMO DE UMA PG
  const ax = document.querySelector("[data-ax-primeiro-pg]");
  const q = document.querySelector("[data-q-primeiro-pg]");
  const n = document.querySelector("[data-n-primeiro-pg]");
  const botao = document.querySelector("[data-botao-primeiro-pg]");
  const resposta = document.querySelector("[data-resposta-primeiro-pg]");
  let resultado = 0;

  function encontrarPrimeiroTermoPg() {
    if (ax.value === "" || q.value === "" || n.value === "") {
      window.alert("Preencha todos os campos");
    } else {
      resultado = +ax.value / Math.pow(+q.value, +n.value - 1);

      resposta.classList.add("ativo");

      resposta.innerHTML = `O Primeiro termo é: ${resultado.toFixed(2)}.`;

      ax.value = "";
      q.value = "";
      n.value = "";
    }
  }
  botao.addEventListener("click", encontrarPrimeiroTermoPg);
}
