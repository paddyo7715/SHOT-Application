<?php

require("common2.php");

$oldpw = $_POST['oldpw']; 
$mypassword1 = $_POST['mypassword1']; 
$error_happened = "N";
$error_msg = "errm=Invalid User ID or Password";
$password = "";
$encpw = "";
$resetpw = "";
$Access_NewIncident = "";
$Access_QueryView = "";
$Access_QueryUpdate = "";
$Access_Reports = "";
$user_id = "";
$error_msg = "errm=Unable to change password at this time.";


session_start();


if (!isset($_SESSION['dbServer']) || empty($_SESSION['dbServer'])) 
{
  $error_happened = "T";
}
else
{
  $server = $_SESSION["dbServer"];
  $user = $_SESSION["dbUser"];
  $pass = $_SESSION["dbPW"];
  $dbName = $_SESSION["dbDatabase"];

  $resetpw = $_SESSION["password_reset"];

  $Access_NewIncident = $_SESSION["Access_NewIncident"];
  $Access_QueryView = $_SESSION["Access_QueryView"];
  $Access_QueryUpdate = $_SESSION["Access_QueryUpdate"];
  $Access_Reports = $_SESSION["Access_Reports"];
  $user_id = $_SESSION["app_userid"];

}

if ($error_happened == "N")
{
    if ($Access_NewIncident == "N" && $Access_QueryView == "N" && $Access_QueryUpdate == "N" && $Access_Reports == "N")
    {
          error_log(user_id . " is in the user table but does not have access to any functions in this applicaiton");
          $error_happened = "T";
    }
}

if ($error_happened == "N")
{
    if ($resetpw != 1)
    {
          error_log(user_id . " is trying to change their password when they are when they are not allowed.");
          $error_happened = "T";
    }
}

if ($error_happened == "N")
{
    if (validatepw($mypassword1) != "Y")
    {
          $error_msg = "Invalid Password.  Password must be between 8 and 12 Characters.";
          error_log(user_id . " is trying to change their password when they are when they are not allowed.");
          $error_happened = "T";
    }
}


if ($error_happened == "N")
{
  $mysqli = new mysqli($server, $user, $pass, $dbName);

  if ($mysqli->connect_errno) {
    error_log("Resetpw Error unable to connect to database!");
    $error_happened = "T";
  }
  else
  {
    $oldencpw = crypt(md5($oldpw),md5($user_id));
    $encpw = crypt(md5($mypassword1),md5($user_id));

    $stmtx = $mysqli->prepare("update users set Password = ?, resetpw = 0 where User_ID = ? and Password = ? and isdeleted = 0 and Active = 'Y' "); 
    if ( false===$stmtx ) {
      error_log("Error on prepare statement in Resetpw");
      $error_happened = "T";
    }

  }

  if ($error_happened == "N")
  {

    $rc = $stmtx->bind_param('sss', $encpw, $user_id,$oldencpw);
    if (false===$rc)
    {
        error_log("Error binding parameters in resetpw");
        $error_happened = "T";
    }
  }

  if ($error_happened == "N")
  {
       $rslt = $stmtx->execute();
       if ($rslt != TRUE) 
       {
          error_log("Error executing Update to users table in resetpw to update password.");
          $error_happened = "T";
       }
       else
       {
         $row_updated = $mysqli->affected_rows;
    error_log($row_updated);
         if ($row_updated != 1)
         {
           $error_msg = "Invalid Current Password.";
           error_log("Error in Resetpw password user record not updated for incorrect password or user suspended.");
           $error_happened = "T";
         }
      }
  }


}

if ($error_happened == "T")
{
      echorspage($error_msg);
}
else
{
      $_SESSION['password_reset'] = 0;
      header('Location: ../../app.html');
}



?>
