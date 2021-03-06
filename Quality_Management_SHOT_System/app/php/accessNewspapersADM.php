<?php

  $Action = $_POST['Action']; 
  $Newspaper_ID = $_POST['Newspaper_ID']; 
  $Newspaper = $_POST['Newspaper']; 
  $result = array();

/* This will automatically open a database connection and check if the session has expired */
  require("commonADM.php");
  set_error_handler("customError");

  $func = "Access Newspapers";
  $needed_access_functions = array("Access_DatabaseMaint");
  Verify_Security($func, $needed_access_functions);

  if ($Action == "A")
  {
	
	$emsg = "Error Adding Newspaper to Database!";
    $stmtx = $mysqli->prepare("INSERT INTO newspapers (Newspaper) VALUES (?)");
    if ( false===$stmtx ) {
      trigger_error($emsg);
    }

    $rc = $stmtx->bind_param('s', $Newspaper);
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
	$emsg = "Error Updating Newspaper in Database!";
    $stmtx = $mysqli->prepare("UPDATE newspapers set Newspaper = ? WHERE Newspaper_ID = ?");
    if ( false===$stmtx ) {
      trigger_error($emsg);
    }

    $rc = $stmtx->bind_param('si', $Newspaper, $Newspaper_ID);
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
	
	$emsg = "Error Deleting Newspaper from Database!  This Newspaper may be used in an Incident";
    $stmtx = $mysqli->prepare("DELETE FROM newspapers WHERE Newspaper_ID = ?");
    if ( false===$stmtx ) {
      trigger_error($emsg);
    }

    $rc = $stmtx->bind_param('i', $Newspaper_ID);
    if (false===$rc)
    {
      trigger_error($emsg);
    }
    if ($resultdb = $stmtx->execute() != TRUE) {
      trigger_error($emsg);
    }
    $stmtx->close();
	
  }  

  $emsg = "Error Retrieving Newspapers from Database!";
  $stmt = $mysqli->prepare("SELECT Newspaper_ID, Newspaper FROM newspapers order by Newspaper"); 
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
	"Newspapers" => $result

  ));	
/* close connection */
  $mysqli->close();

?>