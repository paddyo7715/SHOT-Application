<?php

  $Action = $_POST['Action']; 
  $Location_ID = $_POST['Location_ID']; 
  $Location = $_POST['Location']; 
  $result = array();

/* This will automatically open a database connection and check if the session has expired */
  require("commonADM.php");
  set_error_handler("customError");

  $func = "Access Locations";
  $needed_access_functions = array("Access_DatabaseMaint");
  Verify_Security($func, $needed_access_functions);

  if ($Action == "A")
  {
    $emsg = "Error Adding Location to Database!";
    $stmtx = $mysqli->prepare("INSERT INTO location (Location) VALUES (?)");
    if ( false===$stmtx ) {
      trigger_error($emsg);
    }

    $rc = $stmtx->bind_param('s', $Location);
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

    $emsg = "Error Updating Location in Database!";
    $stmtx = $mysqli->prepare("UPDATE location set Location = ? WHERE Location_ID = ?");
    if ( false===$stmtx ) {
      trigger_error($emsg);
    }
    $rc = $stmtx->bind_param('si', $Location, $Location_ID);
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
    $emsg = "Error Deleting Location in Database!  This Location may be used in an Incident";
    $stmtx = $mysqli->prepare("DELETE FROM location WHERE Location_ID = ?");
    if ( false===$stmtx ) {
      trigger_error($emsg);
    }
    $rc = $stmtx->bind_param('i', $Location_ID);
    if (false===$rc)
    {
      trigger_error($emsg);
    }
    if ($resultdb = $stmtx->execute() != TRUE) {
      trigger_error($emsg);
    }
    $stmtx->close();

  }  

  $emsg = "Error Retrieving Location from Database!";
  $stmt = $mysqli->prepare("SELECT Location_ID, Location FROM location order by Location "); 
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
	"Location" => $result

  ));	
/* close connection */
  $mysqli->close();

?>