import { getMeasurements } from "../Functions/APIFunctions.js";

const now = new Date();
const currentDateTime = now.toLocaleString();

//lineChart
const waterLevelChart = new Chart(waterLevelCanvas, {
  type: "line",
  data: {
    labels: [],
    datasets: [
      {
        label: "Water level in M",
        data: [],
        fill: true,
        borderWidth: 1,
      },
    ],
  },
  options: {
    scales: {
      y: {
        beginAtZero: true,
      },
    },
  },
});

function convertDate(date) {
  // Get the year, month, and day from the date object
  var year = date.getFullYear();
  var month = ("0" + (date.getMonth() + 1)).slice(-2); // Months are zero-indexed
  var day = ("0" + date.getDate()).slice(-2);

  // Concatenate the year, month, and day with hyphens to form the desired format
  var formattedDate = year + "-" + month + "-" + day;

  return formattedDate;
}

//cutting away unnecessary text from the date
function converDateFromAPI(date) {
  return convertDate(new Date(parseInt(date.substr(6, 17))));
}

document.getElementById("dateTime").textContent = currentDateTime;
const startDatePicker = document.getElementById("startDatePicker");
const endDatePicker = document.getElementById("endDatePicker");

/* EVENT LISTENERS */

const menuBtns = document.querySelectorAll(".btn-menu"); // Select all buttons
menuBtns.forEach((el) =>
  el.addEventListener("click", (event) => {
    const selectedDate = event.target.value;
    let endDate;
    switch (selectedDate) {
      case "today":
        startDatePicker.value = convertDate(new Date());
        endDatePicker.value = convertDate(new Date());
        break;
      case "week":
        endDate = new Date(startDatePicker.value);
        endDate.setDate(endDate.getDate() + 7);
        endDatePicker.value = convertDate(endDate);
        break;
      case "month":
        endDate = new Date(startDatePicker.value);
        endDate.setDate(endDate.getDate() + 30);
        endDatePicker.value = convertDate(endDate);
        break;
      case "year":
        endDate = new Date(startDatePicker.value);
        endDate.setDate(endDate.getDate() + 365);
        endDatePicker.value = convertDate(endDate);
        break;
    }
  })
);

startDatePicker.addEventListener("change", (event) => {
  const startDate = event.target.value;
  endDatePicker.min = startDate;
});

// ---
function updateChart(fetchedData) {
  const labels = fetchedData.map((data) => {
    return converDateFromAPI(data.TimeStamp);
  });
  const values = fetchedData.map((data) => {
    return data.Value;
  });

  waterLevelChart.data.labels = labels;
  waterLevelChart.data.datasets.forEach((dataset) => {
    dataset.data = values;
  });
  waterLevelChart.update();
}

getChart.addEventListener("click", (event) => {
  getMeasurements(city, startDatePicker.value, endDatePicker.value).then(
    (fetchedData) => {
      updateChart(fetchedData);
    }
  );
});
