<?php

  $Call_Type = $_POST['Call_Type']; 
  $result = array();

/* This will automatically open a database connection and check if the session has expired */
  require("common.php");
  set_error_handler("customError");

  $sql = "INSERT INTO Officer_Call_Type (Call_Type) VALUES ('$Call_Type')"; 

  if ($resultdb = $mysqli->query($sql) != TRUE) {
    trigger_error("Error Adding Call_Type to Database!");
  }

  $sql = "SELECT Call_Type_ID, Call_Type FROM Officer_Call_Type order by Call_Type";

  if ($resultdb = $mysqli->query($sql)) {
	while($record = $resultdb->fetch_assoc()) {
		array_push($result, $record);
	}
       $resultdb->close();
  }
  else { trigger_error("Error Retrieving Call_Type from Database!"); } 


//send back information to extjs
  echo json_encode(array(
	"success" => $mysqli->connect_errno == 0,
	"Officer_Call_Type" => $result

  ));	
/* close connection */
  $mysqli->close();

?>