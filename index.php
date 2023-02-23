<?php
session_start();
include_once("PHP/header.php");
require_once("PHP/user_login.php");
?>
  <body>
    <!-- NAVBAR START -->
    <nav class="navbar">
      <div class="container-fluid d-flex">
        <div id="homelogo" class="col col-lg-1 col-md-1 ps-2">
          <a href="index.php"><img
            id="logo"
            src="LOGO\FullLogo_Transparent_NoBuffer.png"
            alt="logo"
            height="55"
            width="55"
          /></a>
          
        </div>
        <div id="searchinput">
          <div class="input-group rounded" style="width: 50vw">
            <input
              type="search"
              class="form-control rounded"
              placeholder="Title, artist or album name ..."
              aria-label="Search"
              aria-describedby="search-addon"
            />
            <span
              class="input-group-text bg-dark"
              id="search-addon"
              type="submit"
            >
              <i class="mb-1 gg-search" style="color: #fbfbfb"></i>
            </span>
          </div>
        </div>
        <div
          class="col col-lg-9 col-md-8 col-sm-10 text-center d-flex justify-content-center"
        >
          <a id="home" class="px-4" href="index.php">
            <h5 id="homebutton" class="text-white">Home</h5>
          </a>
          <a id="library" class="px-4" href="library.php">
            <h5>Library</h5>
          </a>
          <a id="community" class="px-4" href="community.php">
            <h5>Community</h5>
          </a>
          <a
            id="searchbutton"
            href="#"
            class="px-4 d-flex align-items-center justify-content-center"
          >
            <i id="searchbuttonicon" class="mb-1 gg-search fw-small"></i>
            <h5 id="searchbox" class="ps-3">Search</h5>
          </a>
        </div>
        <div class="col col-lg-2 col-md-3 d-flex justify-content-end">
          <div class="dropdown pe-3">
            <a class="dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            </a>
            <ul class="dropdown-menu">
              <a id="theme" class="dropdown-item" href="#">Switch theme</a>
            </ul>
          </div>
          <?php
          if(isset($_SESSION['user'])){
           echo '<img id="loggedusericon" class="mx-3" src="' . $imageURL . '" alt="userimage"/>';
          } else {
            echo '<a href="login.php">
                  <i id="usericon" class="gg-profile ms-1 me-5"></i>
                  </a>';
          }
          ?>
          <a href="userprofile.php">
            <span id="username" class="me-1">
              <?php
                if(isset($_SESSION['user'])){
                  echo ucfirst($_SESSION['user']['username']);
                 } else {
                   echo '';
                 }
              ?>
            </span>
          </a>
        </div>
      </div>
    </nav>
    <!-- NAVBAR END -->
    <!-- SECTION MAIN START -->
    <section id="main">
      <div class="container d-flex my-5">
        
        <button type="button" class="btn btn-primary-outline text-white mx-2 my-5"> <span>Rap 'n R&B</span></button>
        <button type="button" class="btn btn-primary-outline text-white mx-2 my-5"> <span>Hip & Hop</span></button>
        <button type="button" class="btn btn-primary-outline text-white mx-2 my-5"> <span>80's & 90's</span> </button>
        <button type="button" class="btn btn-primary-outline text-white mx-2 my-5"> <span>Country</span> </button>

      </div>

      <!-- RANDOM MIX START -->

      <div class="container-fluid my-5 ps-5">
        <h3>Random mix</h3>
      </div>
      
      <div class="container-fluid d-flex my-2">

        <div id="titleofalbum" class="d-flex justify-content-center mx-3">
          <p class="p-0 m-0">Album : All Eyez On Me</p>
        </div>

        <div id="titleofalbum" class="d-flex justify-content-center mx-3">
          <p class="p-0 m-0">Album : Greatest Hits</p>
        </div>

        <div id="titleofalbum" class="d-flex justify-content-center mx-3">
          <p class="p-0 m-0">Album : Loyal To The Game</p>
        </div>

        <div id="titleofalbum" class="d-flex justify-content-center mx-3">
          <p class="p-0 m-0">Album : Me Against The World</p>
        </div>

        <div id="titleofalbum" class="d-flex justify-content-center mx-3">
          <p class="p-0 m-0">Album : Strictly 4 My N.I.G.G.A.Z</p>
        </div>
        
        <div id="titleofalbum" class="d-flex justify-content-center mx-3">
          <p class="p-0 m-0">Album : The Eminem Show</p>
        </div>

      </div>

      <div class="container-fluid d-flex my-4">
        <div id="albumcard" class="card rounded-0 mx-3 d-flex align-items-center justify-content-center">
          <img src="TEST/alleyezonme.jpeg" alt="">
          <img id="albumplaybtn" class="playbutton" src="ICON/play-48.png" alt="">
          <img id="albumpausebtn" class="pausebutton" src="ICON/pause-48.png" alt="">
        </div>
        <div id="albumcard" class="card rounded-0 mx-3 d-flex align-items-center justify-content-center">
          <img src="TEST/greatesthits.jpg" alt="">
          <img id="albumplaybtn" class="playbutton" src="ICON/play-48.png" alt="">
          <img id="albumpausebtn" class="pausebutton" src="ICON/pause-48.png" alt="">
        </div>
        <div id="albumcard" class="card rounded-0 mx-3 d-flex align-items-center justify-content-center">
          <img src="TEST/loyaltothegame.jpg" alt="">
          <img id="albumplaybtn" class="playbutton" src="ICON/play-48.png" alt="">
          <img id="albumpausebtn" class="pausebutton" src="ICON/pause-48.png" alt="">
        </div>
        <div id="albumcard" class="card rounded-0 mx-3 d-flex align-items-center justify-content-center">
          <img src="TEST/megainsttheworld.jpg" alt="">
          <img id="albumplaybtn" class="playbutton" src="ICON/play-48.png" alt="">
          <img id="albumpausebtn" class="pausebutton" src="ICON/pause-48.png" alt="">
        </div>
        <div id="albumcard" class="card rounded-0 mx-3 d-flex align-items-center justify-content-center">
          <img src="TEST/strictly4myniggaz.jpeg" alt="">
          <img id="albumplaybtn" class="playbutton" src="ICON/play-48.png" alt="">
          <img id="albumpausebtn" class="pausebutton" src="ICON/pause-48.png" alt="">
        </div>
        <div id="albumcard" class="card rounded-0 mx-3 d-flex align-items-center justify-content-center">
          <img src="https://media.auchan.fr/MEDIASTEP182809734_2048x2048/B2CD/" alt="">
          <img id="albumplaybtn" class="playbutton" src="ICON/play-48.png" alt="">
          <img id="albumpausebtn" class="pausebutton" src="ICON/pause-48.png" alt="">
        </div>
      </div>

      <div class="container-fluid d-flex my-2">
        <div id="tracktitle" class="d-flex justify-content-center mx-3">
          <h3>All Eyez On Me</h3>
        </div>
        <div id="tracktitle" class="d-flex justify-content-center mx-3">
          <h3>Hit'em Up</h3>
        </div>
        <div id="tracktitle" class="d-flex justify-content-center mx-3">
          <h3>Hennessy</h3>
        </div>
        <div id="tracktitle" class="d-flex justify-content-center mx-3">
          <h3>Lord Knows</h3>
        </div>
        <div id="tracktitle" class="d-flex justify-content-center mx-3">
          <h3>Papa'z song</h3>
        </div>
        <div id="tracktitle" class="d-flex justify-content-center mx-3">
          <h3>Without Me</h3>
        </div>
      </div>
      <div class="container-fluid d-flex my-2">
        <div id="tracksinger" class="d-flex justify-content-center mx-3">
          <h4>2Pac</h4>
        </div>
        <div id="tracksinger" class="d-flex justify-content-center mx-3">
          <h4>2Pac</h4>
        </div>
        <div id="tracksinger" class="d-flex justify-content-center mx-3">
          <h4>2Pac</h4>
        </div>
        <div id="tracksinger" class="d-flex justify-content-center mx-3">
          <h4>2Pac</h4>
        </div>
        <div id="tracksinger" class="d-flex justify-content-center mx-3">
          <h4>2Pac</h4>
        </div>
        <div id="tracksinger" class="d-flex justify-content-center mx-3">
          <h4>Eminem</h4>
        </div>
      </div>

      <!-- RANDOM MIX END -->

    </section>

    <!-- SECTION MAIN END -->

    <!-- PLAYER START -->


    <div id="music-player" class="container-fluid">
      <div class="row">
        <div class="col d-flex justify-content-center align-items-center">
          <div id="progress-bar">
            <!-- <input
              class="bg-light"
              type="range"
              min="0"
              max="1"
              step="0.1"
              value="1"
            /> -->
          </div>
        </div>
        <div class="col d-flex justify-content-between my-3">
          <img id="repeat" src="ICON\repeat-24.png" alt="repeat" class="mx-3" width="24" height="24" />
          <img id="shuffle" src="ICON\shuffle-24.png" alt="shuffle" width="24" height="24" />
          <img
            id="backward"
            src="ICON\media-skip-backward-24.png"
            alt="backward"
            class="me-4 p-0"
            width="24"
            height="24"
          />
        </div>
        <div class="col d-flex justify-content-center align-items-center mb-1">
          <img id="play" src="ICON\play-48.png" alt="play" width="36" height="36"/>
          <img id="pause" src="ICON\pause-48.png" alt="pause" width="36" height="36"/>
        </div>
        <div class="col d-flex justify-content-start my-3">
          <img
            id="forward"
            src="ICON\arrow-44-24.png"
            alt="backward"
            class="ms-3 p-0"
            width="24"
            height="24"
          />
        </div>
        <div class="col d-flex justify-content-center align-items-center mb-1">
          <div id="volume-bar">
            <input
              type="range"
              min="0"
              max="1"
              step="0.1"
              value="1"
            />
          </div>
        </div>
      </div>
    </div>

    <!-- PLAYER END -->

    <!-- AUDI TAGS START -->

    <audio id="title1" src="TEST/alleyezonme.mp3"></audio>
    <audio id="title2" src="TEST/hitemup.mp3"></audio>
    <audio id="title3" src="TEST/hennessy.mp3"></audio>
    <audio id="title4" src="TEST/lordknows.mp3"></audio>
    <audio id="title5" src="TEST/papazsong.mp3"></audio>
    <audio id="title6" src="TEST/withoutme.mp3"></audio>

    <!-- AUDI TAGS END -->


      <script src="https://cdn.jsdelivr.net/npm/@popperjs/core@2.11.6/dist/umd/popper.min.js" integrity="sha384-oBqDVmMz9ATKxIep9tiCxS/Z9fNfEXiDAYTujMAeBAsjFuCZSmKbSSUnQlmh/jp3" crossorigin="anonymous"></script>
      <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0-alpha1/dist/js/bootstrap.min.js" integrity="sha384-mQ93GR66B00ZXjt0YO5KlohRA5SY2XofN4zfuZxLkoj1gXtW8ANNCe9d5Y3eG5eD" crossorigin="anonymous"></script>
    <script src="JS/lightmode.js"></script>
    <script src="JS\searchbar.js"></script>
    <script src="JS/play.js"></script>
  </body>
</html>