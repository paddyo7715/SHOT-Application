<?php

/* This will automatically open a database connection and check if the session has expired */
  require("common.php");
  set_error_handler("customError");

  $sourceid = $_POST['Source_ID'];   
  $Incident_ID = $_POST['Incident_ID']; 

  $func = "Delete Source";
  $needed_access_functions = array("Access_NewIncident","Access_QueryUpdate");
  Verify_Security($func, $needed_access_functions);

//Delete the Incident Source

    $sql = "DELETE from incident_source WHERE Source_ID = $sourceid and Incident_ID = $Incident_ID";
//    error_log($sql);
    if ($resultdb = $mysqli->query($sql) != TRUE) {
      trigger_error("Error Deleting Incident Source Record in Database!");
    }

  $result = array();
  $sql = "SELECT Source_ID, I.Source_Type_ID, Source, Title, Author, Source_Date, Link, I.Newspaper_ID, Newspaper, Abstract  FROM incident_source I LEFT OUTER JOIN source_type s on i.Source_Type_ID = s.Source_Type_ID left outer join newspapers n on i.Newspaper_ID = n.Newspaper_ID where Incident_ID = $Incident_ID  order by Source_ID";
//  error_log($sql);
  if ($resultdb = $mysqli->query($sql)) {
	while($record = $resultdb->fetch_assoc()) {
		array_push($result, $record);
	}
       $resultdb->close();
  }
  else { trigger_error("Error Retrieving incidents sources from Database!"); } 

//send back information to extjs
  echo json_encode(array(
	"success" => $mysqli->connect_errno == 0,
	"Incident_Source" => $result

  ));	

/* close connection */
  $mysqli->close();

?>