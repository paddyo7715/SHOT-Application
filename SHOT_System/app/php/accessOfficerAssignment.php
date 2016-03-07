<?php

  $Action = $_POST['Action']; 
  $Assignment_ID = $_POST['Assignment_ID']; 
  $Assignment = $_POST['Assignment']; 
  $result = array();

/* This will automatically open a database connection and check if the session has expired */
  require("common.php");
  set_error_handler("customError");

  $func = "Access Officer Assignments";
  $needed_access_functions = array("Access_NewIncident","Access_QueryUpdate");
  Verify_Security($func, $needed_access_functions);

  if ($Action == "A")
  {
    $sql = "INSERT INTO officer_assignment (Assignment) VALUES ('$Assignment')"; 

    if ($resultdb = $mysqli->query($sql) != TRUE) {
      trigger_error("Error Adding Officer Assignment to Database!");
    }
  }  


  $sql = "SELECT Assignment_ID, Assignment FROM officer_assignment order by Assignment";

  if ($resultdb = $mysqli->query($sql)) {
	while($record = $resultdb->fetch_assoc()) {
		array_push($result, $record);
	}
       $resultdb->close();
  }
  else { trigger_error("Error Retrieving Assignments from Database!"); } 


//send back information to extjs
  echo json_encode(array(
	"success" => $mysqli->connect_errno == 0,
	"Officer_Assignment" => $result

  ));	
/* close connection */
  $mysqli->close();

?>