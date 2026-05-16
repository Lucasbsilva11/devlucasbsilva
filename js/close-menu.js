export function initCloseMenu() {
  const alternar = document.getElementById("menu-toggle");
  if (!alternar) return;

  const links = document.querySelectorAll("#main-nav > a");

  links.forEach((link) => {
    link.addEventListener("click", () => {
      alternar.checked = false;
    });
  });
}
