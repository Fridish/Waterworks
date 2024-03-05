import apiKey from "./variables.js";
const test = document.getElementById("test");

/* let datas = []; */
// Get city details
export async function getCityDetails() {
  const url = `https://data.goteborg.se/RiverService/v1.1/measuresites/${apiKey}?format=JSON`;

  try {
    const response = await fetch(url);
    const data = await response.json();

    return data;
  } catch (error) {
    console.log("Error fetching data:", error);
  }
}

//adding a function to get info for specific location
export async function getSiteDetails(city) {
  const url = `https://data.goteborg.se/RiverService/v1.1/measuresites/${apiKey}/${city}?format=JSON`;
  try {
    const response = await fetch(url);
    const data = await response.json();
    return data;
  } catch (error) {
    console.timeLog("Error fetching data: ", error);
  }
}

// Get timespecifik measurements for a city
export async function getMeasurements(city, dateFrom, dateTo) {

  //if we want to check values for one day only then we get all measure points from that day, otherwise get the average for the day
  let getAverageValues = true;
  if(new Date(dateTo) - new Date(dateFrom) <= 86400000){
     getAverageValues = false;
  }

  const url = `https://data.goteborg.se/RiverService/v1.1/Measurements/${apiKey}/${city}/Level/${dateFrom}/${dateTo}?format=json&dailyaveragevalues=${getAverageValues}`;

  try {
    const response = await fetch(url);
    const data = await response.json();

    return data;
  } catch (error) {
    console.log("Error fetching measaurementdata:", error);
  }
}
