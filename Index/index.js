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

import { getCityDetails } from "/../Functions/APIFunctions.js";

// Fetch cities and add links
const dropdownLinks = document.getElementById("dropdownLinks");

async function fetchData() {
  try {
    const cityDetails = await getCityDetails();
    /* console.log(cityDetails); */
    cityDetails.forEach((element) => {
      const link = document.createElement("a");
      link.textContent = element.Description;
      link.href = `/${element.example}`; // TODO: add link to result page for chosen city
      dropdownLinks.appendChild(link);
    });
  } catch (error) {
    console.error("Error occurred:", error);
  }
}

fetchData();
