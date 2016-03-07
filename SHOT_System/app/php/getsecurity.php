<?php

session_start();

if ((!isset($_SESSION['Access_NewIncident']) || empty($_SESSION['Access_NewIncident']) || 
    !isset($_SESSION['Access_QueryView']) || empty($_SESSION['Access_QueryView']) ||
    !isset($_SESSION['Access_QueryUpdate']) || empty($_SESSION['Access_QueryUpdate']) ||
    !isset($_SESSION['Access_Reports']) || empty($_SESSION['Access_Reports']))  ||
    ($_SESSION['Access_NewIncident'] != "Y" && $_SESSION['Access_QueryView'] != "Y" &&
    $_SESSION['Access_QueryUpdate'] != "Y" && $_SESSION['Access_Reports'] != "Y") ||
    $_SESSION['password_reset'] == 1)
{
    $result['success'] = false;
    $result['msg'] = "no_session";
    session_destroy();
    echo json_encode($result);
    die();
} 

$Access_NewIncident = $_SESSION["Access_NewIncident"];
$Access_QueryView = $_SESSION["Access_QueryView"];
$Access_QueryUpdate = $_SESSION["Access_QueryUpdate"];
$Access_Reports = $_SESSION["Access_Reports"];


//send back information to extjs
  echo json_encode(array(
	"success" => true,
	"Access_NewIncident" => $Access_NewIncident,
	"Access_QueryView" => $Access_QueryView,
	"Access_QueryUpdate" => $Access_QueryUpdate,
	"Access_Reports" => $Access_Reports

  ));	


?>