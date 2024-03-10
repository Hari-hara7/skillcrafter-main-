function openWebsite(url) {
  window.location.href = url;
}

document.getElementById("toggleButton").addEventListener("click", function () {
  document.body.classList.toggle("background-color-toggle");
});
document.getElementById("menuButton").addEventListener("click", function () {
  document.getElementById("navbar").classList.toggle("show");
});
document.getElementById("menuToggle").addEventListener("click", function () {
  document.getElementById("navbar").classList.toggle("show");
});
document.addEventListener("DOMContentLoaded", function () {
  const toggleButton = document.getElementById("toggleButton");
  const body = document.body;
  toggleButton.addEventListener("click", function () {
    body.classList.toggle("white-bg");
    // Toggle text visibility and color
    const textElements = document.querySelectorAll(".white-text");
    textElements.forEach((element) => {
      element.classList.toggle("hidden");
    });
  });
});

document.addEventListener("DOMContentLoaded", function () {
  const menuButton = document.getElementById("menuButton");
  const navbar = document.getElementById("navbar");

  menuButton.addEventListener("click", function () {
    navbar.style.display = navbar.style.display === "block" ? "none" : "block";
  });
});
