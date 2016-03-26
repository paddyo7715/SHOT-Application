<?php

/* This will automatically open a database connection and check if the session has expired */
  require("common.php");
  set_error_handler("customError");

  $func = "Delete Incident";
  $needed_access_functions = array("Access_QueryUpdate");
  Verify_Security($func, $needed_access_functions);

  $Incident_ID = $_POST['Incident_ID'];   



// Set autocommit to off
    mysqli_autocommit($mysqli,FALSE);

    $sql = "DELETE from incident WHERE Incident_ID = $Incident_ID"; 

//    error_log($sql);
    if ($resultdb = $mysqli->query($sql) != TRUE) {
      $mysqli->rollback();
      trigger_error("Error deleting Incident Database!");
    }


// Commit transaction
    $mysqli->commit();
    


//    error_log($last_id);

  $result = array();
//  $sql = "SELECT Incident_ID, Incident_Name, Date_Occured, City, State FROM incident I, state S where I.State_ID = S.State_ID order by Incident_Name";
////  error_log($sql);
//  if ($resultdb = $mysqli->query($sql)) {
//	while($record = $resultdb->fetch_assoc()) {
//		array_push($result, $record);
//	}
//       $resultdb->close();
//  }
//  else { trigger_error("Error Retrieving incidents from Database!"); } 


//send back information to extjs
  echo json_encode(array(
	"success" => $mysqli->connect_errno == 0,
	"Incident" => $result

  ));	
//  error_log("Before close");
/* close connection */
  $mysqli->close();

?>