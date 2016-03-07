<?php

  $Action = $_POST['Action']; 
  $Source_Type_ID = $_POST['Source_Type_ID']; 
  $Source = $_POST['Source']; 
  $result = array();

/* This will automatically open a database connection and check if the session has expired */
  require("common.php");
  set_error_handler("customError");

  $func = "Access Source Types";
  $needed_access_functions = array("Access_NewIncident","Access_QueryUpdate");
  Verify_Security($func, $needed_access_functions);

  if ($Action == "A")
  {
    $sql = "INSERT INTO source_type (Source) VALUES ('$Source')"; 

    if ($resultdb = $mysqli->query($sql) != TRUE) {
      trigger_error("Error Adding Source Type to Database!");
    }
  }  

  $sql = "SELECT Source_Type_ID, Source FROM source_type order by Source";

  if ($resultdb = $mysqli->query($sql)) {
	while($record = $resultdb->fetch_assoc()) {
		array_push($result, $record);
	}
       $resultdb->close();
  }
  else { trigger_error("Error Retrieving sources from Database!"); } 


//send back information to extjs
  echo json_encode(array(
	"success" => $mysqli->connect_errno == 0,
	"Source_Type" => $result

  ));	
/* close connection */
  $mysqli->close();

?>