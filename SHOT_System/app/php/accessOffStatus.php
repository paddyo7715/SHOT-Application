<?php

  $Action = $_POST['Action']; 
  $Status_ID = $_POST['Status_ID']; 
  $Status = $_POST['Status']; 
  $result = array();

/* This will automatically open a database connection and check if the session has expired */
  require("common.php");
  set_error_handler("customError");

  $func = "Access Officer Status";
  $needed_access_functions = array("Access_NewIncident","Access_QueryUpdate");
  Verify_Security($func, $needed_access_functions);

  if ($Action == "A")
  {
    $sql = "INSERT INTO officer_status (Status) VALUES ('$Status')"; 

    if ($resultdb = $mysqli->query($sql) != TRUE) {
      trigger_error("Error Adding Officer Status to Database!");
    }
  }  


  $sql = "SELECT Status_ID, Status FROM officer_status order by Status";

  if ($resultdb = $mysqli->query($sql)) {
	while($record = $resultdb->fetch_assoc()) {
		array_push($result, $record);
	}
       $resultdb->close();
  }
  else { trigger_error("Error Retrieving Status from Database!"); } 


//send back information to extjs
  echo json_encode(array(
	"success" => $mysqli->connect_errno == 0,
	"Officer_Status" => $result

  ));	
/* close connection */
  $mysqli->close();

?>