<?php

  $Action = $_POST['Action']; 
  $Mental_Status_ID = $_POST['Mental_Status_ID']; 
  $Mental_Status = $_POST['Mental_Status']; 
  $result = array();

/* This will automatically open a database connection and check if the session has expired */
  require("commonADM.php");
  set_error_handler("customError");

  $func = "Access Mental States";
  $needed_access_functions = array("Access_DatabaseMaint");
  Verify_Security($func, $needed_access_functions);

  if ($Action == "A")
  {
  $sql = "INSERT INTO mental_states (Mental_Status) VALUES ('$Mental_Status')"; 

    if ($resultdb = $mysqli->query($sql) != TRUE) {
      trigger_error("Error Adding Mental Status to Database!");
    }
  }  
  elseif ($Action == "U")
  {
    $sql = "UPDATE mental_states set Mental_Status = '$Mental_Status' WHERE Mental_Status_ID = $Mental_Status_ID"; 

    if ($resultdb = $mysqli->query($sql) != TRUE) {
      trigger_error("Error Updating Mental Status in Database!");
    }
  }  
  elseif ($Action == "D")
  {
    $sql = "DELETE FROM mental_states WHERE  Mental_Status_ID = $Mental_Status_ID"; 

    if ($resultdb = $mysqli->query($sql) != TRUE) {
      trigger_error("Error Deleting Mental Status from Database!  This Aggression Type may be used in an Incident");
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