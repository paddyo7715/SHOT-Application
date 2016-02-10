<?php

  $Action = $_POST['Action']; 
  $Dept_Type_ID = $_POST['Dept_Type_ID']; 
  $Dept_Type = $_POST['Dept_Type']; 
  $result = array();

/* This will automatically open a database connection and check if the session has expired */
  require("common.php");
  set_error_handler("customError");

  if ($Action == "A")
  {
    $sql = "INSERT INTO Officer_Dept_Type (Dept_Type) VALUES ('$Dept_Type')"; 

    if ($resultdb = $mysqli->query($sql) != TRUE) {
      trigger_error("Error Adding Department Type to Database!");
    }
  }  
  elseif ($Action == "U")
  {
    $sql = "UPDATE Officer_Dept_Type set Dept_Type = '$Dept_Type' WHERE Dept_Type_ID = $Dept_Type_ID"; 

    if ($resultdb = $mysqli->query($sql) != TRUE) {
      trigger_error("Error Updating Department in Database!");
    }
  }  
  elseif ($Action == "D")
  {
    $sql = "DELETE FROM Officer_Dept_Type WHERE Dept_Type_ID = $Dept_Type_ID"; 

    if ($resultdb = $mysqli->query($sql) != TRUE) {
      trigger_error("Error Deleting Department from Database!  This Department may be used in an Incident");
    }
  }  



  $sql = "SELECT Dept_Type_ID, Dept_Type FROM Officer_Dept_Type order by Dept_Type";

  if ($resultdb = $mysqli->query($sql)) {
	while($record = $resultdb->fetch_assoc()) {
		array_push($result, $record);
	}
       $resultdb->close();
  }
  else { trigger_error("Error Retrieving Dept_Type from Database!"); } 


//send back information to extjs
  echo json_encode(array(
	"success" => $mysqli->connect_errno == 0,
	"Officer_Dept_Type" => $result	
  ));
/* close connection */
  $mysqli->close();

?>