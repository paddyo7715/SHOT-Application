<?php

  $Action = $_POST['Action']; 
  $Weapons_ID = $_POST['Weapons_ID']; 
  $Weapons_Type = $_POST['Weapons_Type']; 
  $result = array();

/* This will automatically open a database connection and check if the session has expired */
  require("common.php");
  set_error_handler("customError");

  $func = "Access Weapons";
  $needed_access_functions = array("Access_NewIncident","Access_QueryUpdate");
  Verify_Security($func, $needed_access_functions);

  if ($Action == "A")
  {
    $sql = "INSERT INTO weapons (Weapons_Type) VALUES ('$Weapons_Type')"; 

    if ($resultdb = $mysqli->query($sql) != TRUE) {
      trigger_error("Error Adding Weapon to Database!");
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