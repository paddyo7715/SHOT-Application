<?php

  $Action = $_POST['Action']; 
  $Mental_Status_ID = $_POST['Mental_Status_ID']; 
  $Mental_Status = $_POST['Mental_Status']; 
  $result = array();

/* This will automatically open a database connection and check if the session has expired */
  require("common.php");
  set_error_handler("customError");

  $func = "Access Officer Mental States";
  $needed_access_functions = array("Access_NewIncident","Access_QueryUpdate");
  Verify_Security($func, $needed_access_functions);

  if ($Action == "A")
  {
	$emsg = "Error Adding Mental Status to Database!";
	$stmtx = $mysqli->prepare("INSERT INTO mental_states (Mental_Status) VALUES (?)");
    if ( false===$stmtx ) {
      trigger_error($emsg);
    }
    $rc = $stmtx->bind_param('s', $Mental_Status);
    if (false===$rc)
    {
      trigger_error($emsg);
    }
    if ($resultdb = $stmtx->execute() != TRUE) {
      trigger_error($emsg);
    }
    $stmtx->close();
  }  
 
  $emsg = "Error Retrieving Mental Status from Database!";
  $stmt = $mysqli->prepare("SELECT Mental_Status_ID, Mental_Status FROM mental_states order by Mental_Status"); 
  if ( false===$stmt ) {
      trigger_error($emsg);
  }
  $rslt = $stmt->execute();
  if ($rslt == TRUE) {
    if ($resultdb = $stmt->get_result()) {
	while($record = $resultdb->fetch_assoc()) {
		array_push($result, $record);
	}
       $stmt->close();
    }
    else { trigger_error($emsg); } 
  }
  else { trigger_error($emsg); } 


//send back information to extjs
  echo json_encode(array(
	"success" => $mysqli->connect_errno == 0,
	"Mental_States" => $result

  ));	
/* close connection */
  $mysqli->close();

?>