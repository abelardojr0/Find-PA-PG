export default function medioPa() {
  // MODAL 4 -------------------------------------------------------------

  const card = document.querySelector('[data-card="medio-pa"]');
  const botaoFechar = document.querySelector('[data-modal="fechar-medio-pa"]');
  const containerModal = document.querySelector('[data-modal="medio-pa"]');

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

  //TERMO MEDIO DE UMA PA
  const sn = document.querySelector("[data-sn-medio-pa]");
  const n = document.querySelector("[data-n-medio-pa]");
  const botao = document.querySelector("[data-botao-medio-pa");
  const resposta = document.querySelector("[data-resposta-medio-pa]");
  let resultado = 0;

  function calcularMedio() {
    if (sn.value === "" || n.value === "") {
      window.alert("Preencha todos os campos");
    } else {
      resultado = +sn.value / +n.value;
      resposta.classList.add("ativo");

      resposta.innerHTML = `O termo médio desta PA é: ${resultado.toFixed(2)}.`;

      sn.value = "";
      n.value = "";
    }
  }

  botao.addEventListener("click", calcularMedio);
}
