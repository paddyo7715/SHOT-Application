<?php

  $Action = $_POST['Action']; 
  $Call_Type_ID = $_POST['Call_Type_ID']; 
  $Call_Type = $_POST['Call_Type']; 
  $result = array();

/* This will automatically open a database connection and check if the session has expired */
  require("common.php");
  set_error_handler("customError");

  $func = "Access Officer Call Type";
  $needed_access_functions = array("Access_NewIncident","Access_QueryUpdate");
  Verify_Security($func, $needed_access_functions);

  if ($Action == "A")
  {
    $sql = "INSERT INTO officer_call_type (Call_Type) VALUES ('$Call_Type')"; 

    if ($resultdb = $mysqli->query($sql) != TRUE) {
      trigger_error("Error Adding Call Type to Database!");
    }
  }  


  $sql = "SELECT Call_Type_ID, Call_Type FROM officer_call_type order by Call_Type";

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