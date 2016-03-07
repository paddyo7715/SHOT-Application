<?php

  $Action = $_POST['Action']; 
  $Location_ID = $_POST['Location_ID']; 
  $Location_Det_ID = $_POST['Location_Det_ID']; 
  $Location_Det = $_POST['Location_Det']; 
  $result = array();
  $result2 = array();

/* This will automatically open a database connection and check if the session has expired */
  require("commonADM.php");
  set_error_handler("customError");

  $func = "Access Location Details";
  $needed_access_functions = array("Access_DatabaseMaint");
  Verify_Security($func, $needed_access_functions);

  if ($Action == "A")
  {
    $emsg = "Error Adding Location Detail to Database!";
    $stmtx = $mysqli->prepare("INSERT INTO location_detail (Location_Details, Location_ID) VALUES (?, ?)");
    if ( false===$stmtx ) {
      trigger_error($emsg);
    }

    $rc = $stmtx->bind_param('si', $Location_Det, $Location_ID);
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
    $emsg = "Error Updating Location Detail in Database!";
    $stmtx = $mysqli->prepare("UPDATE location_detail set Location_Details = ?, Location_ID = ? WHERE Location_Detail_ID = ?");
    if ( false===$stmtx ) {
      trigger_error($emsg);
    }
    $rc = $stmtx->bind_param('sii', $Location_Det, $Location_ID, $Location_Det_ID);
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
    $emsg = "Error Deleting Location Detail in Database!  This Location Detail may be used in an Location";
    $stmtx = $mysqli->prepare("DELETE FROM location_detail WHERE Location_Detail_ID = ?");
    if ( false===$stmtx ) {
      trigger_error($emsg);
    }
    $rc = $stmtx->bind_param('i', $Location_Det_ID);
    if (false===$rc)
    {
      trigger_error($emsg);
    }
    if ($resultdb = $stmtx->execute() != TRUE) {
      trigger_error($emsg);
    }
    $stmtx->close();
  }  


    $emsg = "Error Retrieving Location Detail from Database!";
  $stmt = $mysqli->prepare("SELECT Location_Detail_ID, Location_Details, Location, ld.Location_ID FROM location_detail ld, location l where ld.Location_ID = l.Location_ID order by Location_Details "); 
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

  $emsg = "Error Retrieving Locations from Database!";
  $stmt = $mysqli->prepare("SELECT Location_ID, Location FROM location order by Location");
  if ( false===$stmt ) {
      trigger_error($emsg);
  }
  $rslt = $stmt->execute();
  if ($rslt == TRUE) {
    if ($resultdb = $stmt->get_result()) {
	while($record = $resultdb->fetch_assoc()) {
		array_push($result2, $record);
	}
       $stmt->close();
    }
    else { trigger_error($emsg); } 
  }
  else { trigger_error($emsg); } 



//send back information to extjs
  echo json_encode(array(
	"success" => $mysqli->connect_errno == 0,
	"Location_Detail" => $result,
	"Location" => $result2

  ));	
/* close connection */
  $mysqli->close();

?>