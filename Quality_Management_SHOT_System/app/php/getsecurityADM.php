<?php

session_start();


if ((!isset($_SESSION['Access_UserManagement']) || empty($_SESSION['Access_UserManagement']) || 
    !isset($_SESSION['Access_DatabaseMaint']) || empty($_SESSION['Access_DatabaseMaint']))  ||
    ($_SESSION['Access_UserManagement'] != "Y" && $_SESSION['Access_DatabaseMaint'] != "Y") ||
    $_SESSION['password_reset'] == 1)
{
    $result['success'] = false;
    $result['msg'] = "no_session";
    session_destroy();
    echo json_encode($result);
    die();
} 

$Access_UserManagement = $_SESSION["Access_UserManagement"];
$Access_DatabaseMaint = $_SESSION["Access_DatabaseMaint"];

//send back information to extjs
  echo json_encode(array(
	"success" => true,
	"Access_UserManagement" => $Access_UserManagement,
	"Access_DatabaseMaint" => $Access_DatabaseMaint

  ));	


?>