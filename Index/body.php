  <?php
    require __DIR__ . ("/../Components/header.php");
    ?>
  <!-- Container for the content behind the Animation -->

  <body>
      <div class="indexContainer">
          <h1>GÖTAÄLV</h1>
          <!-- <div class="dropdownContainer">
              <div class=dropdownWrapper>
                  <div class="dropdownButton" id="dropdownHeader">

                      <h3>Välj stad</h3>
                      <div id="dropdownContent">
                          <p id="linkCity">Länk till en stad här</p>
                          
                      </div>
                  </div>
              </div>
          </div> -->
          <div class="dropdown">
              <button class="dropbtn">Välj ort</button>
              <div class="dropdown-content" id="dropdownLinks">
                  <!-- TODO: Generate links in JS  -->
              </div>
          </div>
      </div>
      <?php
        require __DIR__ . ("/../Components/footer.php");
        ?>