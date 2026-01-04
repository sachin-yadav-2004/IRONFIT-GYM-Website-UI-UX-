let check = document.getElementsByClassName("checkBox");
const menuToggle = document.getElementById("menuToggle");
const navMenu = document.getElementById("navMenu");

for (let i = 0; i < check.length; i++) {
  check[i].innerHTML =
    '<svg xmlns="http://www.w3.org/2000/svg" width="50px" fill="#e11d2e" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6"><path stroke-linecap="round" stroke-linejoin="round" d="M9 12.75 11.25 15 15 9.75M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" /></svg>';
}

menuToggle.addEventListener("click", (e) => {
  e.stopPropagation();

  const isActive = menuToggle.classList.toggle("active");
  navMenu.classList.toggle("active", isActive);
});

document.addEventListener("click", () => {
  menuToggle.classList.remove("active");
  navMenu.classList.remove("active");
});

navMenu.addEventListener("click", (e) => {
  e.stopPropagation();
});
