<?php

  $Action = $_POST['Action']; 
  $Aggression_Type_ID = $_POST['Aggression_Type_ID']; 
  $Aggression_Type = $_POST['Aggression_Type']; 
  $result = array();

/* This will automatically open a database connection and check if the session has expired */
  require("commonADM.php");
  set_error_handler("customError");

  $func = "Access Aggression Types";
  $needed_access_functions = array("Access_DatabaseMaint");
  Verify_Security($func, $needed_access_functions);

  if ($Action == "A")
  {
    $emsg = "Error Adding Aggression Type to Database!";
    $stmtx = $mysqli->prepare("INSERT INTO aggression_type (Aggression_Type) VALUES (?)");
    if ( false===$stmtx ) {
      trigger_error($emsg);
    }

    $rc = $stmtx->bind_param('s', $Aggression_Type);
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
    $emsg = "Error Updating Aggression Type in Database!";
    $stmtx = $mysqli->prepare("UPDATE aggression_type set Aggression_Type = ? WHERE Type_of_Agression_ID = ?");
    if ( false===$stmtx ) {
      trigger_error($emsg);
    }
    $rc = $stmtx->bind_param('si', $Aggression_Type, $Aggression_Type_ID);
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

    $emsg = "Error Deleting Aggression Type in Database!  This Aggression Type may be used in an Incident";
    $stmtx = $mysqli->prepare("DELETE FROM aggression_type WHERE Type_of_Agression_ID = ?");
    if ( false===$stmtx ) {
      trigger_error($emsg);
    }
    $rc = $stmtx->bind_param('i', $Aggression_Type_ID);
    if (false===$rc)
    {
      trigger_error($emsg);
    }
    if ($resultdb = $stmtx->execute() != TRUE) {
      trigger_error($emsg);
    }
    $stmtx->close();

  }  


  $emsg = "Error Retrieving Aggression Type from Database!";
  $stmt = $mysqli->prepare("SELECT Type_of_Agression_ID , Aggression_Type FROM aggression_type order by Aggression_Type "); 
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
	"Aggression_Type" => $result

  ));	
/* close connection */
  $mysqli->close();

?>