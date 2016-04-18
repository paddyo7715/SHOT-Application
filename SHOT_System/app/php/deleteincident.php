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

	$emsg = "Error deleting Incident Database!";
    $stmtx = $mysqli->prepare("DELETE from incident WHERE Incident_ID = ?");
    if ( false===$stmtx ) {
      trigger_error($emsg);
    }
    $rc = $stmtx->bind_param('i', $Incident_ID);
    if (false===$rc)
    {
	  $mysqli->rollback();
      trigger_error($emsg);
    }
    if ($resultdb = $stmtx->execute() != TRUE) {
	  $mysqli->rollback();
      trigger_error($emsg);
    }
    $stmtx->close();


// Commit transaction
    $mysqli->commit();
    


//    error_log($last_id);

  $result = array();
  
//  $emsg = "Error Retrieving incidents from Database!";
//  $stmt = $mysqli->prepare("SELECT Incident_ID, Incident_Name, Date_Occured, City, State FROM incident I, state S where I.State_ID = S.State_ID order by Incident_Name"); 
//  if ( false===$stmt ) {
//      trigger_error($emsg);
//  }
//  $rslt = $stmt->execute();
//  if ($rslt == TRUE) {
//    if ($resultdb = $stmt->get_result()) {
//	while($record = $resultdb->fetch_assoc()) {
//		array_push($result, $record);
//	}
//       $stmt->close();
//    }
//    else { trigger_error($emsg); } 
//  }
//  else { trigger_error($emsg); } 


//send back information to extjs
  echo json_encode(array(
	"success" => $mysqli->connect_errno == 0,
	"Incident" => $result

  ));	
//  error_log("Before close");
/* close connection */
  $mysqli->close();

?>