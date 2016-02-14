<?php

  $Dept_Type = $_POST['Dept_Type']; 
  $result = array();

/* This will automatically open a database connection and check if the session has expired */
  require("common.php");
  set_error_handler("customError");

  $sql = "INSERT INTO officer_dept_type (Dept_Type) VALUES ('$Dept_Type')"; 

  if ($resultdb = $mysqli->query($sql) != TRUE) {
    trigger_error("Error Adding Dept_Type to Database!");
  }

  $sql = "SELECT Dept_Type_ID, Dept_Type FROM officer_dept_type order by Dept_Type";

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