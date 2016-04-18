<?php

  $Action = $_POST['Action']; 
  $Assignment_ID = $_POST['Assignment_ID']; 
  $Assignment = $_POST['Assignment']; 
  $result = array();

/* This will automatically open a database connection and check if the session has expired */
  require("commonADM.php");
  set_error_handler("customError");

  $func = "Access Officer Assignment";
  $needed_access_functions = array("Access_DatabaseMaint");
  Verify_Security($func, $needed_access_functions);

  if ($Action == "A")
  {
	
	$emsg = "Error Adding Officer Assignment to Database!";
    $stmtx = $mysqli->prepare("INSERT INTO officer_assignment (Assignment) VALUES (?)");
    if ( false===$stmtx ) {
      trigger_error($emsg);
    }

    $rc = $stmtx->bind_param('s', $Assignment);
    if (false===$rc)
    {
      trigger_error($emsg);
    }
    if ($resultdb = $stmtx->execute() != TRUE) {
      trigger_error($emsg);
    }
    $stmtx->close();
	
  }  
  elseif ($Action == "U")
  {
	
	$emsg = "Error Updating Officer Assignment in Database!";
    $stmtx = $mysqli->prepare("UPDATE officer_assignment set Assignment = ? WHERE Assignment_ID = ?");
    if ( false===$stmtx ) {
      trigger_error($emsg);
    }

    $rc = $stmtx->bind_param('si', $Assignment, $Assignment_ID);
    if (false===$rc)
    {
      trigger_error($emsg);
    }
    if ($resultdb = $stmtx->execute() != TRUE) {
      trigger_error($emsg);
    }
    $stmtx->close();
	
  }  
  elseif ($Action == "D")
  {
	
	$emsg = "Error Deleting Officer Assignment in Database!  This officer assignment may be used in an Incident";
    $stmtx = $mysqli->prepare("DELETE FROM officer_assignment WHERE Assignment_ID = ?");
    if ( false===$stmtx ) {
      trigger_error($emsg);
    }

    $rc = $stmtx->bind_param('i', $Assignment_ID);
    if (false===$rc)
    {
      trigger_error($emsg);
    }
    if ($resultdb = $stmtx->execute() != TRUE) {
      trigger_error($emsg);
    }
    $stmtx->close();
	
  }  

  $emsg = "Error Retrieving Assignments from Database!";
  $stmt = $mysqli->prepare("SELECT Assignment_ID, Assignment FROM officer_assignment order by Assignment"); 
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
	"Officer_Assignment" => $result

  ));	
/* close connection */
  $mysqli->close();

?>