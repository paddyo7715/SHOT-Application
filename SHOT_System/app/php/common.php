<?php 

function customError($errno, $errstr) {

  $result['success'] = false;
  $result['msg'] = $errstr;
  echo json_encode($result);
  die();
}

function StringorNULL($f){
  
  $new_field = trim($f);
  if (strlen($new_field) == 0)
  {
    $new_field = "NULL";
  }
  else
  {
    $new_field = "'$new_field'";
  }

  return $new_field;  
  
}

function NumberorNULL($f){
  
  $new_field = trim($f);
  if (strlen($new_field) == 0)
  {
    $new_field = "NULL";
  }

  return $new_field;  
  
}

function TimeorNULL($f){
  
  $new_field = trim($f);
  if (strlen($new_field) == 0)
  {
    $new_field = "NULL";
  }
  else
  {
    $pos1 = stripos($new_field, "T");
    $new_field = substr($new_field, $pos1 + 1); 
    $new_field = "'$new_field'";
  }

  return $new_field;  
  
}

function setDBBoolean($f){
  
  $new_field = trim($f);
  if (strlen($new_field) == 0)
  {
    $new_field = "NULL";
  }
  elseif ($new_field == "true" || $new_field == "yes" || $new_field == "Y")
  {
    $new_field = "'Y'";
  }
  else
  {
    $new_field = "'N'";
  }

  return $new_field;  
  
}

session_start();

  if (!isset($_SESSION['dbServer']) || empty($_SESSION['dbServer'])) 
  {
    $result['success'] = false;
    $result['msg'] = "no_session";
    session_destroy();
    echo json_encode($result);
    die();

  }

$server = $_SESSION["dbServer"];
$user = $_SESSION["dbUser"];
$pass = $_SESSION["dbPW"];
$dbName = $_SESSION["dbDatabase"];

$mysqli = new mysqli($server, $user, $pass, $dbName);
/* check connection */
/* might want to change this code to send error message back to extj */
if ($mysqli->connect_errno) {
    $result['success'] = false;
    $result['msg'] = 'Unable to Connect to Database.';
    echo json_encode($result);
    exit("Unable to connect to Database");
}



?>