<?php
  session_start();
  $_SESSION["dbServer"] = "127.0.0.1";
  $_SESSION["dbUser"] = "xxxxxxxx";
  $_SESSION["dbPW"] = "xxxxxx";
  $_SESSION["dbDatabase"] = "xxxxxx";

  header("Location: ../../app.html");
?>