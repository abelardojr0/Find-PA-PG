export default function temaCores() {
  const cores = document.querySelectorAll("[data-cor");

  function mudarCor(event) {
    if (event.target.dataset.cor === "1") {
      document.body.style.background =
        "linear-gradient(          90deg,          rgba(63, 94, 251, 1) 0%,          rgba(252, 70, 107, 1) 100% )";
      event.target.classList.add("ativo");
      event.target.nextElementSibling.classList.remove("ativo"); //proximo irmao
      event.target.nextElementSibling.nextElementSibling.classList.remove(
        "ativo"
      ); // proximo do proximo irmao
    } else if (event.target.dataset.cor === "2") {
      document.body.style.background =
        "linear-gradient(          90deg,          rgba(131, 58, 180, 1) 0%,          rgba(253, 29, 29, 1) 50%,          rgba(252, 176, 69, 1) 100% )";
      event.target.classList.add("ativo");
      event.target.nextElementSibling.classList.remove("ativo");
      event.target.previousElementSibling.classList.remove("ativo"); // irmao anterior
    } else if (event.target.dataset.cor === "3") {
      document.body.style.background =
        "linear-gradient(        90deg,        rgba(238, 174, 202, 1) 0%,        rgba(148, 187, 233, 1) 100% )";
      event.target.classList.add("ativo");
      event.target.previousElementSibling.classList.remove("ativo");
      event.target.previousElementSibling.previousElementSibling.classList.remove(
        "ativo"
      ); // irmao anterior do anterior
    }
  }
  cores.forEach((item) => {
    item.addEventListener("click", mudarCor);
  });

  function toggleMenu(event) {
    lista.classList.toggle("ativo");
  }

  const menu = document.querySelector("[data-menu-cores]");
  const lista = document.querySelector("[data-lista-cores]");
  menu.addEventListener("click", toggleMenu);
}
