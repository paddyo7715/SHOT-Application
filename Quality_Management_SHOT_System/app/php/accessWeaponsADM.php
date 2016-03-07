<?php

  $Action = $_POST['Action']; 
  $Weapons_ID = $_POST['Weapons_ID']; 
  $Weapons_Type = $_POST['Weapons_Type']; 
  $result = array();

/* This will automatically open a database connection and check if the session has expired */
  require("commonADM.php");
  set_error_handler("customError");

  $func = "Access Weapons";
  $needed_access_functions = array("Access_DatabaseMaint");
  Verify_Security($func, $needed_access_functions);

  if ($Action == "A")
  {
    $sql = "INSERT INTO weapons (Weapons_Type) VALUES ('$Weapons_Type')"; 

    if ($resultdb = $mysqli->query($sql) != TRUE) {
      trigger_error("Error Adding Weapon to Database!");
    }
  }  
  elseif ($Action == "U")
  {
    $sql = "UPDATE weapons set Weapons_Type = '$Weapons_Type' WHERE Weapons_ID = $Weapons_ID"; 

    if ($resultdb = $mysqli->query($sql) != TRUE) {
      trigger_error("Error Updating Weapon in Database!");
    }
  }  
  elseif ($Action == "D")
  {
    $sql = "DELETE FROM weapons WHERE Weapons_ID = $Weapons_ID"; 

    if ($resultdb = $mysqli->query($sql) != TRUE) {
      trigger_error("Error Deleting Weapon from Database!  This Weapon may be used in an Incident");
    }
  }  

  $sql = "SELECT Weapons_ID, Weapons_Type FROM weapons order by Weapons_Type";

  if ($resultdb = $mysqli->query($sql)) {
	while($record = $resultdb->fetch_assoc()) {
		array_push($result, $record);
	}
       $resultdb->close();
  }
  else { trigger_error("Error Retrieving Weapons from Database!"); } 


//send back information to extjs
  echo json_encode(array(
	"success" => $mysqli->connect_errno == 0,
	"Weapons" => $result

  ));	
/* close connection */
  $mysqli->close();

?>