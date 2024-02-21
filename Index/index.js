// logic for the index dropdown
/* let indexDropdown = document.getElementById("dropdownHeader");
let dropdownContent = document.getElementById("dropdownContent");
indexDropdown.addEventListener("click", toggleContent);

function toggleContent() {
  console.log("click");
  dropdownContent.style.animation = "dropDown .3 ease-in-out forwards";
  if (this.children[1].classList.contains("active")) {
    this.children[1].classList.remove("active");
  } else {
    this.children[1].classList.add("active");
  }
} */


// Drop down menu
const hamburger = document.querySelector(".hamburger");
const dropMenu = document.querySelector(".drop-menu");
const cancel = document.querySelector(".cancel img");

hamburger.addEventListener("click", () => {
    dropMenu.style.display = "flex";
    dropMenu.style.animation = "dropDown 300ms ease-in-out forwards";
    dropMenu.style.transformOrigin = "top center";
    cancel.addEventListener("click", () => {
        dropMenu.style.display = "none";
    })
});