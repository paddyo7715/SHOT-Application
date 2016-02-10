<?php

  $Action = $_POST['Action']; 
  $Location_ID = $_POST['Location_ID']; 
  $Location = $_POST['Location']; 
  $result = array();

/* This will automatically open a database connection and check if the session has expired */
  require("common.php");
  set_error_handler("customError");

  if ($Action == "A")
  {
    $sql = "INSERT INTO Location (Location) VALUES ('$Location')"; 

    if ($resultdb = $mysqli->query($sql) != TRUE) {
      trigger_error("Error Adding Location to Database!");
    }
  }  
  elseif ($Action == "U")
  {
    $sql = "UPDATE Location set Location = '$Location' WHERE Location_ID = $Location_ID"; 

    if ($resultdb = $mysqli->query($sql) != TRUE) {
      trigger_error("Error Updating Location to Database!");
    }
  }  
  elseif ($Action == "D")
  {
    $sql = "DELETE FROM Location WHERE Location_ID = $Location_ID"; 

    if ($resultdb = $mysqli->query($sql) != TRUE) {
      trigger_error("Error Deleting Location to Database!  This Location may be used in an Incident");
    }
  }  


  $sql = "SELECT Location_ID, Location FROM Location";
//error_log($sql);
  if ($resultdb = $mysqli->query($sql)) {
	while($record = $resultdb->fetch_assoc()) {
		array_push($result, $record);
	}
       $resultdb->close();
  }
  else { trigger_error("Error Retrieving Locations from Database!"); } 


//send back information to extjs
  echo json_encode(array(
	"success" => $mysqli->connect_errno == 0,
	"Location" => $result

  ));	
/* close connection */
  $mysqli->close();

?>