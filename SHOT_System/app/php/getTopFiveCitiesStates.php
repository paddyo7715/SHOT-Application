<?php

  $result = array();

/* This will automatically open a database connection and check if the session has expired */
  require("common.php");
  set_error_handler("customError");

  $num_rows = 0;
  $sql = "SELECT City, State FROM Incident, state WHERE Incident.state_ID = state.state_ID GROUP BY City, state ORDER BY COUNT(*) DESC LIMIT 5";
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
	"TopCityState" => $result

  ));	
/* close connection */
  $mysqli->close();

?>