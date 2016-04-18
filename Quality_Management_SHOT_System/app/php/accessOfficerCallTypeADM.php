<?php

  $Action = $_POST['Action']; 
  $Call_Type_ID = $_POST['Call_Type_ID']; 
  $Call_Type = $_POST['Call_Type']; 
  $result = array();

/* This will automatically open a database connection and check if the session has expired */
  require("commonADM.php");
  set_error_handler("customError");

  $func = "Access Officer Call Type";
  $needed_access_functions = array("Access_DatabaseMaint");
  Verify_Security($func, $needed_access_functions);

  if ($Action == "A")
  {
	$emsg = "Error Adding Call Type to Database!";
    $stmtx = $mysqli->prepare("INSERT INTO officer_call_type (Call_Type) VALUES (?)");
    if ( false===$stmtx ) {
      trigger_error($emsg);
    }

    $rc = $stmtx->bind_param('s', $Call_Type);
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
	
	$emsg = "Error Updating Officer Call Type Database!";
    $stmtx = $mysqli->prepare("UPDATE officer_call_type set Call_Type = ? WHERE Call_Type_ID = ?");
    if ( false===$stmtx ) {
      trigger_error($emsg);
    }

    $rc = $stmtx->bind_param('si', $Call_Type, $Call_Type_ID);
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
	
	$emsg = "Error Deleting Officer Call Type to Database!  This Officer Call Type may be used in an Incident";
    $stmtx = $mysqli->prepare("DELETE FROM officer_call_type WHERE Call_Type_ID = ?");
    if ( false===$stmtx ) {
      trigger_error($emsg);
    }

    $rc = $stmtx->bind_param('i', $Call_Type_ID);
    if (false===$rc)
    {
      trigger_error($emsg);
    }
    if ($resultdb = $stmtx->execute() != TRUE) {
      trigger_error($emsg);
    }
    $stmtx->close();
	
  }  

  $emsg = "Error Retrieving Call_Type from Database!";
  $stmt = $mysqli->prepare("SELECT Call_Type_ID, Call_Type FROM officer_call_type order by Call_Type"); 
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
	"Officer_Call_Type" => $result

  ));	
/* close connection */
  $mysqli->close();

?>