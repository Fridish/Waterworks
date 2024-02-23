<!-- ex <a href="/ResultPage/result.php?city=gbg">gbg</a> -->
<!-- ex <a href="/ResultPage/result.php?city=lio">lio</a> -->

<?php
require __DIR__ . ("/Components/header.php");
?>
<!-- Container for the content behind the Animation -->

<body>
    <div class="indexContainer">
        <h1>GÖTAÄLV</h1>
        <div id="chartCont"></div>
        <div class="dropdown">
            <button class="dropbtn">Välj ort</button>
            <div class="dropdown-content" id="dropdownLinks">
                <!-- Links generated in JS  -->
            </div>
        </div>
    </div>
    <?php
    require __DIR__ . ("/Components/footer.php");
    ?>