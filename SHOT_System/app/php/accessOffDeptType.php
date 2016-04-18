<?php

  $Action = $_POST['Action']; 
  $Dept_Type_ID = $_POST['Dept_Type_ID']; 
  $Dept_Type = $_POST['Dept_Type']; 
  $result = array();

/* This will automatically open a database connection and check if the session has expired */
  require("common.php");
  set_error_handler("customError");

  $func = "Access Department Type";
  $needed_access_functions = array("Access_NewIncident","Access_QueryUpdate");
  Verify_Security($func, $needed_access_functions);

  if ($Action == "A")
  {
	$emsg = "Error Adding Department Type to Database!";
    $stmtx = $mysqli->prepare("INSERT INTO officer_dept_type (Dept_Type) VALUES (?)");
    if ( false===$stmtx ) {
      trigger_error($emsg);
    }

    $rc = $stmtx->bind_param('s', $Dept_Type);
    if (false===$rc)
    {
      trigger_error($emsg);
    }
    if ($resultdb = $stmtx->execute() != TRUE) {
      trigger_error($emsg);
    }
    $stmtx->close();
	
  }  

  $emsg = "Error Retrieving Dept_Type from Database!";
  $stmt = $mysqli->prepare("SELECT Dept_Type_ID, Dept_Type FROM officer_dept_type order by Dept_Type"); 
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
	"Officer_Dept_Type" => $result	
  ));
/* close connection */
  $mysqli->close();

?>