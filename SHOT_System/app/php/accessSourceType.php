<?php

  $Action = $_POST['Action']; 
  $Source_Type_ID = $_POST['Source_Type_ID']; 
  $Source = $_POST['Source']; 
  $result = array();

/* This will automatically open a database connection and check if the session has expired */
  require("common.php");
  set_error_handler("customError");

  if ($Action == "A")
  {
    $sql = "INSERT INTO source_type (Source) VALUES ('$Source')"; 

    if ($resultdb = $mysqli->query($sql) != TRUE) {
      trigger_error("Error Adding Source Type to Database!");
    }
  }  
  elseif ($Action == "U")
  {
    $sql = "UPDATE source_type set Source = '$Source' WHERE Source_Type_ID = $Source_Type_ID"; 

    if ($resultdb = $mysqli->query($sql) != TRUE) {
      trigger_error("Error Updating Source Type in Database!");
    }
  }  
  elseif ($Action == "D")
  {
    $sql = "DELETE FROM source_type WHERE Source_Type_ID = $Source_Type_ID"; 

    if ($resultdb = $mysqli->query($sql) != TRUE) {
      trigger_error("Error Deleting Source Type from Database!  This Source Type may be used in an Incident");
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