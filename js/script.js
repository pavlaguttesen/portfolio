document.addEventListener("DOMContentLoaded", () => {
  // Hent navigation
  fetch("../komponent/navigation.html")
    .then((res) => res.text())
    .then((data) => {
      document.getElementById("navigation").innerHTML = data;
      setupBurgerMenu();
    });

  // Hent footer
  fetch("../komponent/footer.html")
    .then((res) => res.text())
    .then((data) => {
      document.getElementById("footer").innerHTML = data;
    });
});

// === Burgermenu funktion ===
function setupBurgerMenu() {
  const burgerMenu = document.querySelector(".burger_menu");
  const offScreenMenu = document.querySelector(".off_screen_menu");

  if (burgerMenu && offScreenMenu) {
    burgerMenu.addEventListener("click", () => {
      burgerMenu.classList.toggle("active");
      offScreenMenu.classList.toggle("active");
    });

    // Luk menuen når et link klikkes
    offScreenMenu.querySelectorAll("a").forEach((link) =>
      link.addEventListener("click", () => {
        burgerMenu.classList.remove("active");
        offScreenMenu.classList.remove("active");
      })
    );
  }
};
