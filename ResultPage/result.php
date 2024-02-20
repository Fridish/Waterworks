<!DOCTYPE html> 
<html lang="eng">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>SearchPage</title>
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
                    <h2>Name of the area</h2>
                    <p>Longtitute</p>
                    <p>Latitude</p>
                    <p>Water level for the city here?</p>
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
                </nav>
            </div>
        </header>
     

    </body>

    <footer>
        <div id="dateTime"></div>
    </footer>
</html>
