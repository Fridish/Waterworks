const test = document.getElementById("test");

/* let datas = []; */

// Get city details
export async function getCityDetails() {
  const url =
    "https://data.goteborg.se/RiverService/v1.1/measuresites/0f254316-99ab-4a86-90d4-25438b6822cc?format=JSON";

  try {
    const response = await fetch(url);
    const data = await response.json();


    return data;
  } catch (error) {
    console.log("Error fetching data:", error);
  }
}

//adding a function to get info for specific location
export async function getSiteDetails(city){
  const url =  `https://data.goteborg.se/RiverService/v1.1/measuresites/0f254316-99ab-4a86-90d4-25438b6822cc/${city}?format=JSON`;
  try {
    const response = await fetch(url);
    const data = await response.json();
    return data;
  } catch(error) {
    console.timeLog("Error fetching data: ", error);
  }
}

// Get timespecifik measurements for a city
export async function getMeasurements(city, dateFrom, dateTo) {
  const url = `https://data.goteborg.se/RiverService/v1.1/Measurements/0f254316-99ab-4a86-90d4-25438b6822cc/${city}/Level/${dateFrom}/${dateTo}?format=json`;

  try {
    const response = await fetch(url);
    const data = await response.json();

    return data;
  } catch (error) {
    console.log("Error fetching measaurementdata:", error);
  }
}

