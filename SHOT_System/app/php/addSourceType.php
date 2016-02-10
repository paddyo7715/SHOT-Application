<?php

  $Source = $_POST['Source']; 
  $result = array();

/* This will automatically open a database connection and check if the session has expired */
  require("common.php");
  set_error_handler("customError");

  $sql = "INSERT INTO Source_Type (Source) VALUES ('$Source')"; 

  if ($resultdb = $mysqli->query($sql) != TRUE) {
    trigger_error("Error Adding Source to Database!");
  }

  $sql = "SELECT Source_Type_ID, Source FROM Source_Type order by Source";

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