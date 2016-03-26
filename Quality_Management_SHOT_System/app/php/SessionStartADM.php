<?php

require("common2ADM.php");

$form_uid = $_POST['myusername']; 
$form_pw = $_POST['mypassword']; 
$error_happened = "N";
$error_msg = "errm=Invalid User ID or Password";
$Access_UserManagement = "";
$Access_DatabaseMaint = "";
$password = "";
$encpw = "";
$resetpw = "";


require_once './../../../../../keys.php';


$mysqli = new mysqli($DB_Host, $DB_User, $DB_Pass, $DB_Name);

if ($mysqli->connect_errno) {
  error_log("Error unable to connect to database!");
  $error_happened = "T";
}
else
{
  $encpw = crypt(md5($form_pw),md5($form_uid));
  $stmtx = $mysqli->prepare("SELECT Password, resetpw, Access_UserManagement, Access_DatabaseMaint FROM users where User_ID = ? and isdeleted = 0 and Active = 'Y' "); 
  if ( false===$stmtx ) {
      error_log("Error on prepare statement in session start");
      $error_happened = "T";
  }

  if ($error_happened == "N")
  {
    $rc = $stmtx->bind_param('s', $form_uid);
    if (false===$rc)
    {
        error_log("Error binding parameters in session start");
        $error_happened = "T";
    }
  }

  if ($error_happened == "N")
  {
       $rslt = $stmtx->execute();
       if ($rslt == TRUE) 
       {

          $resultdb = $stmtx->get_result();
          if(mysqli_num_rows($resultdb)>0)
          {
            $record = $resultdb->fetch_assoc();
            $Access_UserManagement = $record["Access_UserManagement"];
            $Access_DatabaseMaint = $record["Access_DatabaseMaint"];
            $password = $record["Password"];
            $resetpw = $record["resetpw"];
          }
          else
          {
            error_log($form_uid . " Is not in the users table or is suspended or deleted");
            $error_happened = "T";
          }
       }
       else
       {
          error_log("Error executing SELECT again users table in session start to validate user");
          $error_happened = "T";
       }
  }

//Check that the user entered the correct password
  if ($error_happened == "N")
  {
     if ($password != $encpw)
     {
        error_log($form_uid . " is in the user table but the password entered is not correct.");
        $error_happened = "T";
     }
  }


//Check that the user has the minimum access to this applicaiton
  if ($error_happened == "N")
  {
    if ($Access_UserManagement == "N" && $Access_DatabaseMaint == "N")
    {
          error_log($form_uid . " is in the user table but does not have access to any functions in this applicaiton");
          $error_happened = "T";
    }
  } 

}

if ($error_happened == "T")
{
      header('Location: ../../index.html?'. $error_msg);
}
else
{
    session_start();
    $_SESSION['dbServer'] = $DB_Host;
    $_SESSION['dbUser'] = $DB_User;
    $_SESSION['dbPW'] = $DB_Pass;
    $_SESSION['dbDatabase'] = $DB_Name;
    $_SESSION['app_userid'] = $form_uid;
    $_SESSION['password_reset'] = $resetpw;
    $_SESSION['Access_UserManagement'] = $Access_UserManagement;    
    $_SESSION['Access_DatabaseMaint'] = $Access_DatabaseMaint;    

    if ($resetpw == 1)
    {
      echorspage("");
    }
    else
       header('Location: ../../app.html');
 }


exit;

/* End of file */
