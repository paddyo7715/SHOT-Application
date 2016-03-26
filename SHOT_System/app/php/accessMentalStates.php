<?php

  $Action = $_POST['Action']; 
  $Mental_Status_ID = $_POST['Mental_Status_ID']; 
  $Mental_Status = $_POST['Mental_Status']; 
  $result = array();

/* This will automatically open a database connection and check if the session has expired */
  require("common.php");
  set_error_handler("customError");

  $func = "Access Officer Mental States";
  $needed_access_functions = array("Access_NewIncident","Access_QueryUpdate");
  Verify_Security($func, $needed_access_functions);

  if ($Action == "A")
  {
  $sql = "INSERT INTO mental_states (Mental_Status) VALUES ('$Mental_Status')"; 

    if ($resultdb = $mysqli->query($sql) != TRUE) {
      trigger_error("Error Adding Mental Status to Database!");
    }
  }  
 


  $sql = "SELECT Mental_Status_ID, Mental_Status FROM mental_states order by Mental_Status";

  if ($resultdb = $mysqli->query($sql)) {
	while($record = $resultdb->fetch_assoc()) {
		array_push($result, $record);
	}
       $resultdb->close();
  }
  else { trigger_error("Error Retrieving Mental Status from Database!"); } 


//send back information to extjs
  echo json_encode(array(
	"success" => $mysqli->connect_errno == 0,
	"Mental_States" => $result

  ));	
/* close connection */
  $mysqli->close();

?>