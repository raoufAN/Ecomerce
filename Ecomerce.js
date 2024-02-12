const bar = document.getElementById("bar");
const nav = document.getElementById("navbar");
const closee = document.getElementById("close");

bar.addEventListener("click", () => {
  nav.classList.add("active");
});

closee.addEventListener("click", (e) => {
  e.preventDefault();
  nav.classList.remove("active");
});


