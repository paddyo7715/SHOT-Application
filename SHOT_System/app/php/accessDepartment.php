<?php

  $Action = $_POST['Action']; 
  $Department_ID = $_POST['Department_ID']; 
  $Department = $_POST['Department']; 
  $result = array();

/* This will automatically open a database connection and check if the session has expired */
  require("common.php");
  set_error_handler("customError");

  if ($Action == "A")
  {
    $sql = "INSERT INTO Officer_Department (Department) VALUES ('$Department')"; 

    if ($resultdb = $mysqli->query($sql) != TRUE) {
      trigger_error("Error Adding Department to Database!");
    }
  }  
  elseif ($Action == "U")
  {
    $sql = "UPDATE Officer_Department set Department = '$Department' WHERE Department_ID = $Department_ID"; 

    if ($resultdb = $mysqli->query($sql) != TRUE) {
      trigger_error("Error Updating Department in Database!");
    }
  }  
  elseif ($Action == "D")
  {
    $sql = "DELETE FROM Officer_Department WHERE Department_ID = $Department_ID"; 

    if ($resultdb = $mysqli->query($sql) != TRUE) {
      trigger_error("Error Deleting Department from Database!  This Department may be used in an Incident");
    }
  }  


  $sql = "SELECT Department_ID, Department FROM Officer_Department order by Department";

  if ($resultdb = $mysqli->query($sql)) {
	while($record = $resultdb->fetch_assoc()) {
		array_push($result, $record);
	}
       $resultdb->close();
  }
  else { trigger_error("Error Retrieving Departments from Database!"); } 


//send back information to extjs
  echo json_encode(array(
	"success" => $mysqli->connect_errno == 0,
	"Officer_Department" => $result

  ));	
/* close connection */
  $mysqli->close();

?>