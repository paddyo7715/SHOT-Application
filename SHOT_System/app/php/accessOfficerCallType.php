<?php

  $Action = $_POST['Action']; 
  $Call_Type_ID = $_POST['Call_Type_ID']; 
  $Call_Type = $_POST['Call_Type']; 
  $result = array();

/* This will automatically open a database connection and check if the session has expired */
  require("common.php");
  set_error_handler("customError");

  if ($Action == "A")
  {
    $sql = "INSERT INTO Officer_Call_Type (Call_Type) VALUES ('$Call_Type')"; 

    if ($resultdb = $mysqli->query($sql) != TRUE) {
      trigger_error("Error Adding Call Type to Database!");
    }
  }  
  elseif ($Action == "U")
  {
    $sql = "UPDATE Officer_Call_Type set Call_Type = '$Call_Type' WHERE Call_Type_ID = $Call_Type_ID"; 

    if ($resultdb = $mysqli->query($sql) != TRUE) {
      trigger_error("Error Updating Officer Call Type Database!");
    }
  }  
  elseif ($Action == "D")
  {
    $sql = "DELETE FROM Officer_Call_Type WHERE Call_Type_ID = $Call_Type_ID"; 

    if ($resultdb = $mysqli->query($sql) != TRUE) {
      trigger_error("Error Deleting Officer Call Type to Database!  This Officer Call Type may be used in an Incident");
    }
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