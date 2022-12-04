export default function razaoPg() {
  // MODAL 8 -------------------------------------------------------------

  const card = document.querySelector('[data-card="razao-pg"]');
  const botaoFechar = document.querySelector('[data-modal="fechar-razao-pg"]');
  const containerModal = document.querySelector('[data-modal="razao-pg"]');

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
  //RAZAO DE UMA PG
  const an = document.querySelector("[data-an-razao-pg]");
  const ax = document.querySelector("[data-ax-razao-pg]");
  const n = document.querySelector("[data-n-razao-pg]");
  const x = document.querySelector("[data-x-razao-pg]");
  const botao = document.querySelector("[data-botao-razao-pg]");
  const resposta = document.querySelector("[data-resposta-razao-pg]");
  let resultado = 0;

  function encontrarRazao() {
    if (an.value === "" || ax.value === "" || n.value === "") {
      window.alert("Preencha todos os campos");
    } else {
      const primeiraParte = +an.value / +ax.value;
      const segundaParte = +n.value - +x.value;

      if (+an.value > +ax.value) {
        for (let i = 0; i <= primeiraParte + 1; i++) {
          if (Math.pow(i, segundaParte) === primeiraParte) {
            resultado = i;

            resposta.classList.add("ativo");

            resposta.innerHTML = `O coeficiente desta PG é: ${resultado.toFixed(
              2
            )}.`;

            an.value = "";
            ax.value = "";
            n.value = "";
            x.value = "";
            i === primeiraParte;
          } else if (
            Math.pow(primeiraParte, segundaParte) === primeiraParte &&
            i >= primeiraParte
          ) {
            resultado = primeiraParte;

            resposta.classList.add("ativo");

            resposta.innerHTML = `O coeficiente desta PG é: ${resultado.toFixed(
              2
            )}.`;

            an.value = "";
            ax.value = "";
            n.value = "";
            x.value = "";
          }
        }
      } else {
        resultado = primeiraParte * segundaParte;

        resposta.classList.add("ativo");

        resposta.innerHTML = `O coeficiente desta PG é: ${resultado.toFixed(
          2
        )}.`;

        an.value = "";
        ax.value = "";
        n.value = "";
        x.value = "";
      }
    }
  }

  botao.addEventListener("click", encontrarRazao);
}
