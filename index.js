const scrollContainer = document.getElementById("scroll-btn");
const hamButton = document.getElementById("hamburger")

window.addEventListener("scroll", function () {
  if (window.pageYOffset > 64) {
    scrollContainer.style.display = "block";
  } else {
    scrollContainer.style.display = "none";
  }
});
scrollContainer.addEventListener("click", function () {
  window.scrollTo({ top: 0, behavior: "smooth" });
});

hamButton.addEventListener("click", function () {
  hamButton.classList.toggle("is-active");
});