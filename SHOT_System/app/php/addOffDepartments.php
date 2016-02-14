<?php

  $Department = $_POST['Department']; 
  $result = array();

/* This will automatically open a database connection and check if the session has expired */
  require("common.php");
  set_error_handler("customError");

  $sql = "INSERT INTO officer_department (Department) VALUES ('$Department')"; 

  if ($resultdb = $mysqli->query($sql) != TRUE) {
    trigger_error("Error Adding Department to Database!");
  }

  $sql = "SELECT Department_ID, Department FROM officer_department order by Department";

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