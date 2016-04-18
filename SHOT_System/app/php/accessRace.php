<?php

  $Action = $_POST['Action']; 
  $Race_ID = $_POST['Race_ID']; 
  $Race = $_POST['Race']; 
  $result = array();

/* This will automatically open a database connection and check if the session has expired */
  require("common.php");
  set_error_handler("customError");

  $func = "Access Race";
  $needed_access_functions = array("Access_NewIncident","Access_QueryUpdate");
  Verify_Security($func, $needed_access_functions);

  if ($Action == "A")
  {
	
	$emsg = "Error Adding Race to Database!";
    $stmtx = $mysqli->prepare("INSERT INTO race (Race) VALUES (?)");
    if ( false===$stmtx ) {
      trigger_error($emsg);
    }

    $rc = $stmtx->bind_param('s', $Race);
    if (false===$rc)
    {
      trigger_error($emsg);
    }
    if ($resultdb = $stmtx->execute() != TRUE) {
      trigger_error($emsg);
    }
    $stmtx->close();
	
  }  

  
  $emsg = "Error Retrieving Race from Database!";
  $stmt = $mysqli->prepare("SELECT Race_ID, Race FROM race order by Race"); 
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
	"Race" => $result

  ));	
/* close connection */
  $mysqli->close();

?>