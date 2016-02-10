<?php
  session_start();
  $_SESSION["dbServer"] = "127.0.0.1";
  $_SESSION["dbUser"] = "shotuser";
  $_SESSION["dbPW"] = "redcar11";
  $_SESSION["dbDatabase"] = "shotdb";

  header("Location: http://localhost/SHOT_System/app.html");
?>