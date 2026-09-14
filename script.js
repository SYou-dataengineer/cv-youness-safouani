const menuButton = document.querySelector(".menu-button");
const menu = document.querySelector(".nav-links");
const printButton = document.querySelector(".print-button");
const year = document.querySelector("#year");

if (menuButton && menu) {
  menuButton.addEventListener("click", () => {
    const isOpen = menu.classList.toggle("open");
    menuButton.setAttribute("aria-expanded", String(isOpen));
  });

  menu.querySelectorAll("a").forEach((link) => {
    link.addEventListener("click", () => {
      menu.classList.remove("open");
      menuButton.setAttribute("aria-expanded", "false");
    });
  });
}

if (printButton) {
  printButton.addEventListener("click", () => window.print());
}

if (year) {
  year.textContent = String(new Date().getFullYear());
}
