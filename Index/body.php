  <?php
    require __DIR__ . ("/../Components/header.php");
    ?>
  <!-- Container for the content behind the Animation -->

  <body>
      <div class="indexContainer">
          <h1>GÖTAÄLV</h1>
          <div class="dropdownContainer">
              <div class=dropdownWrapper>
                  <div class="dropdownButton" id="dropdownHeader">

                      <h3>Hitta Städer</h3>
                      <div id="dropdownContent">
                          <p>Länk till en stad här</p>
                          <!-- generate list of cities here, make the clickable with JS -->
                      </div>
                  </div>
              </div>
          </div>
      </div>
      <?php
        require __DIR__ . ("/../Components/footer.php");
        ?>