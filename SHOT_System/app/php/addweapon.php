<?php

  $Weapons_Type = $_POST['Weapons_Type']; 
  $result = array();

/* This will automatically open a database connection and check if the session has expired */
  require("common.php");
  set_error_handler("customError");

  $sql = "INSERT INTO Weapons (Weapons_Type) VALUES ('$Weapons_Type')"; 

  if ($resultdb = $mysqli->query($sql) != TRUE) {
    trigger_error("Error Adding Weapon Type to Database!");
  }

  $sql = "SELECT Weapons_ID, Weapons_Type FROM Weapons order by Weapons_Type";

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