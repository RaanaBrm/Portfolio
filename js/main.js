// Footer year
const year = document.getElementById("year");
if (year) year.textContent = new Date().getFullYear();

// Dropdown menus
const triggers = document.querySelectorAll(".submenu-trigger");

function closeAllMenus() {
  triggers.forEach((btn) => btn.setAttribute("aria-expanded", "false"));
}

triggers.forEach((btn) => {
  btn.addEventListener("click", (e) => {
    const isOpen = btn.getAttribute("aria-expanded") === "true";
    closeAllMenus();
    btn.setAttribute("aria-expanded", isOpen ? "false" : "true");
  });
});

// Close when clicking outside
document.addEventListener("click", (e) => {
  if (!e.target.closest(".dropdown")) closeAllMenus();
});

// Close with Escape
document.addEventListener("keydown", (e) => {
  if (e.key === "Escape") closeAllMenus();
});
