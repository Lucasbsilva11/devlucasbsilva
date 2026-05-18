export function initProject() {
  const btns = document.querySelectorAll(".filter-btn");
  const cartoes = document.querySelectorAll("#projects-grid article");
  const mensagemVazia = document.getElementById("empty-msg");

  btns.forEach((btn) => {
    btn.addEventListener("click", () => {
      btns.forEach((b) => b.classList.remove("active"));
      btn.classList.add("active");

      const filtro = btn.dataset.filter;
      let visiveis = 0;

      cartoes.forEach((cartao) => {
        const categorias = cartao.dataset.category || "";
        if (filtro === "todos" || categorias.includes(filtro)) {
          cartao.style.display = "flex";
          visiveis++;
        } else {
          cartao.style.display = "none";
        }
      });

      mensagemVazia.style.display = visiveis === 0 ? "flex" : "none";
    });
  });
}