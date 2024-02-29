// Animate waves

document.addEventListener("DOMContentLoaded", function () {
  const svg1 = document.querySelector(".svg1");
  const svg2 = document.querySelector(".svg2bg");

  var x = window.matchMedia("(max-width: 650px)");

  // Trigger animation after a delay, 5 seconds
  setTimeout(function () {
    svg1.style.transform = "translateY(-100%)";
    if (!x.matches) {
      svg2.style.transform = "translateY(240%)";
    } else {
      svg2.style.transform = "translateY(42%)";
    }
  }, 500);
});
