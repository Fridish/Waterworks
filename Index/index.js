// logic for the index dropdown
let indexDropdown = document.getElementById("dropdownHeader");
indexDropdown.addEventListener("click", toggleContent);

function toggleContent() {
  console.log("click");
  if (this.children[1].classList.contains("active")) {
    this.children[1].classList.remove("active");
  } else {
    this.children[1].classList.add("active");
  }
}
