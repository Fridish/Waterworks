<!DOCTYPE html> 
<html lang="eng">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>SearchPage</title>
        <script src="https://cdn.jsdelivr.net/npm/chart.js"></script>
        <script>
            // Define city for module to use
            const city ="<?= $_GET["city"]; ?>";
        </script>
        <script src="./result.js" type="module">
        </script>
    </head>

    <body>
        <header>
            <div class="mobile">
                <nav>
                    <div id="cityInfo">
                        <h2 id="cityName">Name of the area</h2>
                        <p id="long">Longtitute</p>
                        <p id="lat">Latitude</p>
                        <p id="currentWaterLevel">Current water level: </p>
                        <div class="menu">
                        <button class="btn-menu" value="today">Today</button>
                        <button class="btn-menu" value="week">7 days</button>
                        <button class="btn-menu" value="month">30 days</button>
                        <button class="btn-menu" value="year">1 year</button>
                        <div>
                            Start date: <input type="date" id="startDatePicker" />
                            End date: <input type="date" id="endDatePicker" />
                        </div>
                        <div>
                            <button id="getChart">Get Chart</button>
                        </div>
                    </div>
                </nav>
            </div>
        </header>
        <div class="charts">
            <canvas id="waterLevelCanvas"></canvas> 
                <button class="buttonsName"></button>
        </div>

    </body>

    <footer>
        <div id="dateTime"></div>
    </footer>
</html>
