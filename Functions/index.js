import { getCityDetails } from "../Functions/APIFunctions.js";

// Fetch cities and add links
const dropdownLinks = document.getElementById("dropdownLinks");

async function fetchData() {
  try {
    const cityDetails = await getCityDetails();
    /* console.log(cityDetails); */
    cityDetails.forEach((element) => {
      const link = document.createElement("a");
      link.textContent = element.Description;
      link.href = `ResultPage/result.php?city=${element.Code}`; // TODO: add link to result page for chosen city
      dropdownLinks.appendChild(link);
    });
  } catch (error) {
    console.error("Error occurred:", error);
  }
}

fetchData();
