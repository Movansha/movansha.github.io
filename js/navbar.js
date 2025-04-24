const hamburger = document.getElementById("hamburger");
const menu = document.getElementById("menu");


hamburger.addEventListener("click", (event) => {
  hamburger.classList.toggle("active");
  menu.classList.toggle("active");
  event.stopPropagation();
});

menu.querySelectorAll("a").forEach(link => {
    link.addEventListener("click", () => {
      hamburger.classList.remove("active");
      menu.classList.remove("active");
    });
});

// ----------

["click", "touchstart"].forEach(e => {
  document.addEventListener(e, (event) => {
    if (!hamburger.contains(event.target) && !menu.contains(event.target)) {
      hamburger.classList.remove("active");
      menu.classList.remove("active");
    }
  });
});