<?php

  $Action = $_POST['Action']; 
  $Status_ID = $_POST['Status_ID']; 
  $Status = $_POST['Status']; 
  $result = array();

/* This will automatically open a database connection and check if the session has expired */
  require("common.php");
  set_error_handler("customError");

  if ($Action == "A")
  {
    $sql = "INSERT INTO Officer_Status (Status) VALUES ('$Status')"; 

    if ($resultdb = $mysqli->query($sql) != TRUE) {
      trigger_error("Error Adding Officer Status to Database!");
    }
  }  
  elseif ($Action == "U")
  {
    $sql = "UPDATE Officer_Status set Status = '$Status' WHERE Status_ID = $Status_ID"; 

    if ($resultdb = $mysqli->query($sql) != TRUE) {
      trigger_error("Error Updating Status in Database!");
    }
  }  
  elseif ($Action == "D")
  {
    $sql = "DELETE FROM Officer_Status WHERE Status_ID = $Status_ID"; 

    if ($resultdb = $mysqli->query($sql) != TRUE) {
      trigger_error("Error Deleting Status from Database!  This Status may be used by an officer");
    }
  }  



  $sql = "SELECT Status_ID, Status FROM Officer_Status order by Status";

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