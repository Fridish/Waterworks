const test = document.getElementById("test");

/* let datas = []; */

// Get city details
export async function getCityDetails() {
  const url =
    "https://data.goteborg.se/RiverService/v1.1/measuresites/0f254316-99ab-4a86-90d4-25438b6822cc?format=JSON";

  try {
    const response = await fetch(url);
    const data = await response.json();

    // Process the fetched data
    data.forEach((item) => {
      console.log(item);
    });

    return data;
  } catch (error) {
    console.log("Error fetching data:", error);
  }
}

// Get timespecifik measurements for a city
export async function getMeasurements(city, dateFrom, dateTo) {
  const url = `https://data.goteborg.se/RiverService/v1.1/Measurements/0f254316-99ab-4a86-90d4-25438b6822cc/${city}/Level/${dateFrom}/${dateTo}?format=json`;

  try {
    const response = await fetch(url);
    const data = await response.json();

    // Process the fetched data
    data.forEach((item) => {
      console.log(item);
    });

    return data;
  } catch (error) {
    console.log("Error fetching measaurementdata:", error);
  }
}

getMeasurements("Agnesberg", "2023-01-01", "2023-01-05").then((fetchedData) => {
  console.log(fetchedData);
});

getCityDetails()
  .then((fetchedData) => {
    console.log("Data received:", fetchedData);
    /* 
      fetchedData.forEach((data) => {
        console.log(data);
      }); */
  })
  .catch((error) => {
    console.log("Error in getApi:", error);
  });
