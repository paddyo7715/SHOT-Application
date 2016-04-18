<?php

  $Action = $_POST['Action']; 
  $Weapons_ID = $_POST['Weapons_ID']; 
  $Weapons_Type = $_POST['Weapons_Type']; 
  $result = array();

/* This will automatically open a database connection and check if the session has expired */
  require("commonADM.php");
  set_error_handler("customError");

  $func = "Access Weapons";
  $needed_access_functions = array("Access_DatabaseMaint");
  Verify_Security($func, $needed_access_functions);

  if ($Action == "A")
  {
	
	$emsg = "Error Adding Weapon to Database!";
    $stmtx = $mysqli->prepare("INSERT INTO weapons (Weapons_Type) VALUES (?)");
    if ( false===$stmtx ) {
      trigger_error($emsg);
    }

    $rc = $stmtx->bind_param('s', $Weapons_Type);
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
	
	$emsg = "Error Updating Weapon in Database!";
    $stmtx = $mysqli->prepare("UPDATE weapons set Weapons_Type = ? WHERE Weapons_ID = ?");
    if ( false===$stmtx ) {
      trigger_error($emsg);
    }

    $rc = $stmtx->bind_param('si', $Weapons_Type, $Weapons_ID);
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
	
	$emsg = "Error Deleting Weapon from Database!  This Weapon may be used in an Incident";
    $stmtx = $mysqli->prepare("DELETE FROM weapons WHERE Weapons_ID = ?");
    if ( false===$stmtx ) {
      trigger_error($emsg);
    }

    $rc = $stmtx->bind_param('i', $Weapons_ID);
    if (false===$rc)
    {
      trigger_error($emsg);
    }
    if ($resultdb = $stmtx->execute() != TRUE) {
      trigger_error($emsg);
    }
    $stmtx->close();
	
  }  

  $emsg = "Error Retrieving Weapons from Database!";
  $stmt = $mysqli->prepare("SELECT Weapons_ID, Weapons_Type FROM weapons order by Weapons_Type"); 
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
	"Weapons" => $result

  ));	
/* close connection */
  $mysqli->close();

?>