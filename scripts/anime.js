// Animate waves

document.addEventListener("DOMContentLoaded", function () {
    const svg1 = document.querySelector(".svg1");
    const svg2 = document.querySelector(".svg2");
  
    // Trigger animation after a delay
    setTimeout(function () {
      svg1.style.transform = "translateY(-100%)";
      svg2.style.transform = "translateY(100%)";
    }, 500); // Delay the animation by 500 milliseconds
  });