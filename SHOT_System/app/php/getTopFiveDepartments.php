<?php

  $result = array();

/* This will automatically open a database connection and check if the session has expired */
  require("common.php");
  set_error_handler("customError");

  $num_rows = 0;
  $sql = "SELECT incident_officer.Department_ID, Department FROM incident_officer, officer_department WHERE incident_officer.Department_ID=officer_department.Department_ID GROUP BY Department_ID ORDER BY COUNT(*) DESC limit 5";

//  error_log($sql);
  if ($resultdb = $mysqli->query($sql)) {
	while($record = $resultdb->fetch_assoc()) {
		array_push($result, $record);
                $num_rows++;
	}
       $resultdb->close();
  }
  else { trigger_error("Error Retrieving incidents from Database!"); } 


//send back information to extjs
  echo json_encode(array(
	"success" => $mysqli->connect_errno == 0,
        "num_rows" => $num_rows, 
	"TopFiveDepartments" => $result

  ));	
/* close connection */
  $mysqli->close();

?>